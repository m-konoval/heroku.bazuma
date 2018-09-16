const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');

module.exports = function (app, passport) {

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }))


    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });


    passport.use(new FacebookStrategy({
        clientID: '888247601368514',
        clientSecret: '630ab73403c999f9e393353c16d3fded',
        callbackURL: 'http://localhost:8080/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
        function (accessToken, refreshToken, profile, done) {
            console.log(profile);

            // process.nextTick(function () {
            //     User.findOne({ 'facebook.id': profile.id }, function (err, user) {
            //         if (err)
            //             return done(err);
            //         if (user)
            //             return done(null, user);
            //         else {
            //             var newUser = new User();
            //             newUser.facebook.id = profile.id;
            //             newUser.facebook.token = accessToken;
            //             newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
            //             newUser.facebook.email = profile.emails[0].value;

            //             newUser.save(function (err) {
            //                 if (err)
            //                     throw err;
            //                 return done(null, newUser);
            //             })
            //             console.log(profile);
            //         }
            //     });
            // });

            done(null, profile);
        }

    ));

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

};
