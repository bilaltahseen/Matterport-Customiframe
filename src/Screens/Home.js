import React from 'react';
import { withRouter } from 'react-router-dom';

import useQuery from '../Utils/useQuery';
import { storeContext } from '../Context/StoreContext';

const Home = (props) => {
  const data = useQuery();
  const [state] = React.useContext(storeContext);
  const version = useQuery().get('version');
  const url =
    version === 'default'
      ? `http://my.matterport.com/show/?${data}&play=${state.playbtn}`
      : `http://mpembed.com/show/?${data}&play=${state.playbtn}`;

  return (
    <div style={{ height: '100vh' }} className='resp-container'>
      <iframe
        title='Matterport'
        style={{ backgroundColor: 'black' }}
        src={url}
        frameBorder={0}
        allowFullScreen
        allow='xr-spatial-tracking'
      />
    </div>
  );
};

export default withRouter(Home);
