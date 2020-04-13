import React from "react"
import { Link } from "gatsby-theme-material-ui"
// import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typography>
      <Link to="/page-2/">Go to page 2</Link>
    </Typography>
  </Layout>
)

export default IndexPage
