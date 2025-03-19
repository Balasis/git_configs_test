const express = require("express");
const app = express();
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //JSON parsing middleware


app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404", { message: "Page not found" });
});
//...some comment

app.set("view engine", "ejs");
app.set("views", "./views");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
