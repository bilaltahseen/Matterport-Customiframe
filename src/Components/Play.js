import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { storeContext } from '../Context/StoreContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 100,
    position: 'absolute',
    zIndex: 2,
    top: ' 50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.5,
    padding: 10,
    height: 100,
  },
}));

const Play = () => {
  const classes = useStyles();
  const [, dispatch] = React.useContext(storeContext);
  return (
    <React.Fragment>
      <Box
        onClick={() => dispatch({ type: 'PLAY' })}
        className={classes.root}
      ></Box>
    </React.Fragment>
  );
};

export default Play;
