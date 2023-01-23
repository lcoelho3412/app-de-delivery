// const port = process.env.PORT || 3002;

const app = require('./app');

const port = 3001;

app.listen(port);
console.log(`Api rodando na porta ${port}`);
