import { ACTIONS } from '../constants/actionConstant';

const reducer = (state = [], action) => {
	switch (action.type) {
		case ACTIONS.GET_CHECKPOINTS:
			return { ...state, checkpoints: action.checkpoints }
		default:
			return state
	}
};

export default reducer;