const http = require("http");

const port = 3000;

const responseObject = {
  data: {
    children: [],
  },
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(responseObject));
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
