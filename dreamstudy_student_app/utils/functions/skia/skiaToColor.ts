export const toColor = (num: number, rgba: boolean = true) => {
  num >>>= 0;
  const b = num & 0xff;
  const g = (num & 0xff00) >>> 8;
  const r = (num & 0xff0000) >>> 16;
  const a = ((num & 0xff000000) >>> 24) / 255;
  if (rgba) {
    return `rgba(${[r, g, b, a].join(',')})`;
  }
  return `#${[r, g, b]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`;
};
