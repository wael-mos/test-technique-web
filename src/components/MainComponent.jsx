import React from 'react';
import { connect } from 'react-redux';

import ListEquipments from './ListEquipments/MainComponent';

import { getEquipments } from '../actions/equipments';

import useEffectCustom from '../hooks/useEffectCustom';


const MainComponent = (props) => {

	useEffectCustom(props.getEquipments);

	return (
		<ListEquipments equipments={props.equipments} />
	)
};

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		equipments: state.equipments
	}
};

const mapDispatchToProps = {
		getEquipments
}


export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
