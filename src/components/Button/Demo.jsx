import React from 'react';

import Button from '@/components/Button';

const Test2 = () => {

  return (
    <div style={{ padding: 16 }}>

      <div className="mt-16">
        尺寸
        <hr />
        <Button size="small">small</Button>
        <Button>default</Button>
        <Button size="large">large</Button>
      </div>

      <div className="mt-16">
        状态
        <hr />
        <Button disabled>disabled</Button>
        <Button loading>loading</Button>
      </div>

      <div className="mt-16">
        颜色
        <hr />
        <Button>default</Button>
        <Button color="info">info</Button>
        <Button color="success">success</Button>
      </div>

      <div className="mt-16">
        <Button color="warning">warning</Button>
        <Button color="error">error</Button>
      </div>

      <div className="mt-16">
        边框按钮
        <hr />
        <Button outline>default</Button>
        <Button outline color="info">info</Button>
        <Button outline color="success">success</Button>
      </div>

      <div className="mt-16">
        <Button outline color="warning">warning</Button>
        <Button outline color="error">error</Button>
      </div>

      <div className="mt-16">
        圆形按钮
        <hr />
        <Button circle size="small">小</Button>
        <Button circle color="info">中</Button>
        <Button circle loading color="success">中</Button>
        <Button circle outline color="error">中</Button>
        <Button circle size="large">大</Button>
      </div>

      <div className="mt-16">
        块级按钮
        <hr />
        <Button block size="small">小</Button>
        <Button block color="info">中</Button>
        <Button block size="large" color="success">大</Button>
        <Button block disabled color="error">禁用</Button>
        <Button block loading>加载</Button>
        <Button block outline color="info">边框按钮</Button>
      </div>
    </div>
  );
};

export default Test2;