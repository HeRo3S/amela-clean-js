// Sử dụng function để đóng gói logic và giảm lặp code
//
// console.log("Starting process...");
// if (process.env.NODE_ENV === "development") {
//   console.log("development mode");
//   // Development-specific logic
// }
// if (process.env.NODE_ENV === "production") {
//   console.log("production mode");
//   // Production-specific logic
// }
//
// console.log("Process started.");

function setUpEnvironment() {
  console.log("Starting process...");
  switch (process.env.NODE_ENV) {
    case "development":
      // Development-specific logic
      break;
    case "production":
      // Production-specific logic
      break;
    default:
      console.log("Cannot find environment!");
      break;
  }
  console.log("Process started.");
}
