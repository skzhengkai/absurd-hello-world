const h = String.fromCharCode(72);
const e = String.fromCharCode(101);
const l = String.fromCharCode(108);
const o = String.fromCharCode(111);
const w = String.fromCharCode(119);
const r = String.fromCharCode(114);
const d = String.fromCharCode(100);
const space = String.fromCharCode(32);
const exclam = String.fromCharCode(33);
const newline = String.fromCharCode(10);

const H = h;
const E = e;
const L = l;
const O = o;
const W = w;
const R = r;
const D = d;
const SPACE = space;
const EXCLAM = exclam;
const NEWLINE = newline;

const hello = [H, E, L, L, O];
const world = [W, O, R, L, D];

const printChar = (char) => {
  process.stdout.write(char);
};

const printString = (str) => {
  str.forEach(printChar);
};

const printHello = () => {
  printString(hello);
};

const printSpace = () => {
  printChar(SPACE);
};

const printWorld = () => {
  printString(world);
};

const printExclamation = () => {
  printChar(EXCLAM);
};

const printNewline = () => {
  printChar(NEWLINE);
};

const printHelloWorld = () => {
  printHello();
  printSpace();
  printWorld();
  printExclamation();
  printNewline();
};

printHelloWorld();
