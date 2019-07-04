import '@/main';

import('lodash').then(({ default: _ }) => {
  console.log(_.join(['Hello', 'about'], ' '));
});

console.log('about.js');