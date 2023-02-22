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
