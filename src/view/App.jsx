import React, { useEffect } from 'react';

const obj = {
  a: {
    b: 345,
  },
};

const App = () => {
  const b = 123;

  useEffect(() => {
    setTimeout(() => {
      console.log(b);
    });
  }, [b]);

  return (
    <div>
      hello world
    </div>
  );
};

export default App;
