import { client } from "./client";
import express from "express";
import { imagine } from "./imagine";
import chalk from "chalk"

client.init().then(() => {
  const app = express()
  const port = 3000

  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/imagine', (req, res) => {
    const prompt = req.body.prompt
    if (!prompt) {
      res.json({ error: "prompt is required" })
      return
    }

    imagine(prompt).then((Imagine) => {
      res.send(Imagine.uri)
    })
  })

  app.listen(port, () => {
    console.log(chalk.green(`Midjourney API app listening on port ${port}`))
  })

})
