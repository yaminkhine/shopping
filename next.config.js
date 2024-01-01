/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withLess = require('next-with-less');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});
module.exports = {
  pagesDir: 'src/pages/page.js', // Change 'src/pages' to your desired location
};