import React from 'react';
import './css/App.css';
import './css/stars.css';
import './css/bootstrap.min.css';
import './css/title.css';
import FrontPageScrollable from './components/frontPage/front-page-scrollable';
import StarsAnimatedExperi from './components/starsAnimated/starsAnimated';

function App() {
  return (
    <div>
      {/*<StarsAnimatedExperi/>*/}
      <FrontPageScrollable />
    </div>
  );
}

export default App;
