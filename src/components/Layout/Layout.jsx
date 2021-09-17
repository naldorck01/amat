import CssBaseline from "@mui/material/CssBaseline"
import { Header } from "@Components/Header"
import { Footer } from "@Components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main id="app">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
