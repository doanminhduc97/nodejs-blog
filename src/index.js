const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const hbs = handlebars.create({
    extname: '.hbs',
});
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Join folder public
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'));

// // Template engine
                    app.engine('hbs', hbs.engine);
                    app.set('view engine', 'hbs');
                    app.set('views', path.join(__dirname, 'resources/views'));

                    //Route init
                    route(app);

                    app.listen(port, () => {
                        console.log(`Server running on port ${port}`);
                    });
