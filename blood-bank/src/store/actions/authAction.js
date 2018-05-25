<<<<<<< HEAD
export class AuthAction{
    static SIGNUP = "SIGNUP";
    static SIGNUP_REJECT = "SIGNUP_REJECT";
    static LOGIN = "LOGIN";
    static LOGIN_REJECT = "LOGIN_REJECT";
    static LOGOUT = "LOGOUT";
    static LOGOUT_REJECT = "LOGOUT_REJECT";
    static DONOR = "DONOR";
    static DONOR_LIST = "DONOR_LIST";
    static LOADING = "LOADING";

    static loading(){
        return{
            type: AuthAction.LOADING
        }
    }
    static signupSuccess(user){
        return{
            type: AuthAction.SIGNUP,
            value: user
        }
    }
    static signupReject(error){
        return{
            type: AuthAction.SIGNUP_REJECT,
            value: error
        }
    }
    static loginSuccess(authUser){
        return{
            type: AuthAction.LOGIN,
            value: authUser
        }
    }
    static loginReject(error){
        return{
            type: AuthAction.LOGIN_REJECT,
            value: error
        }
    }
    static logoutSuccess(){
        return{
            type: AuthAction.LOGOUT
        }
    }
    static logoutReject(error){
        return{
            type: AuthAction.LOGOUT_REJECT,
            value: error
        }
    }
    static donorSuccess(){
        return{
            type: AuthAction.DONOR
        }
    }
    static donorList(donorList){
        return{
            type: AuthAction.DONOR_LIST,
            value: donorList
        }
    }
=======
export class AuthAction{
    static SIGNUP = "SIGNUP";
    static SIGNUP_REJECT = "SIGNUP_REJECT";
    static LOGIN = "LOGIN";
    static LOGIN_REJECT = "LOGIN_REJECT";
    static LOGOUT = "LOGOUT";
    static LOGOUT_REJECT = "LOGOUT_REJECT";
    static DONOR = "DONOR";
    static DONOR_LIST = "DONOR_LIST";

    static signupSuccess(user){
        return{
            type: AuthAction.SIGNUP,
            value: user
        }
    }
    static signupReject(error){
        return{
            type: AuthAction.SIGNUP_REJECT,
            value: error
        }
    }
    static loginSuccess(authUser){
        return{
            type: AuthAction.LOGIN,
            value: authUser
        }
    }
    static loginReject(error){
        return{
            type: AuthAction.LOGIN_REJECT,
            value: error
        }
    }
    static logoutSuccess(){
        return{
            type: AuthAction.LOGOUT
        }
    }
    static logoutReject(error){
        return{
            type: AuthAction.LOGOUT_REJECT,
            value: error
        }
    }
    static donorSuccess(donor){
        return{
            type: AuthAction.DONOR,
            value: donor
        }
    }
    static donorList(donorList){
        return{
            type: AuthAction.DONOR_LIST,
            value: donorList
        }
    }
>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
}