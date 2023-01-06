const express = require('express');
const cors = require('cors');
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1533637",
  key: "c51886f471625923d04a",
  secret: "1e27b7b98216495fffd0",
  cluster: "ap2",
  useTLS: true
});

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/api/messages', async (req,res) => {

	await pusher.trigger("rad-node-936", "message", {
		username: req.body.username,
		message: req.body.message	
	});

	res.status(500).send("Success")
});

app.listen(PORT, () => { console.log(`Listening on ${PORT}`) });