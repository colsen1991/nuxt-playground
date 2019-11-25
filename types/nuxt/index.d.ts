declare module 'nuxt' {
  import {Configuration} from "@nuxt/types";

  export class Builder {
    constructor (nuxtInstance: Nuxt)
    build (): void
    [key: string]: any
  }

  export class Nuxt {
    constructor (options: Configuration)
    options: Configuration
    ready (): void
    render (): Function
    [key: string]: any
  }
}
