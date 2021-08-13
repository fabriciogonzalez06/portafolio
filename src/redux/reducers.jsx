import { combineReducers } from 'redux';

import AboutMe from './aboutMe/reducer';
import Knowledge from './knowledge/reducer';
import Resume from './resume/reducer';
import Portfolio from './portfolio/reducer';
import InitialInformation from './initialInformation/reducer';

export default combineReducers({
    AboutMe,
    Knowledge,
    Resume,
    Portfolio,
    InitialInformation
});
