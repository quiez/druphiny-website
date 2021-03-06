// @flow

import * as React from 'react';

export type FigureProps = {
  desc?: string,
  href: string,
  children?: React.Node,
  wide?: boolean,
};

const Figure = ( { desc, href, children, wide }: FigureProps ) => (
  <div className={wide && 'wide'}>
    {href ? (
      <a href={href} target="_blank">
        {children}
      </a>
    ) :
      children
    }
    {desc && <p>{desc}</p>}
    <style jsx>{`
      div {
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        font-size: 13px;
        color: #999;
        text-align: center;
        font-style: oblique;
        display: block;
      }
      .wide {
        background: #f2f2f2;
        position: relative;
      }
      .wide::before {
        width: 10000%;
        content: '';
        left: -1000px;
        height: 100%;
        position: absolute;
        background: #f2f2f2;
        z-index: -1;
      }
    `}</style>
  </div>
);

Figure.defaultProps = {
  desc     : 'Figure',
  children : <span>default child</span>,
  wide     : false,
};

export default Figure;
