import { Auth } from "./auth";

export class AppState {
    isLogin: boolean = false;
    isHomePageLoading: boolean = false;
    isShowAuthDialog: boolean = false;
    isAppLoading: boolean = false;
    // isChallengeDetailPageLoading: boolean = false;
    // isAccountProfilePageLoading: boolean = false;
    // isEditAccountProfilePageLoading: boolean = false;
    isShowAccountMenu: boolean = false;
    isAccountCreatePageLoading: boolean = false;
    isAfterRegister: boolean = false;
    authData: Auth;

    constructor() {}

    public setIsLogin(val: boolean): void {
        this.isLogin = val;
    }

    public setIsHomePageLoading(val: boolean): void {
        this.isHomePageLoading = val;
    }

    public setAuthData(data: Auth): void {
        this.authData = data;
    }

    public setIsShowAuthDialog(val: boolean): void {
        this.isShowAuthDialog = val;
    }

    public setIsAppLoading(val: boolean): void {
        this.isAppLoading = val;
    }

    public setIsShowAccountMenu(val: boolean): void {
        this.isShowAccountMenu = val;
    }

    public setIsAccountCreatePageLoading(val: boolean): void {
        this.isAccountCreatePageLoading = val;
    }

    public setIsAfterRegister(val: boolean): void {
        this.isAfterRegister = val;
    }

}