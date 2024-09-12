import { Checkbox as MUICheckbox, CheckboxProps } from '@mui/material';
import CheckedIcon from './checked.svg';
import NotCheckedIcon from './notChecked.svg';
import FormControlLabel from '@mui/material/FormControlLabel';

type Props = CheckboxProps & { label?: React.ReactNode };

export const Checkbox = (props: Props) => (
  <FormControlLabel
    label={props.label}
    control={
      <MUICheckbox
        icon={<img src={NotCheckedIcon} />}
        checkedIcon={<img src={CheckedIcon} />}
        {...props}
      />
    }
  />
);
