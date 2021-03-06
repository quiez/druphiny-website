// @flow

import * as React from 'react';

const HR = () => (
  <div>
    <style jsx>{`
      div {
        border-style: none;
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
      }

      div::after {
        content: '***';
        text-align: center;
        display: inline;
      }
    `}</style>
  </div>
);

export default HR;
