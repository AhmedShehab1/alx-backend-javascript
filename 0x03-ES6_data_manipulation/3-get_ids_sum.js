export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((accumulator, currObj) => accumulator + currObj.id, 0);
}
