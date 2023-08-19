let width = 936;
let height = 104;
let columns = 1;
let rows = 1;

let steps = 16;

let x = 0;
let y = 0;

for (let i = 0; i < steps; i++) {
  console.log(`
      ${(100 / steps) * i}% {
          background-position: -${(width / columns) * x}px -${
    (height / rows) * y
  }px;
      }
  `);

  x++;

  if ((i + 1) % 4 === 0) {
    y++;
    x = 0;
  }
}