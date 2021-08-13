import {
    READ_INITIAL_INFORMATION,
    READ_INITIAL_INFORMATION_FAILED,
    READ_INITIAL_INFORMATION_SUCCESS

} from './constants';

export const readInitialInformation = () => ({ type: READ_INITIAL_INFORMATION });
export const readInitialInformationFailed = (message) => ({ type: READ_INITIAL_INFORMATION_FAILED, payload: message });
export const readInitialInformationSuccess = (payload) => ({ type: READ_INITIAL_INFORMATION_SUCCESS, payload });