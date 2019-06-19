const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello from the client app!'))

app.listen(port, () => console.log(`Client app listening on port ${port} - http://localhost:${port}`))