import CssBaseline from "@mui/material/CssBaseline"
import { Header } from "@Components/Header"
import { Footer } from "@Components/Footer"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl" style={{ display: "flex", minHeight: "100vh" }}>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <main id="app">{children}</main>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
