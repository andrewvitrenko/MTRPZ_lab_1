const fs = require('fs/promises');

const formatNumber = (num) => {
  return num.toFixed(1);
};

const showRoots = (roots) => {
  console.log(`There are ${roots.length} roots`);

  roots.forEach((root, index) => {
    console.log(`x${index + 1} = ${formatNumber(root)}`);
  });
};

const showEquation = (a, b , c) => {
  const equationStr = `(${formatNumber(a)}) x^2 + (${formatNumber(b)}) x + (${formatNumber(c)}) = 0`;
  console.log(`Equation is: ${equationStr}`);
};

const handleError = (message, exit = false) => {
  console.log(message);
  exit && process.exit(1);
};

const interactiveMode = async () => {
  console.log('interactive');
};

const getCoefficients = (str) => {
  const numArray = str.split(' ');

  if (numArray.length !== 3) {
    return;
  }

  const isAllNumbers = numArray.every(num => !Number.isNaN(+num));

  if (!isAllNumbers) {
    return;
  }

  return numArray.map(num => +num);
};

const calculate = (a, b, c) => {
  const D = b * b - 4 * a * c;
  const roots = [];

  if (D === 0) {
    roots.push(-b / (2 * a));
  } else if (D > 0) {
    roots.push((-b + Math.sqrt(D)) / (2 * a));
    roots.push((-b - Math.sqrt(D)) / (2 * a));
  }

  return roots;
};

const nonInteractiveMode = async () => {
  try {
    const filePath = process.argv[2];
    const text = await fs.readFile(filePath, 'utf-8');
    const coefficients = getCoefficients(text);

    if (!coefficients) {
      handleError('Error: invalid file format', true);
    }

    if (!coefficients[0]) {
      handleError('Error: a cannot be zero', true);
    }

    const [a, b, c] = coefficients;
    showEquation(a, b, c);
    const roots = calculate(a, b, c);
    showRoots(roots);

  } catch (e) {
    handleError('Error: cannot read file', true);
  }
};

const start = () => {
  const filePath = process.argv[2];
  const isInteractive = !filePath;

  isInteractive ? interactiveMode() : nonInteractiveMode();
};

start();
