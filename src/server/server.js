const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => res.send('Hello from the server app!'))

app.listen(port, () => console.log(`Server app listening on port ${port} - http://localhost:${port}`))