const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((name) => 'Good job, ' + name);

const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));
