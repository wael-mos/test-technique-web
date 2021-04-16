import React from 'react';

import RowInfos from '../../tools/RowInfos';


const Characteristic = ({ equipment }) => {
	return (
		<div>
			<div>
				<RowInfos label='Nom du batiment :' value={equipment.building} />
				<RowInfos label='Niveau :' value={equipment.niveau} />
				<RowInfos label='Local :' value={equipment.local} />
			</div>
			<div>
				<RowInfos label='Marque :' value={equipment.brand} />
				<RowInfos label='Modèle :' value={equipment.model} />
				<RowInfos label='Numéro de série :' value={equipment.serialNumber} />
			</div>
			<div>
				<RowInfos label='Quantité :' value={equipment.quantity} />
				<RowInfos label='Dernier statut constaté :' value={equipment.status} />
				<RowInfos label='Prise de notes :' value={equipment.notes} />
			</div>
		</div>
	);
};

export default Characteristic;
