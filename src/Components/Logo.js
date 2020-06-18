import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import query from '../Utils/useQuery';
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: 100,
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 99999,
      top: '2%',
      opacity: 0.5,
      padding: 10,
      right: '2%',
      height: 100,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${query().get('logoOverlay')})`,
    },
    width: 150,

    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 99999,
    top: '4%',
    opacity: 0.5,
    padding: 10,
    right: '2%',
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${query().get('logoOverlay')})`,
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.root}></Box>
    </React.Fragment>
  );
};

export default Logo;
