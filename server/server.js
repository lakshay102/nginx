const http = require("http");

const PORT = process.env.PORT || 7777;

const server = http.createServer((req, res) => {
  console.log(`Request handled by container on port ${PORT}`);
  res.end(`Hello from port ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
