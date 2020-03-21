// NOTE: colors are from clrs.cc - A nicer color palette for the web...
const colors = {
  navy: '#001f3f',
  blue: '#0074d9',
  aqua: '#7fdbff',
  teal: '#39cccc',
  olive: '#3d9970',
  green: '#2ecc40',
  lime: '#01ff70',
  yellow: '#ffdc00',
  orange: '#ff851b',
  red: '#ff4136',
  maroon: '#85144b',
  fuchsia: '#f012be',
  purple: '#b10dc9',
  black: '#111111',
  gray: '#aaaaaa',
  silver: '#dddddd',
}

const asArray = () => {
  const keys = Object.keys(colors)
  return keys.map((key) => {
    return { name: key, value: colors[key] }
  })
}

const names = () => {
  return Object.keys(colors)
}

const values = () => {
  const keys = Object.keys(colors)
  return keys.map((key) => {
    return colors[key]
  })
}

module.exports = {
  colors,
  asArray,
  names,
  values,
}
