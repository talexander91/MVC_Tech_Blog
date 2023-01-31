const path = require('path');
const express = require('express');
const session = require('express-session');
const expresshbs = require('express-handlebars');
const sequelize = require('./config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.port || 3001;

const userSession = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true, 
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize})
};

app.use(session(userSession));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({force:false});
});