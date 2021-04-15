import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { TableCell, TableContainer, TableRow, TableHead, TableBody, Table,CircularProgress, TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import useEffectCustom from '../../hooks/useEffectCustom';

const useStyles = makeStyles((theme) => ({
	observations_container: {
		maxHeight: '300px',
		backgroundColor: 'white',
	},
	row_hover: {
		'& :hover': {
			backgroundColor: 'pink',
		},
	},
	gridStart: {
		display: 'flex',
	},
	text: {
		color: 'white',
		marginRight: theme.spacing(1),
	},
	secondText: {
		color: 'gray',
		marginRight: theme.spacing(1),
		'&:hover': {
			cursor: 'pointer',
			textDecoration: 'underline'
		}
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		height: '55px',
		marginLeft: theme.spacing(1),
		alignItems: 'center'
	},
	loading: {
		display: 'flex',
		justifyContent: 'center'
	},
	searchInput: {
		flex: '1 1 50%',
	},
}));

const labelsList = ['Nom', 'Domaine', 'Nombre de défauts', 'Photo'];

const StyledCategoryCell = withStyles((theme) => ({
	root: {
		border: `1px solid black`,
		fontSize: '0.8rem',
		color: 'black',
	},
}))(TableCell);

const StyledTableCell = withStyles((theme) => ({
	root: {
		border: `1px solid yellow`,
		fontSize: '0.7rem',
		color: 'green',
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		backgroundColor: 'blue'
	},
}))(TableRow);

const ListEquipments = ({ equipments }) => {

	const classes = useStyles();

	const [dataFinal, setDataFinal] = useState([]);

	useEffectCustom(setDataFinal, equipments.equipments, [equipments]);

	const handleSearch = (event) => {
		const searchedData = equipments.equipments.filter(equipment => {
			const { name, domain } = equipment.value;
			const searchIn = `${name}//${domain}`.toLowerCase();
			return searchIn.includes(event.target.value.toLowerCase());
		});
		setDataFinal(searchedData);
	};

	return (
		<div>
			{!dataFinal ?
				<CircularProgress size={100} className={classes.loading} />
				: <div>
					<div className={classes.searchInput}>
						<TextField
							variant="outlined"
							placeholder="Search..."
							onChange={handleSearch}
							style={{ width: '200px' }}
						/>
					</div>
					<TableContainer className={classes.observations_container}>
						<Table stickyHeader aria-label='equipments'>
							<TableHead>
								<TableRow>
									{labelsList.map((label) =>
										<StyledCategoryCell
											key={label}
											className={classes.observations_category}
											align='center'
										>
											{label}
										</StyledCategoryCell>
									)}
								</TableRow>
							</TableHead>
							<TableBody className={classes.row_hover}>
								{dataFinal.map((row) => (
									<StyledTableRow
										// onClick={() => handleClickRow(row, row.key)}
										key={row.key}
									>
										<StyledTableCell align='center'>{row.value.name}</StyledTableCell>
										<StyledTableCell align='center'>{row.value.domain}</StyledTableCell>
										<StyledTableCell align='center'>{row.value.nbFaults}</StyledTableCell>
										<StyledTableCell align='center'>
											<img src={row.value.photo} alt="" border='3' height='100' width='100'></img>
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			}
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
