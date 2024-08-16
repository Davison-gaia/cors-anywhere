const http = require("http");

const port = 3000;
const allowedOrigin = "https://git.news"; // Replace with your specific domain

const responseObject = {
  data: {
    children: [],
  },
};

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle regular requests
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(responseObject));
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
