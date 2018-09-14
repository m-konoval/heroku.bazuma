const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function (passport) {


    passport.use(new FacebookStrategy({
        clientID: '888247601368514',
        clientSecret: '630ab73403c999f9e393353c16d3fded',
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
    },
        function (accessToken, profile, done) {
            process.nextTick(function () {
                User.findOne({ 'facebook.id': profile.id }, function (err, user) {
                    if (err)
                        return done(err);
                    if (user)
                        return done(null, user);
                    else {
                        var newUser = new User();
                        newUser.facebook.id = profile.id;
                        newUser.facebook.token = accessToken;
                        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.facebook.email = profile.emails[0].value;

                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        })
                        console.log(profile);
                    }
                });
            });
        }

    ));
};
