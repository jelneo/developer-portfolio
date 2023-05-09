const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  reactStrictMode: false,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    domains: ['avatars.githubusercontent.com'],
  }
}