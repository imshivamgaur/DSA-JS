// this is data structure
const students = ["shivam", "ritik", "karan", "deepak", "rishav"];

// Algorithm for finding a specific user
const func = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
      return;
    }
  }
  console.log("Not Found");
};

func(students, "Harry potter");
