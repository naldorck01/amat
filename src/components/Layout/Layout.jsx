import CssBaseline from "@mui/material/CssBaseline"

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <main id="app">{children}</main>
    </>
  )
}

export default Layout
