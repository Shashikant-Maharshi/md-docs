import React from 'react';

import DocsList from "../DocsList/DocsList";
import DocViewer from "../DocViewer/DocViewer";

const DocsContent = () => (
  <div className='docs__content | flex flex-row'>
    <DocsList />
    <DocViewer />
  </div>
);

export default DocsContent;
