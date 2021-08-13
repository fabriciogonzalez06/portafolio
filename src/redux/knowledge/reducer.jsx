import {

    READ_KNOWLEDGE,
    READ_KNOWLEDGE_FAILED,
    READ_KNOWLEDGE_SUCCESS,

    CREATE_KNOWLEDGE,
    CREATE_KNOWLEDGE_FAILED,
    CREATE_KNOWLEDGE_SUCCESS,

    UPDATE_KNOWLEDGE,
    UPDATE_KNOWLEDGE_FAILED,
    UPDATE_KNOWLEDGE_SUCCESS,

    DELETE_KNOWLEDGE,
    DELETE_KNOWLEDGE_FAILED,
    DELETE_KNOWLEDGE_SUCCESS

} from './constants';

const INITIAL_ABOUT_ME_STATE = {
    studying: undefined,
    selectedStudying: undefined,
    skill: undefined,
    selectedSkill: undefined,
    loading: false,
    readError: undefined,
    createError: undefined,
    updateError: undefined,
    deleteError: undefined
}

export default function Knowledge(state = INITIAL_ABOUT_ME_STATE, { type, payload }) {
    switch (type) {
        case READ_KNOWLEDGE: {
            return { ...state, loading: true, readError: undefined }
        }
        case READ_KNOWLEDGE_FAILED: {
            return { ...state, loading: false, readError: payload }
        }
        case READ_KNOWLEDGE_SUCCESS: {
            const { skills = [], studying = [] } = payload;
            return { ...state, loading: false, skills, studying }
        }

        case CREATE_KNOWLEDGE: {
            return { ...state, loading: true, createError: undefined }
        }
        case CREATE_KNOWLEDGE_FAILED: {
            return { ...state, loading: false, createError: payload }
        }
        case CREATE_KNOWLEDGE_SUCCESS: {
            const { data = [] } = payload;
            return { ...state, loading: false, knowledge: data }
        }

        case UPDATE_KNOWLEDGE: {
            return { ...state, loading: true, updateError: undefined }
        }
        case UPDATE_KNOWLEDGE_FAILED: {
            return { ...state, loading: false, updateError: payload }
        }
        case UPDATE_KNOWLEDGE_SUCCESS: {
            const { data = [] } = payload;
            return { ...state, loading: false, knowledge: data }
        }

        case DELETE_KNOWLEDGE: {
            return { ...state, loading: true, updateError: undefined }
        }
        case DELETE_KNOWLEDGE_FAILED: {
            return { ...state, loading: false, updateError: payload }
        }
        case DELETE_KNOWLEDGE_SUCCESS: {
            const { data = [] } = payload;
            return { ...state, loading: false, knowledge: data }
        }

        default: {
            return state;
        }
    }
}