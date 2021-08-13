import {

    READ_ABOUT_ME,
    READ_ABOUT_ME_FAILED,
    READ_ABOUT_ME_SUCCESS

} from './constants';

const INITIAL_ABOUT_ME_STATE = {
    aboutMe: undefined,
    loading: false,
    error: undefined
}

export default function AboutMe(state = INITIAL_ABOUT_ME_STATE, { type, payload }) {
    switch (type) {
        case READ_ABOUT_ME: {
            return { ...state, loading: true, error: undefined }
        }
        case READ_ABOUT_ME_FAILED: {
            return { ...state, loading: false, error: payload }
        }
        case READ_ABOUT_ME_SUCCESS: {
            return { ...state, loading: false, aboutMe: payload }
        }
        default: {
            return state;
        }
    }
}