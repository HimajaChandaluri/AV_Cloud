const config = require("config");

const user = require("./routes/users");
const auth = require("./routes/auth");

const express = require("express");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

app.use(express.json());

app.use("/api/user", user);
app.use("/api/auth", auth);

const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Listning to port ${port}.... `));
