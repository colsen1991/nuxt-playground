declare module 'nuxt' {
  import {Configuration} from "@nuxt/types/config";

  export class Builder {
    constructor (nuxtInstance: Nuxt)
    build (): void
    [key: string]: any
  }

  export class Nuxt {
    options: Configuration
    constructor (options: Configuration)
    ready (): void
    render (): Function
    [key: string]: any
  }
}
