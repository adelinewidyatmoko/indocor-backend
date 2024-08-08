import express from 'express'
import payload from 'payload'
import createUserRoute from './routes/formRoutes'
import bodyParser from 'body-parser'


require('dotenv').config()
const app = express()

app.use(express.json());
app.use(bodyParser.json());

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.use('/create-form', createUserRoute);

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(process.env.PORT ?? 3000);
}

start()
