import React, { useState, useEffect } from 'react';

import Spin from '@/components/Spin';

const Test1 = () => {

  let [toogle, setToogle] = useState(true);
  return (
    <div onClick={() => setToogle(p => !p)}>

      <Spin spinning={toogle} tip="加载中" size="small" />
      <Spin spinning={toogle} />
      <Spin size="large" />
      <Spin type={2} size="small" />
      <Spin type={2} />
      <Spin type={2} size="large" />
      <Spin type={3} size="small" />
      <Spin type={3} />
      <Spin type={3} size="large" />

      <div style={{ width: 200, height: 200, background: 'pink', position: 'relative' }}>
        <Spin spinning={toogle} full dark tip="加载中" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis cupiditate, eos fugiat fugit
        magnam, odit omnis, quaerat quas recusandae sapiente sunt voluptatem? Aliquid eaque fugit porro possimus quae
        sint?
      </div>

    </div>
  );
};

export default Test1;