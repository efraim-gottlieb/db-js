import express from 'express'


const app = express()
const PORT = 8000

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`) 
  next()
})

app.listen(PORT, ()=>{
  console.log(`server run on ${PORT}...`)
})