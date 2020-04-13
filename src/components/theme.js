// src/gatsby-theme-material-ui-top-layout/theme.js

import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    type: "dark",
  },
})

export default theme
