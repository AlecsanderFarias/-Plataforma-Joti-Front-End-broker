import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { TextField } from 'unform-material-ui';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#483699',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#483699',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#483699',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#483699',
      },
    },
  },
})(TextField);

export default function Input({ name, mask, ...rest }) {
  return (
    <CssTextField name={name} variant="outlined" fullWidth shrink {...rest} />
  );
}
