require('dotenv').config();

const port = process.env.PORT || 3001;
const app = require('./app');

const userRouter = require('./routes/register.routes');

app.listen(port);

app.use(userRouter);

console.log(`Api rodando na porta ${port}`);
