import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#f50057",
    },
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
