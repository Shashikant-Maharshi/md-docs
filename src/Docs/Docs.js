import React from 'react';

import DocsHeader from "./components/DocsHeader/DocsHeader";
import DocsContent from "./components/DocsContent/DocsContent";

import "./docs.scss";

const Docs = () => {
  return (
    <div className='docs | flex flex-col'>
      <DocsHeader />
      <hr />
      <DocsContent />
    </div>
  );
};

export default Docs;
