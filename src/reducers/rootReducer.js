import { combineReducers } from 'redux';
import equipmentsReducer from './equipmentsReducer';

const rootReducer = combineReducers({
	equipments: equipmentsReducer,
});

export default rootReducer;