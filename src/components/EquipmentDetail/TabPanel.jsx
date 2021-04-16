import React from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(() => ({
	root: {
		border: `1px solid black`,
	}
}));

const TabPanel = (props) => {
	const { children, value, index } = props;

	const classes = useStyles();

	return (
		<div
			{...props}
			className={classes.root}
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			<Box p={3}>{children}</Box>
		</div>
	);
};

export default TabPanel;
