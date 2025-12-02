import express from 'express'
import { checkuser } from './controllers/userController.js';

const app = express();
app.use('view engine','ejs')

app.get('/',checkuser);

app.listen(4000);