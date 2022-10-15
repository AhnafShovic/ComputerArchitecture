// Function to subtract two values
// using 2's complement method
function Subtract(a, b) {
  var c;

  // ~b is the 1's Complement of b
  // adding 1 to it make it 2's Complement
  c = a + (~b + 1);

  return c;
}

// Driver code
var a = 2,
  b = 3;
console.log(Subtract(a, b));

a = 9;
b = 7;
console.log(Subtract(a, b));

var x = [1, 5, 7, 8, 9, 10, 45, 3, 4, 6];
class marks {
  constructor(ba = 0, en = 0, ma = 0, ph = 0) {
    this.bangla = ba;
    this.english = en;
    this.math = ma;
    this.physics = ph;
  }
  printMarks() {
    console.log(this.bangla, this.english, this.math, this.physics);
  }
}

var student1 = new marks(45, 75, 85);
var student2 = new marks(55, 77, 87, 67);
var student3 = new marks(35, 75, 81, 69);
// student1.printMarks();
// student2.printMarks();
var students = [student1, student2, student3];

for (let student of students) {
  student.printMarks();
}
