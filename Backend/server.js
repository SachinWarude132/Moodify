require("dotenv").config()
const app =  require("./src/app")
const connectToDB = require("./src/config/Database")
const cors = require("cors");
connectToDB()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
}); 