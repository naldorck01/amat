import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#D27EBC",
      contrastText: "var(--color-white)"
    },
    info: {
      main: "#498585"
    }
  },
  components: {
    MuiLink: {
      variants: [
        {
          props: { variant: "footer" },
          style: {
            color: "black",
            textDecoration: "underline",
          },
        },
      ],
    },
  },
})

export default theme
