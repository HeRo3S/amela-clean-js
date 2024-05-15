// Sử dụng class hoặc Object trong ES6 để làm đẹp lại đoạn code sau

// var name = 'John';
// var age = 30;
//
// function displayUser() {
//   console.log(name + ' is ' + age + ' years old.');
// }
//
// function updateUser(newName, newAge) {
//   name = newName;
//   age = newAge;
// }
//
// displayUser();
// updateUser('Jane', 25);
// displayUser();

class User {
  #userName = "John";
  #age = 30;

  displayUser() {
    console.log(`${this.#userName} is ${this.#age} years old`);
  }

  updateUser(newName, newAge) {
    this.#userName = newName;
    this.#age = newAge;
  }
}

const user = new User();
user.displayUser();
user.updateUser("Jane", 25);
user.displayUser();
