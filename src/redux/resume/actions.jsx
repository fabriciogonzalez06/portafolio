import {
    READ_RESUME,
    READ_RESUME_FAILED,
    READ_RESUME_SUCCESS,

    CREATE_RESUME,
    CREATE_RESUME_FAILED,
    CREATE_RESUME_SUCCESS,

    UPDATE_RESUME,
    UPDATE_RESUME_FAILED,
    UPDATE_RESUME_SUCCESS,

    DELETE_RESUME,
    DELETE_RESUME_FAILED,
    DELETE_RESUME_SUCCESS

} from './constants';

export const readResume = () => ({ type: READ_RESUME });
export const readResumeFailed = (message) => ({ type: READ_RESUME_FAILED, payload: message });
export const readResumeSuccess = (payload) => ({ type: READ_RESUME_SUCCESS, payload });

export const createResume = () => ({ type: CREATE_RESUME });
export const createResumeFailed = (message) => ({ type: CREATE_RESUME_FAILED, payload: message });
export const createResumeSuccess = (payload) => ({ type: CREATE_RESUME_SUCCESS, payload });

export const updateResume = (id, payload) => ({ type: UPDATE_RESUME, id, payload });
export const updateResumeFailed = (message) => ({ type: UPDATE_RESUME_FAILED, payload: message });
export const updateResumeSuccess = (payload) => ({ type: UPDATE_RESUME_SUCCESS, payload });

export const deleteResume = (id) => ({ type: DELETE_RESUME, id });
export const deleteResumeFailed = (message) => ({ type: DELETE_RESUME_FAILED, payload: message });
export const deleteResumeSuccess = (payload) => ({ type: DELETE_RESUME_SUCCESS, payload });