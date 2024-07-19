const errorMiddleware = require('./middlewares/errorMiddleware');

// Other routes and middleware
app.use(errorMiddleware);