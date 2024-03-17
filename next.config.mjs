import million from "million/compiler"

import { fileURLToPath } from "node:url"
import createJiti from "jiti"
const jiti = createJiti(fileURLToPath(import.meta.url))

jiti("./app/env")

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
}

const millionConfig = {
   auto: true, // if you're using RSC: auto: { rsc: true },
}

export default million.next(nextConfig, millionConfig)
