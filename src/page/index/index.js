import '@/main';
import './index.scss';

import('lodash').then(({ default: _ }) => {
  console.log(_.join(['Hello', 'index'], ' '));
});

console.log('index.js');
