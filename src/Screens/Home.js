import React from 'react';
import { withRouter } from 'react-router-dom';

import useQuery from '../Utils/useQuery';
import { storeContext } from '../Context/StoreContext';

const Home = (props) => {
  const data = useQuery();
  const [state] = React.useContext(storeContext);

  return (
    <div style={{ height: '100vh' }} className='resp-container'>
      <iframe
        title='Matterport'
        style={{ backgroundColor: 'black' }}
        src={`https://mpembed.com/show/?${data}&play=${state.playbtn}`}
        frameBorder={0}
        allowFullScreen
        allow='xr-spatial-tracking'
      />
    </div>
  );
};

export default withRouter(Home);
