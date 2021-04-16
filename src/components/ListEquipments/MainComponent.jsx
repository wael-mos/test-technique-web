import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { CircularProgress, TextField, Typography, Grid, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useEffectCustom from '../../hooks/useEffectCustom';
import TableEquipments from './TableEquipments';

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


const ListEquipments = ({ equipments }) => {

	const classes = useStyles();

	const [dataFinal, setDataFinal] = useState([]);
	const [modalOpened, setModalOpen] = useState(false);
	const [modalData, setModalData] = useState({});

	useEffectCustom(setDataFinal, equipments.equipments, [equipments]);

	const handleSearch = (event) => {
		const searchedData = equipments.equipments.filter(equipment => {
			const { name, domain, nbFaults } = equipment.value;
			const searchIn = `${name}//${domain}//${nbFaults}`.toLowerCase();
			return searchIn.includes(event.target.value.toLowerCase());
		});
		setDataFinal(searchedData);
	};

	const handleClickRow = (row, key) => {
		setModalData({ row, key });
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
		setModalData({});
	};
	console.log(dataFinal)

	return (
		<Grid container className={classes.root} direction='column' spacing={3}>
			<Grid className={classes.header} item>
				<Typography variant='h3'>beeldi-test-technique</Typography>
				<TextField
					variant="outlined"
					placeholder="Search..."
					onChange={handleSearch}
					style={{ width: '200px', justifyContent: 'center' }}
				/>
			</Grid>
			<Grid item>
				{!dataFinal ?
					<div className={classes.loading}>
						<CircularProgress size={100} />
					</div>
					: <div>
						<TableEquipments equipments={dataFinal} handleClickRow={handleClickRow} />
						<div className={classes.modal_root}>
							<Modal
								open={modalOpened}
								onClose={handleClose}
							>
								<div className={classes.modal_container} >
									
								</div>
							</Modal>
						</div>
					</div>
				}
			</Grid>
		</Grid>
	)
}

export default ListEquipments;

ListEquipments.propTypes = {
	equipments: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]),
};
