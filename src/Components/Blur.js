import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: 99999,
    width: 153,
    bottom: 0,
    opacity: 0.5,
    padding: 10,
    right: 0,
    height: 6,
  },
}));

const Blur = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.root}></Box>
    </React.Fragment>
  );
};

export default Blur;
