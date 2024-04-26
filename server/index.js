let cors = require("cors")
let mysql = require("mysql")
require('dotenv').config()
const nodemailer = require("nodemailer")
const bodyParser = require('body-parser')
let express = require('express')
const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000
let query = "SELECT * FROM dish"
let dishes

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/services', async (req, res) => {
	const info = req.body

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		}
	})

	const itemsInfo = info.items.map(item => `${item.name} x ${item.count}`).join('\n');

    let mailOptions = {
        from: info.email,
		to: process.env.EMAIL,
		subject: 'Order',
        text: `Phone - ${info.phone}\n\nProducts Ordered:\n${itemsInfo}\n\nTotal - ${info.total}`,
    };
 
	try {
		await transporter.sendMail(mailOptions)
		res.redirect('http://localhost:3000/')
	} catch (error) {
		console.error('Ошибка при отправке письма: ', error)
		res.status(500).send({ error: 'Ошибка при отправке письма' })
	} 
})

const connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	database: process.env.DB_NAME,
	password: ""
})

app.listen(PORT, () => { 
	console.log("Server started")
	connection.query(query, (err, res) => {
		if (err) {
			console.log(err);
		}
		dishes = res
	})
	
})

app.get('/api/dishes', (req, res) => {
	res.send(dishes)
})