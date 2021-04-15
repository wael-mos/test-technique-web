import { ACTIONS } from '../constants/actionConstant';

const reducer = (state = [], action) => {
	switch (action.type) {
		case ACTIONS.GET_EQUIPMENTS:
			return { ...state, equipments: action.equipments }
		default:
			return state
	}
};

export default reducer;