export class DEFINE {

    /* APP */
    private _APP_ID     = '2094651910791511';
    private _APP_SECRET = 'bc1686b32e5d2261fdbbea619bd6be2f';
    private _APP_TOKEN  = `${this._APP_ID}|${this._APP_SECRET}`;

    /* PAGES */
    // private _PAGE_TOKEN = '';

    APP_ID () { return this._APP_ID; }
    APP_SECRET () { return this._APP_SECRET; }
    APP_TOKEN () { return this._APP_TOKEN; }

    // PAGE_TOKEN () { return this._PAGE_TOKEN; }
}
