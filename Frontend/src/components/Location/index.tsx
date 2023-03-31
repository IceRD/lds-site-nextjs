import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const options = ['г. Луганск', 'пгт. Белореченский', 'пгт. Комсомолец', 'пгт. Врубовский', 'с. Гаевое', 'с. Сабовка', 'с. Веселая Тарасовка', 'п. Сборное'];

export interface ConfirmationDialogRawProps {
	classes: Record<'paper', string>;
	id: string;
	keepMounted: boolean;
	value: string;
	open: boolean;
	onClose: (value?: string) => void;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
	const {onClose, value: valueProp, open, ...other} = props;
	const [value, setValue] = React.useState(valueProp);
	const radioGroupRef = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		if (!open) {
			setValue(valueProp);
		}
	}, [valueProp, open]);

	const handleEntering = () => {
		if (radioGroupRef.current != null) {
			radioGroupRef.current.focus();
		}
	};

	const handleCancel = () => {
		onClose();
	};

	const handleOk = () => {
		onClose(value);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" onEntering={handleEntering} aria-labelledby="confirmation-dialog-title" open={open} {...other}>
			<DialogTitle id="confirmation-dialog-title">Выберите город</DialogTitle>
			<DialogContent dividers>
				<RadioGroup ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
					{options.map((option) => (
						<FormControlLabel value={option} key={option} control={<Radio />} label={option} />
					))}
				</RadioGroup>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCancel} color="primary">
					Отмена
				</Button>
				<Button onClick={handleOk} color="primary">
					Ок
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
		paper: {
			width: '80%',
			maxHeight: 435,
		},
	}),
);

const Location: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('г. Луганск');

	const handleClickListItem = () => {
		setOpen(true);
	};

	const handleClose = (newValue?: string) => {
		setOpen(false);

		if (newValue) {
			setValue(newValue);
		}
	};

	return (
		<>
			<Button color="inherit" startIcon={<LocationOnIcon />} onClick={handleClickListItem}>
				{value}
			</Button>
			<ConfirmationDialogRaw
				classes={{
					paper: classes.paper,
				}}
				id="ringtone-menu"
				keepMounted
				open={open}
				onClose={handleClose}
				value={value}
			/>
		</>
	);
};

export default Location;
