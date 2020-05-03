import { FormControl, Select, InputLabel, withStyles } from '@material-ui/core';
import { FormControlProps } from '@material-ui/core/FormControl';
import { Check, Clear } from '@material-ui/icons';
import customSelectStyle from 'assets/jss/material-dashboard-react/customSelectStyle';
import {default as cx} from 'classnames';
import * as React from 'react';

interface Props {
  classes? : any,
/*  classes: {
    labelRootError: string;
    labelRootSuccess: string;
    underlineError: string;
    underlineSuccess: string;
    underline: string;
    marginTop: string;
    formControl: string;
    labelRoot: string;
    disabled: string;
    feedback: string;
  };
*/
  labelText?: React.ReactNode;
  labelProps?: object;
  id?: string;
  inputProps?: object;
  formControlProps?: FormControlProps;
  error?: boolean;
  success?: boolean;
  farm?: string;
}

const CustomSelect: React.SFC<Props> = props => {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    error,
    success,
  } = props;

  const marginTop = cx({
    [classes.marginTop]: labelText === undefined,
  });

  const formControlClasses = cx(
    formControlProps && formControlProps.className,
    classes.formControl,
  );

  const [farm, setFarm] = React.useState<string >('');

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setFarm(event.target.value);
  };
  
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      <InputLabel htmlFor="demo-controlled-open-select">choose...</InputLabel>
      <Select
        classes={{
          root: marginTop,
        }}
        id={id}
        value={farm}
        onChange={handleChange}
      >
            <option value="Farm1" >name1</option>
            <option value="Farm2" >name2</option>
            <option value="Farm3" >name3</option>
      </Select>
      {error ? (
        <Clear className={classes.feedback + ' ' + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
};

export default withStyles(customSelectStyle)(CustomSelect);
