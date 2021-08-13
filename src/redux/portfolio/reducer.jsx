import {

    READ_PORTFOLIO,
    READ_PORTFOLIO_FAILED,
    READ_PORTFOLIO_SUCCESS,

    CREATE_PORTFOLIO,
    CREATE_PORTFOLIO_FAILED,
    CREATE_PORTFOLIO_SUCCESS,

    UPDATE_PORTFOLIO,
    UPDATE_PORTFOLIO_FAILED,
    UPDATE_PORTFOLIO_SUCCESS,

    DELETE_PORTFOLIO,
    DELETE_PORTFOLIO_FAILED,
    DELETE_PORTFOLIO_SUCCESS

} from './constants';

const INITIAL_PORTFOLIO_STATE = {
    portfolio: undefined,
    selectedPortfolio: undefined,
    loading: false,
    readError: undefined,
    createError: undefined,
    updateError: undefined,
    deleteError: undefined
}

export default function Portfolio(state = INITIAL_PORTFOLIO_STATE, { type, payload }) {
    switch (type) {
        case READ_PORTFOLIO: {
            return { ...state, loading: true, readError: undefined };
        }
        case READ_PORTFOLIO_FAILED: {
            return { ...state, loading: false, readError: payload };
        }
        case READ_PORTFOLIO_SUCCESS: {
            const { portfolio } = payload;
            return { ...state, loading: false, portfolio };
        }

        case CREATE_PORTFOLIO: {
            return { ...state, loading: true, createError: undefined };
        }
        case CREATE_PORTFOLIO_FAILED: {
            return { ...state, loading: false, createError: payload };
        }
        case CREATE_PORTFOLIO_SUCCESS: {
            const { portfolio } = payload;
            return { ...state, loading: false, portfolio };
        }

        case UPDATE_PORTFOLIO: {
            return { ...state, loading: true, updateError: undefined };
        }
        case UPDATE_PORTFOLIO_FAILED: {
            return { ...state, loading: false, updateError: payload };
        }
        case UPDATE_PORTFOLIO_SUCCESS: {
            const { portfolio } = payload;
            return { ...state, loading: false, portfolio };
        }

        case DELETE_PORTFOLIO: {
            return { ...state, loading: true, updateError: undefined };
        }
        case DELETE_PORTFOLIO_FAILED: {
            return { ...state, loading: false, updateError: payload };
        }
        case DELETE_PORTFOLIO_SUCCESS: {
            const { portfolio } = payload;
            return { ...state, loading: false, portfolio };
        }

        default: {
            return state;
        }
    }
}