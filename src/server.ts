import express from 'express'
import helmet from 'helmet'
import routes from './routes'

const port = process.env.PORT
const server = express()

server.use(helmet())
server.use(express.json())
server.use(routes)

server.listen(port, () => {
    console.log(`Servidor Ligado http://localhost:${port}`)
})
