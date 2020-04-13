import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Switch from "@material-ui/core/Switch"

export default function MyThemeToggler() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Switch
          checked={theme === "dark"}
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          color="primary"
          name="themeToggler"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      )}
    </ThemeToggler>
  )
}
