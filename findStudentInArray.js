const students = ["rezi", "fareedat", "nini", "mamuka", "umar"];

function getStudent(allStudent, currentStudent) {
  for (let i = 0; i < allStudent.length; i++) {
    if (allStudent[i] === currentStudent)
      return `${currentStudent} is in array at place number ${i + 1}`;
  }
  return "not found pick another one";
}

console.log(getStudent(students, "fareedat"));
