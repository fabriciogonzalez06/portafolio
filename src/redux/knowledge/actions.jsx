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

export const readKnowledge = () => ({ type: READ_KNOWLEDGE });
export const readKnowledgeFailed = (message) => ({ type: READ_KNOWLEDGE_FAILED, payload: message });
export const readKnowledgeSuccess = (payload) => ({ type: READ_KNOWLEDGE_SUCCESS, payload });

export const createKnowledge = () => ({ type: CREATE_KNOWLEDGE });
export const createKnowledgeFailed = (message) => ({ type: CREATE_KNOWLEDGE_FAILED, payload: message });
export const createKnowledgeSuccess = (payload) => ({ type: CREATE_KNOWLEDGE_SUCCESS, payload });

export const updateKnowledge = (id, payload) => ({ type: UPDATE_KNOWLEDGE, id, payload });
export const updateKnowledgeFailed = (message) => ({ type: UPDATE_KNOWLEDGE_FAILED, payload: message });
export const updateKnowledgeSuccess = (payload) => ({ type: UPDATE_KNOWLEDGE_SUCCESS, payload });

export const deleteKnowledge = (id) => ({ type: DELETE_KNOWLEDGE, id });
export const deleteKnowledgeFailed = (message) => ({ type: DELETE_KNOWLEDGE_FAILED, payload: message });
export const deleteKnowledgeSuccess = (payload) => ({ type: DELETE_KNOWLEDGE_SUCCESS, payload });