import { formatDataFromQuerySnapshot } from '../../utils/formatQuerySnapshot';

import { db } from '../config';
import { RESUME_DB } from '../constants';

const resumeRef = db.collection(`${RESUME_DB}`);

export const getResumeData = async () => {
    try {
        const res = await resumeRef.get();
        return formatDataFromQuerySnapshot(res);
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const createResumeData = async (data) => {
    try {
        const createdData = await resumeRef.add(data);
        const resume = await getResumeData();
        return { createdData, resume };
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const updateResumeData = async (id, { name }) => {
    try {
        await resumeRef.doc(id).update({ name });
        return await getResumeData();
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const deleteResumeData = async (id) => {
    try {
        await resumeRef.doc(id).delete();
        return await getResumeData();
    } catch ({ message }) {
        throw new Error(message);
    }
}

