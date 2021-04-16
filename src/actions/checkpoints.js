import { database } from '../firebase.js';
import { ACTIONS } from '../constants/actionConstant';

export const getCheckpoints = (id) => async dispatch => {
	var data = [];
	const checkpointsRef = database.ref('Checkpoints');
	await checkpointsRef.once('value', (snapshot) => {
		snapshot.forEach((childSnapshot) => {
			const value = childSnapshot.val();
			if (value.equipmentKey === id)
				data.push({ key: childSnapshot.key, value });
		});
	});

	dispatch({
		type: ACTIONS.GET_CHECKPOINTS,
		checkpoints: data
	});
};