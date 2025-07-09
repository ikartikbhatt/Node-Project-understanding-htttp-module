const http = require("http");
const router = require("../route/routes");

const PORT = 4000;

const server = http.createServer((req, res) => {
  router(req, res);
});


server.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
