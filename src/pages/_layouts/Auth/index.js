import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

export default function AuthLayout({ children }) {
  const classes = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
