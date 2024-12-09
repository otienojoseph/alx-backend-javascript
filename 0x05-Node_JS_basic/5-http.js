const http = require('http');
const fs = require('fs').promises;

/**
 * Function reads database csv file synchronously and prints
 * 'Number of students: NUMBER_OF_STUDENTS and log number of
 * students in each field as follows
 * 'Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES'
 * if database file not available print 'Cannot load the the database
 *
 * @param {string} path - path to database csv file
 * @returns - Number of students in each field and the list with the
 * following format 'Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return 'Number of students: 0\n';
    }

    const headers = lines[0].split(',');
    const rows = lines.slice(1);

    const students = [];
    const fields = {};

    rows.forEach((line) => {
      const values = line.split(',');

      if (values.length !== headers.length) return;

      const student = {
        firstname: values[0].trim(),
        field: values[values.length - 1].trim(),
      };

      if (student.firstname && student.field) {
        students.push(student);

        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      }
    });

    let result = `Number of students: ${students.length}\n`;
    Object.keys(fields).forEach((field) => {
      const list = fields[field].join(', ');
      result += `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`;
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database\n');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    // Handle /students path
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      const studentData = await countStudents(databasePath);
      res.end(studentData);
    } catch (error) {
      res.end('Cannnot load the database\n');
    }
  }
});

module.exports = app;

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
