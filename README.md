# Quadratic Equation Solver

## Description

This app may help you to solve quadratic equations by reading you file with coefficients or by typing them manually.

You will see full equation and after that you will receive calculated roots if they exist.

This program also validates received values and in case you pass invalid values you will get an error and app will exit.

## Installation

### Requirements

First of all, you will need Node.js installed on your computer. You can check simply by typing 
```shell
$ node -v
```

in your terminal. If you don't have it installed yet - you can download Node.js [here](https://nodejs.org/en/).

### Installation guide

Now, you have to clone this repo from Github using HTTPS or SSH, it's up to you :)

Install all dependencies
```shell
$ npm i
```

Run the app
```shell
$ node .
```

If you don't pass any arguments interactive mode will be started. To use non-interactive mode just pass the path to file you want to read

```shell
$ node . <path_to_file>
```

## Non-interactive mode

For non-interactive mode you have to have a `.txt` file formatted the next way

```text
1 0 0
```

## Revert commit

You can find revert-commit [here](https://github.com/andrewvitrenko/MTRPZ_lab_1/commit/266e04ef7be3f3a29e1d42a172cc79b7f50003b2)
