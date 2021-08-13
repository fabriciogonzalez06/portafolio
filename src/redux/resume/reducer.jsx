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

const INITIAL_RESUME_STATE = {
    studies: undefined,
    seletedStudy: undefined,
    workExperiencies: undefined,
    selectedWorkExperience: undefined,
    loading: false,
    readError: undefined,
    createError: undefined,
    updateError: undefined,
    deleteError: undefined
}

export default function Resume(state = INITIAL_RESUME_STATE, { type, payload }) {
    switch (type) {
        case READ_RESUME: {
            return { ...state, loading: true, readError: undefined };
        }
        case READ_RESUME_FAILED: {
            return { ...state, loading: false, readError: payload };
        }
        case READ_RESUME_SUCCESS: {
            const { studies = [], workExperiencies = [] } = payload;
            return { ...state, loading: false, studies, workExperiencies };
        }

        case CREATE_RESUME: {
            return { ...state, loading: true, createError: undefined };
        }
        case CREATE_RESUME_FAILED: {
            return { ...state, loading: false, createError: payload };
        }
        case CREATE_RESUME_SUCCESS: {
            const { studies = [], workExperiencies = [] } = payload;
            return { ...state, loading: false, studies, workExperiencies };
        }

        case UPDATE_RESUME: {
            return { ...state, loading: true, updateError: undefined };
        }
        case UPDATE_RESUME_FAILED: {
            return { ...state, loading: false, updateError: payload };
        }
        case UPDATE_RESUME_SUCCESS: {
            const { studies = [], workExperiencies = [] } = payload;
            return { ...state, loading: false, studies, workExperiencies };
        }

        case DELETE_RESUME: {
            return { ...state, loading: true, updateError: undefined };
        }
        case DELETE_RESUME_FAILED: {
            return { ...state, loading: false, updateError: payload };
        }
        case DELETE_RESUME_SUCCESS: {
            const { studies = [], workExperiencies = [] } = payload;
            return { ...state, loading: false, studies, workExperiencies };
        }

        default: {
            return state;
        }
    }
}