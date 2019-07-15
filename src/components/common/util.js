// 将number值转为 number + px
export const setPxforNumber = source => (typeof source === 'number' ? source + 'px' : source);

// 去对象空值
export const shakeFlasy = source => {
  return Object.keys(source).reduce((p, v) => {
    if (source[v]) p[v] = source[v];
    return p;
  }, {});
};