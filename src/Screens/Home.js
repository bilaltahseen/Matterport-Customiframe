import React from 'react';
import { withRouter } from 'react-router-dom';

import useQuery from '../Utils/useQuery';

const Home = (props) => {
  const data = useQuery();

  return (
    <div style={{ height: '100vh' }} className='resp-container'>
      <iframe
        title='Matterport'
        style={{ backgroundColor: 'black' }}
        src={`https://mpembed.com/show/?${data}`}
        frameBorder={0}
        allowFullScreen
        allow='xr-spatial-tracking'
      />
    </div>
  );
};

export default withRouter(Home);
