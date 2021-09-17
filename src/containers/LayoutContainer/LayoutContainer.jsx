import { ThemeProvider } from "@mui/material/styles"
import { Layout } from "@Components/Layout"
import { PublicRouter } from "@Routes"
import { theme } from "@Config"

const LayoutContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PublicRouter />
      </Layout>
    </ThemeProvider>
  )
}

export default LayoutContainer