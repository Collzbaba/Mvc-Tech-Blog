const path = require("path");
const express = require("express");
const session = require("express-session");

// helper function
const helpers = require("./utils/helpers");

// handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

// session connection to sequelize database
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};  

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server

app.use(require("./controllers/"));
app.listen(PORT, () => {
  console.log(`Now listenening ${PORT} http://localhost:${PORT}`);
  sequelize.sync({ force: false });
});