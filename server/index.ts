import express, {Request, Response} from 'express'
import {Builder, Nuxt} from 'nuxt'
import consola from 'consola'
import config from '../nuxt.config'

async function start (): Promise<{ port: number, host: string }> {
  const nuxt = new Nuxt(config)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  const app = express()

  app.get('/test', (req: Request, res: Response) => {
    res.send('Hello world!')
  })

  app.use(nuxt.render)

  let port = process.env.PORT ? Number(process.env.PORT) : 3000
  let host = process.env.HOST || 'localhost'

  await app.listen(port, host);

  return {port, host}
}

start().then(({port, host}) => {
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
})
