import React from "react"
import Switch from "@material-ui/core/Switch"

export default function MySwitch() {
  const [state, setState] = React.useState({
    checkedA: true,
  })

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <Switch
      checked={state.checkedA}
      onChange={handleChange}
      color="primary"
      name="checkedA"
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  )
}
