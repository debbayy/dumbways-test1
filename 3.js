let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  if (i % 2 == 0) {
    if (i == 0) {
      //baris pertama
      for (let k = 0; k < 2 * (n - i) - 1; k++) {
        if (k % 2 == 0) {
          if (k == 0 || k == 4 || k == 8) {
            string += "#";
          } else {
            string += "*";
          }
        } else {
          string += " ";
        }
      }
    } else if (i == 2) {
      for (let k = 0; k < 2 * (n - i) - 1; k++) {
        if (k % 2 == 0) {
          if (k == 2) {
            string += "#";
          } else {
            string += "*";
          }
        } else {
          string += " ";
        }
      }
    } else {
      for (let k = 0; k < 2 * (n - i) - 1; k++) {
        if (k % 2 == 0) {
          string += "#";
        } else {
          string += " ";
        }
      }
    }
  } else {
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      if (k % 2 == 0) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }

  string += "\n";
}
console.log(string);
