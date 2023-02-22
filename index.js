const showEquation = (a, b , c) => {
  const equationStr = `(${a}) x^2 + (${b}) x + (${c}) = 0`;
  console.log(`Equation is: ${equationStr}`);
};

const interactiveMode = async () => {
  console.log('interactive');
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
