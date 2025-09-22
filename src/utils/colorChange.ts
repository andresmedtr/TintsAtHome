export const rgbaToCss = (rgba: [number, number, number, number]): string => {
  const [r, g, b, a] = rgba;
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
    b * 255
  )}, ${a})`;
};
