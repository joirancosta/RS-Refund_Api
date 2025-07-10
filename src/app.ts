import "express-async-errors"
import express from "express";
import cors from "cors";
import { errorHandling } from "./middlewares/error-handling"
import { routes } from "./routes"
// import { AppError } from "./utils/app-error"
// import { z } from "zod"

const app = express()
app.use(cors())
app.use(express.json())

// app.get("/", (req, res) => {
//   // throw new AppError("Erro de teste")
//   const bodySchema = z.object({
//     age: z.number().min(18),
//   })
//   const { age } = bodySchema.parse(req.body)

//   res.send("Hello, World!")
// })

app.use(routes)

app.use(errorHandling)

export { app }