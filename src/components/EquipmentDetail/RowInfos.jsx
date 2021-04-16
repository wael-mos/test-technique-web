import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
	rowInfos: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	fixedText: {
		marginRight: '5px',
	}
}));

const RowInfos = ({ label, value }) => {

	const classes = useStyles();

	return (
		<div className={classes.rowInfos}>
			<Typography className={classes.fixedText} variant='body1'>{label}</Typography>
			<Typography variant='body1'>{value}</Typography>
		</div>
	);
};

export default RowInfos;

RowInfos.propTypes = {
	label: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
};