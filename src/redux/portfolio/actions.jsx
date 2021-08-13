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

export const readPortfolio = () => ({ type: READ_PORTFOLIO });
export const readPortfolioFailed = (message) => ({ type: READ_PORTFOLIO_FAILED, payload: message });
export const readPortfolioSuccess = (payload) => ({ type: READ_PORTFOLIO_SUCCESS, payload });

export const createPortfolio = () => ({ type: CREATE_PORTFOLIO });
export const createPortfolioFailed = (message) => ({ type: CREATE_PORTFOLIO_FAILED, payload: message });
export const createPortfolioSuccess = (payload) => ({ type: CREATE_PORTFOLIO_SUCCESS, payload });

export const updatePortfolio = (id, payload) => ({ type: UPDATE_PORTFOLIO, id, payload });
export const updatePortfolioFailed = (message) => ({ type: UPDATE_PORTFOLIO_FAILED, payload: message });
export const updatePortfolioSuccess = (payload) => ({ type: UPDATE_PORTFOLIO_SUCCESS, payload });

export const deletePortfolio = (id) => ({ type: DELETE_PORTFOLIO, id });
export const deletePortfolioFailed = (message) => ({ type: DELETE_PORTFOLIO_FAILED, payload: message });
export const deletePortfolioSuccess = (payload) => ({ type: DELETE_PORTFOLIO_SUCCESS, payload });