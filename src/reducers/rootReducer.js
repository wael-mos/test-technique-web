import { combineReducers } from 'redux';
import equipmentsReducer from './equipmentsReducer';
import checkpointsReducer from './checkpointsReducer';

const rootReducer = combineReducers({
	checkpoints: checkpointsReducer,
	equipments: equipmentsReducer
});

export default rootReducer;