import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

const Footer = () => {
  const template = (
    <Box
      sx={{ mt: "5%", pb: "3px", pt: "3px" }}
      style={{
        backgroundColor: "#E3A319",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Typography variant="caption" style={{ fontWeight: 500 }}>
        Built with{" "}
        <Link variant="footer" href="https://es.reactjs.org/">
          React.js
        </Link>{" "}
        and{" "}
        <Link variant="footer" href="https://mui.com/">
          Material UI
        </Link>
      </Typography>
    </Box>
  )

  return template
}

export default Footer
