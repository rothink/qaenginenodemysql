const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');
const methodOverride = require('method-override');
const expressEjsLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.set('PORT', process.env.PORT || 9000);
app.set('HOST', process.env.HOST || 'localhost');
app.set('NODE_ENV', process.env.NODE_ENV || 'development');

app.use(express.static(path.join(__dirname, './public')));
app.use(pino());
app.use(bodyParser.urlencoded({extended : false}));
app.use(methodOverride('_method'));
app.use(expressEjsLayouts);
app.use(flash());
app.use(session({
    secret: 'SYGA87SEYG9A87ESYG987ESAGY8AES',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./src/index')(app);

app.listen(
    app.get('PORT'), app.get('HOST'), () => console.info(`Express start http://${app.get('HOST')}:${app.get('PORT')} ENV ${app.get('NODE_ENV')}`));
