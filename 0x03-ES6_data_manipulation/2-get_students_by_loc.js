/**
 * Function that returns an array of objects who are
 * located in a specific city
 *
 * @param {[string]} students - An array of objects
 * @param {string} city - City to match
 * @returns {[string]} - An array of objects from specific city
 */
const getListStudentByLocation = (students, city) => {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === city);
};

export default getListStudentByLocation;
