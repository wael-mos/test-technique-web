import React from 'react'
import PropTypes from 'prop-types';

const ListEquipments = ({ equipments }) => {
	console.log(equipments);
	return (
		<div>
			
		</div>
	)
}

export default ListEquipments;

ListEquipments.propTypes = {
	equipments: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	  ]),
};
