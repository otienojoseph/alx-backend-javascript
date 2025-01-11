/**
 * Function that returns an array of ids from an object list
 *
 * @param {[string]} students - An array of objects
 * @returns {[string]} - An array of ids
 */
const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
};

export default getListStudentIds;
