export default function createIteratorObject(report) {
  const employees = [];
  for (const array of Object.values(report.allEmployees)) {
    for (const employee of array) {
      employees.push(employee);
    }
  }
  return employees;
}
