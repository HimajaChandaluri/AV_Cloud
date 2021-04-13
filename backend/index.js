const config = require("config");

const user = require("./routes/users");
const auth = require("./routes/auth");
const av = require("./routes/av");

const express = require("express");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/av", av);

const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Listning to port ${port}.... `));
