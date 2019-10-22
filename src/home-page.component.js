import React from 'react';

import './home-page.styles.scss';

const HomePage = () => (
  <section className='home-page'>
    <ul className='directory-menu'>
      <li className='menu-item'>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </li>
      <li className='menu-item'>
        <div className='content'>
          <h1 className='title'>SNEAKERS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </li>
      <li className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </li>
      <li className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMENS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </li>
      <li className='menu-item'>
        <div className='content'>
          <h1 className='title'>MANS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </li>
    </ul>
  </section>
);

export default HomePage;
