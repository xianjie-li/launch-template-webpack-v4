import React, { useState, useEffect } from 'react';

import Skeleton from '@/components/Skeleton';

const Test2 = () => {

  let [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(p => !p)}>
      <Skeleton rand loading={show} img lineCount={6} count={3}>
        <span className="ttttt"> 默认内容11111111111111</span>

      </Skeleton>
    </div>
  );
};

export default Test2;