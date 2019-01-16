const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getPathPrefix = path => (/design/.test(path) ? 'design' : 'api')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const prefix = getPathPrefix(node.fileAbsolutePath)
    const filePath = createFilePath({ node, getNode })
    const fullFilePath = `/${prefix}${filePath.toLowerCase()}`
    createNodeField({
      name: 'slug',
      node,
      value: fullFilePath,
    })
  }
}