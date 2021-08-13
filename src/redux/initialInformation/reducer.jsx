import {

    READ_INITIAL_INFORMATION,
    READ_INITIAL_INFORMATION_FAILED,
    READ_INITIAL_INFORMATION_SUCCESS

} from './constants';

const INITIAL_INFORMATION_STATE = {
    loading: false,
    error: undefined
}

export default function InitialInformation(state = INITIAL_INFORMATION_STATE, { type, payload }) {
    switch (type) {
        case READ_INITIAL_INFORMATION: {
            return { ...state, loading: true, error: undefined }
        }
        case READ_INITIAL_INFORMATION_FAILED: {
            return { ...state, loading: false, error: payload }
        }
        case READ_INITIAL_INFORMATION_SUCCESS: {
            return { ...state, loading: false }
        }
        default: {
            return state;
        }
    }
}