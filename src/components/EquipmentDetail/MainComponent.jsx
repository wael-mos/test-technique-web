import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grow, Tabs, Tab } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import TabPanel from './TabPanel';
import Informations from './Informations';

import { getCheckpoints } from '../../actions/checkpoints';

import useEffectCustom from '../../hooks/useEffectCustom';
import Characteristic from './Characteristic';


const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		minWidth: '80vw',
		marginBottom: '20px',
	}
}));

const StyledTabs = withStyles({
	root: {
		background: 'transparent',
	},
	// indicator: {
	// 	display: 'none',
	// },
})((props) => <Tabs {...props} />);

const StyledTab = withStyles(theme => ({
	root: {
		border: '1px solid',
		borderColor: 'black',
		color: 'gray',
		margin: '0 10px',
		borderBottom: 'none',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px',
		// background: 'transparent',
		opacity: 1,
	},
	selected: {
		width: '270px',
		borderColor: 'gray',
		color: 'black'
	},
}))((props) => <Tab {...props} />);

const EquipmentDetail = (props) => {

	const { equipment, getCheckpoints, checkpoints } = props;

	const classes = useStyles();
	
	const [tabIndex, setTabIndex] = useState(0);

	useEffectCustom(getCheckpoints, equipment.key);

	const handleChangeTabs = (event, newValue) => {
		setTabIndex(newValue);
	};

	const components = [
		{
			label: 'Informations',
			element: <Informations equipment={equipment.value} />
		},
		{
			label: 'Caractéristiques',
			element: <Characteristic equipment={equipment.value} />
		},
		{
			label: 'Points de contrôle et défauts associés',
			element: <div />
		}
	];

	const a11yProps = (index) => {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	};

	return (
		<Grow in={true} timeout={500}>
			<div className={classes.root}>
				<StyledTabs
					value={tabIndex}
					onChange={handleChangeTabs}
					variant="scrollable"
					scrollButtons="auto"
				>
					{components.map((component, i) => (
						<StyledTab
							key={i}
							label={component.label}
							{...a11yProps(i)}
						/>
					))}
				</StyledTabs>
				{components.map((component, i) => (
					<TabPanel key={i} value={tabIndex} index={i} >
						{tabIndex === i && component.element}
					</TabPanel>
				))}
			</div>
		</Grow >
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		checkpoints: state.checkpoints
	}
};

const mapDispatchToProps = {
		getCheckpoints
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentDetail)

EquipmentDetail.propTypes = {
	checkpoints: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]),
	equipment: PropTypes.object,
	getCheckpoints: PropTypes.func,
};
