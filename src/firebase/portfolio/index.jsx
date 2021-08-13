import { formatDataFromQuerySnapshot } from '../../utils/formatQuerySnapshot';

import { db } from '../config';
import { PORTFOLIO_DB } from '../constants';

const portfolioRef = db.collection(`${PORTFOLIO_DB}`);

export const getPortfolioData = async () => {
    try {
        const res = await portfolioRef.get();
        return formatDataFromQuerySnapshot(res);
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const createPortfolioData = async (data) => {
    try {
        const createdData = await portfolioRef.add(data);
        const portfolio = await getPortfolioData();
        return { createdData, portfolio };
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const updatePortfolioData = async (id, { name } ) => {
    try {
        await portfolioRef.doc(id).update({ name });
        return await getPortfolioData();
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const deletePortfolioData = async (id) => {
    try {
        await portfolioRef.doc(id).delete();
        return await getPortfolioData();
    } catch ({ message }) {
        throw new Error(message);
    }
}

