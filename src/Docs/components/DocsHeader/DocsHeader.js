import React from 'react';

import { Link } from "react-router-dom";

const DocsHeader = () => (
  <div className='docs__header | flex flex-row flex-x-spread flex-y-center'>
    <h1>Doc Reader</h1>
    <nav>
      <Link to='/logout'>
        Logout
      </Link>
    </nav>
  </div>
);

export default DocsHeader;
