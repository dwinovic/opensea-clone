/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/components/*': ['src/components/*'],
    },
  },
}
