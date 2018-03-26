import { auth } from './firebase';


const prodUrl = "https://prod/";
const devUrl = "http://localhost/"

const url = process.env.NODE_ENV === 'production'
    ? prodUrl
    : devUrl;

var actionCodeSettings = {
    url: `${url}?finishPasswordLess`,
    handleCodeInApp: true,
    iOS: {},
    android: {}
};

export const signPasswordLess = (email) => auth.sendSignInLinkToEmail(email, actionCodeSettings);
