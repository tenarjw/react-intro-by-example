import { Button, withStyles } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import buttonStyle from 'assets/jss/material-dashboard-react/buttonStyle';
import {default as cx} from 'classnames';
// https://stackoverflow.com/questions/54500943/unable-to-use-classnames-in-typescript-due-to-no-compatible-call-signatures
import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

type ColorType =
  | 'primary'
  | 'blue' 
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'rose'
  | 'white'
  | 'simple'
  | 'transparent';

interface Props {
/*
  classes: {
    round: string;
    fullWidth: string;
    disabled: string;
    button: string;
  } & Partial<Record<ColorType, string>>;
*/
classes? : any;
color?: ColorType;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const DialogButton: React.SFC<
  Props & Pick<ButtonProps, Exclude<keyof ButtonProps, keyof Props>>
> = props => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    ...rest
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const btnClasses = cx(color && classes[color], {
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
  });

  return (
    <span>
    <Button {...rest} className={classes.button + ' ' + btnClasses} onClick={handleClickOpen} >
      {children}
    </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add new data</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
    </span>
  );
};

export default withStyles(buttonStyle)(DialogButton);
