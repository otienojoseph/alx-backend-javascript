const http = require("http");
const fs = require("fs").promises;

const PORT = 1245;
const HOST = "localhost";
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : "";
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
    const data = await fs.readFile(path, "utf8");
    const lines = data.split("\n").filter((line) => line.trim() !== "");

    if (lines.length <= 1) {
      return "Number of students: 0\n";
    }

    const headers = lines[0].split(",");
    const rows = lines.slice(1);

    const students = [];
    const fields = {};

    rows.forEach((line) => {
      const values = line.split(",");

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
      const list = fields[field].join(", ");
      result += `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`;
    });

    return result;
  } catch (error) {
    throw new Error("Cannot load the database\n");
  }
}

const SERVER_ROUTE_HANDLERS = [
  {
    route: "/",
    handler(_, res) {
      const responseText = "Hello Holberton School!";

      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Content-Length", responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: "/students",
    handler(_, res) {
      const responseParts = ["This is the list of our students"];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join("\n");
          res.setHeader("Content-Type", "text/plain");
          res.setHeader("Content-Length", responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(
            err instanceof Error ? err.message : err.toString()
          );
          const responseText = responseParts.join("\n");
          res.setHeader("Content-Type", "text/plain");
          res.setHeader("Content-Length", responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on("request", (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;
