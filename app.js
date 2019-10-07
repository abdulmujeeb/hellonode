const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
//app.options('*', cors()) // include before other routes

const Calculator = require('./src/util/calculator');

const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Store some value locally
// window.localStorage.setItem("token", "123456");


app.get('/', (req, res) => {

	var a = req.query.a;
	var b = req.query.b;

	if(!isNaN(a) && !isNaN(b))
	{
		var calculator = new Calculator(a,b);
		console.log(a);
		console.log(b);
		var division = calculator.division();
	}

  //res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index', { title: 'Azure Enthusiasts -- ', result: division});
});

app.listen(port, () => {
  console.log(`listening on port ${chalk.green(port)}`);
});
