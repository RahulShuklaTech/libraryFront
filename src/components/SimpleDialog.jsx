import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line no-unused-vars
import ListItem from '@material-ui/core/ListItem';
// eslint-disable-next-line no-unused-vars
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// eslint-disable-next-line no-unused-vars
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// eslint-disable-next-line no-unused-vars
import PersonIcon from '@material-ui/icons/Person';
// eslint-disable-next-line no-unused-vars
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
// eslint-disable-next-line no-unused-vars
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, deleteYes } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Confirmation</DialogTitle>
      {/* <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List> */}
      
      
      <div className={classes.root}>
      <h3>delete this book</h3>
        <Button onClick = {handleClose} variant="contained" color="primary">
          No
        </Button>
        <Button onClick = {deleteYes(true)} variant="contained" color="secondary" >
          Yes
        </Button>

      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


