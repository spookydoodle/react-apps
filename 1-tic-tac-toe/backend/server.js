// A super-simple web server storing some state across requests.
const http = require('http');

const PORT = 8000;

// This variable will store some state across requests.
// Nothing fancy.
// Will reset upon shutdown.
const state = {
    counter: 0,
};

http.createServer(function (req, res) {
  console.log("Received a request: ", req);

  state.counter += 1;

  res.writeHead(
      200,
      {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
      }
  );
  res.end(JSON.stringify(state));
}).listen(PORT);

console.log(`Server running on localhost:${PORT}`);
