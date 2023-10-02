// const express = require('express');
// const { PythonShell } = require('python-shell');

// const app = express();

// app.get('/', (req, res) => {
//   let pyshell = new PythonShell('hi.py');

//   pyshell.on('message', function (message) {
//     // received a message sent from the Python script (a simple "print" statement)
//     res.send(message)
//     pyshell.end(function (err) {
//       if (err) throw err;
//       console.log('Python script finished');
//     });
//   });

//   pyshell.on('error', function (err) {
//     console.error(err);
//     res.status(500).send('An error occurred while executing the Python script');
//   });

  
// });

// const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`Server connected to ${port}`));


const express = require('express');
const { PythonShell } = require('python-shell');

const app = express();

app.get('/', (req, res) => {
  let variable1 = 'Hello';
  let variable2 = 'Boss';

  let pyshell = new PythonShell('hi.py', {
    args: [variable1, variable2], // Pass variables as arguments to the Python script
  });

  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    res.send(message);
    pyshell.end(function (err) {
      if (err) throw err;
      console.log('Python script finished');
    });
  });

  pyshell.on('error', function (err) {
    console.error(err);
    res.status(500).send('An error occurred while executing the Python script');
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server connected to ${port}`));





