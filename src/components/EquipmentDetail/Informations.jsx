import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

import RowInfos from './RowInfos';

const useStyles = makeStyles(() => ({
	img_container: {
		display: 'flex',
		justifyContent: 'center'
	}
}));

const Informations = ({ equipment }) => {

	const classes = useStyles();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<RowInfos label='Nom :' value={equipment.name} />
				<RowInfos label='Domaine :' value={equipment.domain} />
				<RowInfos label='Nombre de défauts :' value={equipment.nbFaults} />
			</Grid>
			<Grid item className={classes.img_container} xs={12}>
				<img src={equipment.photo} alt="" border='1' width='600' />
			</Grid>
		</Grid>
	);
};

export default Informations;
