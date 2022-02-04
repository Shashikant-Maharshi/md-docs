import React from 'react';

import { Link, Outlet, useLocation } from "react-router-dom";

import './landing-page.scss';

const LandingPage = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const navs = [{
    link: '/registration',
    label: 'New User',
  }, {
    link: '/login',
    label: 'Existing User',
  }].filter((nav) => nav.link !== location.pathname);
  
  const renderDefault = () => (
    <h2>Welcome to "Doc Reader"!</h2>  
  );

  return (
    <div className='landing-page | flex flex-col'>
      <div className='landing-page__header'>
        <h1>Doc Reader</h1>
        <nav>
          {navs.map((nav, idx) => (
            <Link key={idx} to={nav.link}>
              {nav.label}
            </Link>
          ))}
        </nav>
      </div>
      <hr />
      <div className='landing-page__content'>
        {isLandingPage ? renderDefault() : <Outlet />}
      </div>
    </div>
  );
};

export default LandingPage;
