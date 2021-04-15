import { database } from '../firebase.js';
import { ACTIONS } from '../constants/actionConstant';

export const getEquipments = () => async dispatch => {
	var data = [];
	const equipmentsRef = database.ref('Equipments').orderByChild('name');
	await equipmentsRef.once('value', (snapshot) => {
		snapshot.forEach((childSnapshot) => {
			const key = childSnapshot.key;
			const value = childSnapshot.val();
			data.push({ key, value });
		});
	});

	dispatch({
		type: ACTIONS.GET_EQUIPMENTS,
		equipments: data
	});
};