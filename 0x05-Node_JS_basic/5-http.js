const http = require('http');
const fs = require('fs').promises;

/**
 * Simple HTTP server
 */
const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.method === 'GET' && req.url === '/') {
    res.end('Hello Holberton School');
  } else if (req.method === 'GET' && req.url === '/students') {
    res.write('This is the list of students\n');

    try {
      const students = await countStudents('database.csv');
      res.end(students);
    } catch (error) {
      res.end('error from catch');
    }
  }
});

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
const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Parse headers and rows
    const headers = lines[0].split(',');
    const rows = lines.slice(1);

    const students = [];
    const fields = {};

    rows.forEach((line) => {
      const values = line.split(',');

      // Skip invalid rows
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

    // Log the total number of students
    let result = `Number of students: ${students.length}\n`;
    // Log number of students in each field
    Object.keys(fields).forEach((field) => {
      const list = fields[field].join(', ');
      result += `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`;
    });

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = app;

const PORT = 1245;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
