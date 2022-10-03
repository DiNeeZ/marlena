const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true
})

module.exports = nextConfig
