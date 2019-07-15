import React, { useState } from 'react';

import Test1 from './test/Test1';
import Test2 from './test/Test2';

export default function Test() {
  const [count, setCount] = useState(0);

  return (
    <div>
      react Component
      <div onClick={() => setCount(prev => prev + 1)}>当前点击次数: {count}</div>
      <hr />
      <div>
        {/*<Test1></Test1>*/}
        <Test2></Test2>
      </div>
    </div>
  );
}
