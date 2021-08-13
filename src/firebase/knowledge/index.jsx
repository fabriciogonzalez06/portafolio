import { formatDataFromQuerySnapshot } from './../../utils/formatQuerySnapshot';

import { db } from './../config';
import { KNOWLEDGE_DB } from './../constants';

const knowledgeRef = db.collection(`${KNOWLEDGE_DB}`);

export const getKnowledgeData = async () => {
    try {
        const res = await knowledgeRef.get();
        return formatDataFromQuerySnapshot(res);
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const createKnowledgeData = async (data) => {
    try {
        const createdData = await knowledgeRef.add(data);
        const knowledge = await getKnowledgeData();
        return { createdData, knowledge };
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const updateKnowledgeData = async (id, { name }) => {
    try {
        await knowledgeRef.doc(id).update({ name });
        return await getKnowledgeData();
    } catch ({ message }) {
        throw new Error(message);
    }
}

export const deleteKnowledgeData = async (id) => {
    try {
        await knowledgeRef.doc(id).delete();
        return await getKnowledgeData();
    } catch ({ message }) {
        throw new Error(message);
    }
}

