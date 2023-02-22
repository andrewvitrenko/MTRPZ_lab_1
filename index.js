const showEquation = (a, b , c) => {
  const equationStr = `(${a}) x^2 + (${b}) x + (${c}) = 0`;
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

  return {
    a: +numArray[0],
    b: +numArray[1],
    c: +numArray[2],
  };
};

const nonInteractiveMode = async () => {
  console.log('non-interactive');
};

const start = () => {
  const filePath = process.argv[2];
  const isInteractive = !filePath;

  isInteractive ? interactiveMode() : nonInteractiveMode();
};

start();
