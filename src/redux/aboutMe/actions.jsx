import {
    READ_ABOUT_ME,
    READ_ABOUT_ME_FAILED,
    READ_ABOUT_ME_SUCCESS

} from './constants';

export const readAboutMe = () => ({ type: READ_ABOUT_ME });
export const readAboutMeFailed = (message) => ({ type: READ_ABOUT_ME_FAILED, payload: message });
export const readAboutMeSuccess = (payload) => ({ type: READ_ABOUT_ME_SUCCESS, payload });