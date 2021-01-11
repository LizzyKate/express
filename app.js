let Express = require("express");

let app = Express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function (req, res) {
	res.sendFile(__dirname + "/contact.html");
});

app.get("/profile/:id", function (req, res) {
	let detail = {
		age: 29,
		job: "ninja",
		hobbies: ["eating", "fighting", "fishing"],
	};
	res.render("profile", { person: req.params.id, data: detail });
});
app.listen(3001);
