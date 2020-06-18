import React from 'react';
import { makeStyles } from '@material-ui/core';
import { storeContext } from '../Context/StoreContext';
import { CSSTransition } from 'react-transition-group';
import useQuery from '../Utils/useQuery';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  divImage: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 3,
    top: '50%',
    left: '50%',
    width: '70%',
    height: '80vh',
    marginRight: '-50%',
    backgroundImage: `url(${useQuery().get('introImage')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 3,
      top: '50%',
      left: '50%',
      width: '80%',
      height: '40vh',
      marginRight: '-50%',
      backgroundImage: `url(${useQuery().get('introImage')})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: 'translate(-50%, -50%)',
    },
  },
}));

const Intro = () => {
  const classes = useStyles();
  const [state] = React.useContext(storeContext);

  return (
    <React.Fragment>
      <CSSTransition
        timeout={Math.abs(+useQuery().get('introTime') * 1000)}
        classNames='my-fade'
        in={state.isLogged}
        unmountOnExit
        appear={true}
      >
        <div className={classes.divImage}></div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Intro;
