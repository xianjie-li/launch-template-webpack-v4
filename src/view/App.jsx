import React, { useEffect } from 'react';

const App = () => {
  const b = 123;

  useEffect(() => {
    setTimeout(() => {
      console.log(b);
    });
  }, [b]);

  return <div>hello world</div>;
};

export default App;
