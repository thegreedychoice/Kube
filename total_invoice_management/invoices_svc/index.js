const express = require("express");

const app = express();

app.get("/api/invoices/:id", (req, res) => {
	const id = parseInt(req.params.id)
	var result = {
		id: id,
		ref: `INV-${id}`,
		amount: id * 100,
		balance: (id * 100) - 10,
		ccy: "GBP"
	}
	res.json(result)
	console.log(result)
});

const port = process.env.PORT || 8080

app.listen(port, () => {
	console.log(`invoices_svc listening on ${port}`)
});