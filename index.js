const convert = require('rtl-css-js');

const styles = { boxShadow: 'var(--shadow16)'};
console.log('converting css:')
console.log('ltr:', styles)
console.log('rtl:', convert(styles));