const http = require("http");

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

async function main() {
  try {
    const server = http.createServer();
    server.on("request", async (req, res) => {
      res.end(JSON.stringify({ SERVER_HOST, SERVER_PORT }));
    });
    server.listen(SERVER_PORT, SERVER_HOST);
  } catch (error) {
    console.error("Something went wrong", err);
  }
}

main()
  .then(() =>
    console.log("Server started on: " + SERVER_HOST + " " + SERVER_PORT + "!")
  )
  .catch((err) => console.log("Something went wrong: ", err));
