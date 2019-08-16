import React from 'react';

export const Success = () => (
  <svg viewBox="0 0 48 48" width="150" height="150">
    <path style={{ fill: '#2e88fa' }}
          d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z"
          fillRule="evenodd" />
  </svg>
);

export const Error = () => (
  <svg viewBox="0 0 48 48" width="150" height="150">
    <path style={{ fill: '#F83D48' }}
          d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z"
          fillRule="evenodd" />
  </svg>
);

export const Waiting = () => (
  <svg width="150" height="150" viewBox="0 0 120 120">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <circle fill="#13ce66" cx="60" cy="60" r="60" />
        <path
          d="M62,59.171 L62,24 C62,22.896 61.105,22 60,22 C58.895,22 58,22.896 58,24 L58,60 C58,60.66 58.324,61.241 58.818,61.606 C58.875,61.682 58.931,61.759 59,61.828 L81.627,84.456 C82.409,85.237 83.675,85.237 84.456,84.456 C85.237,83.675 85.237,82.409 84.456,81.628 L62,59.171 Z"
          fill="#FFFFFF" />
      </g>
    </g>
  </svg>
);

export const Warning = () => (
  <svg width="150" height="150" viewBox="0 0 120 120">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <path fill="#FFC838"
              d="M60,120 C93.137085,120 120,93.137085 120,60 C120,26.862915 93.137085,0 60,0 C26.862915,0 0,26.862915 0,60 C0,93.137085 26.862915,120 60,120 Z" />
        <circle fill="#FFFFFF" cx="59.5" cy="84.5" r="3.5" />
        <rect fill="#FFFFFF" x="57" y="25" width="5" height="50" rx="2.5" />
      </g>
    </g>
  </svg>
);

export const NotFound = () => (
  <img src={require('./img/404.png')} />
);

export const ServeError = () => (
  <img src={require('./img/500.png')} />
);