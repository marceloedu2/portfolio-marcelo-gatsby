const React = require("react")
const Layout = require("./src/componets/layout").default
const { ThemeProvider } = require("styled-components")

exports.wrapPageElement = ({ element, prop }) => {
  return <Layout {...prop}>{element}</Layout>
}
