import { formatDataFromQuerySnapshot } from '../../utils/formatQuerySnapshot';
import { db } from './../config';
import { ABOUT_ME_DB } from './../constants';

// eslint-disable-next-line no-unused-vars
const aboutMeRef = db.collection(`${ABOUT_ME_DB}`);

export const getAboutMeData = async () => {
    try {
        const res = await aboutMeRef.get();
        return formatDataFromQuerySnapshot(res, true);
    } catch (error) {
        return error;
    }
}