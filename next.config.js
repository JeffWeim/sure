const withTM = require('next-transpile-modules')(['@mui/material', '@mui/system', '@mui/lab']) // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    // eslint-disable-next-line
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
    return config
  },
})
