import React from 'react'
import PropTypes from 'prop-types';

import { TableCell, TableContainer, TableRow, TableHead, TableBody, Table } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(1)
	},
	observations_container: {
		maxHeight: '80vh'
	},
	row_hover: {
		'& :hover': {
			backgroundColor: 'gray',
		},
	},
	loading: {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: '10em'
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	modal_container: {
		maxWidth: 'fit-content',
		minWidth: '300px',
		margin: 'auto',
		backgroundColor: 'white',
		marginTop: '15vh',
		padding: theme.spacing(2),
	},
}));

const labelsList = ['Nom', 'Domaine', 'Nombre de défauts', 'Photo'];

const StyledCategoryCell = withStyles(() => ({
	root: {
		border: `1px solid black`,
		fontSize: '1.1rem',
	},
}))(TableCell);

const StyledTableCell = withStyles(() => ({
	root: {
		border: `1px solid black`,
		fontSize: '0.9rem',
	},
}))(TableCell);

const StyledTableRow = withStyles(() => ({
	root: {
		backgroundColor: 'white'
	},
}))(TableRow);

const TableEquipments = ({ equipments, handleClickRow }) => {

	const classes = useStyles();

	return (
		<TableContainer className={classes.observations_container}>
			<Table stickyHeader aria-label='equipments'>
				<TableHead>
					<TableRow>
						{labelsList.map((label) =>
							<StyledCategoryCell
								key={label}
								align='center'
							>
								{label}
							</StyledCategoryCell>
						)}
					</TableRow>
				</TableHead>
				<TableBody className={classes.row_hover}>
					{equipments.map((row) => (
						<StyledTableRow
							onClick={() => handleClickRow(row.value, row.key)}
							key={row.key}
						>
							<StyledTableCell align='center'>{row.value.name}</StyledTableCell>
							<StyledTableCell align='center'>{row.value.domain}</StyledTableCell>
							<StyledTableCell align='center'>{row.value.nbFaults}</StyledTableCell>
							<StyledTableCell align='center'>
								<img src={row.value.photo} alt="" border='1' height='200' width='200'></img>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableEquipments;

TableEquipments.propTypes = {
	equipments: PropTypes.array,
	handleClickRow: PropTypes.func,
};
