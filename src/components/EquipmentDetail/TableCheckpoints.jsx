import React from 'react'
import PropTypes from 'prop-types';

import { TableCell, TableContainer, TableRow, TableHead, TableBody, Table } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const labelsList = ['Point de contrôle', 'Défaut', 'Préconisation', 'Photo'];

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

const TableCheckpoints = ({ checkpoints }) => {

	return (
		<TableContainer>
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
				<TableBody>
					{checkpoints.map((row) => (
						<StyledTableRow key={row.key}>
							<StyledTableCell align='center'>{row.value.name}</StyledTableCell>
							<StyledTableCell align='center'>{row.value.fault}</StyledTableCell>
							<StyledTableCell align='center'>{row.value.recommandation}</StyledTableCell>
							<StyledTableCell align='center'>
								{row.value.photo ? <img src={row.value.photo} alt="" border='0' height='200' width='200'></img> : ''}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableCheckpoints;

TableCheckpoints.propTypes = {
	checkpoints: PropTypes.array,
};
