import { db } from './../config';
import { formatDataFromQuerySnapshot } from './../../utils/formatQuerySnapshot';

import {
    ABOUT_ME_DB,
    KNOWLEDGE_DB,
    PORTFOLIO_DB,
    RESUME_DB
} from './../constants';

const aboutMeRef = db.collection(`${ABOUT_ME_DB}`);
const knowledgeRef = db.collection(`${KNOWLEDGE_DB}`);
const portfolioRef = db.collection(`${PORTFOLIO_DB}`);
const resumeRef = db.collection(`${RESUME_DB}`);

export const getInitialInformationData = async () => {
    try {
        const promises = [aboutMeRef.get(), knowledgeRef.get(), portfolioRef.get(), resumeRef.get()];
        const [aboutMeResult, knowlodgeResult, portfolioResult, resumeResult] = await Promise.all(promises);
        const data = {
            aboutMe: formatDataFromQuerySnapshot(aboutMeResult, true),
            knowledge: formatDataFromQuerySnapshot(knowlodgeResult),
            portfolio: formatDataFromQuerySnapshot(portfolioResult),
            resume: formatDataFromQuerySnapshot(resumeResult),
        }
        return data;
    } catch ({ message }) {
        throw new Error(message);
    }
}