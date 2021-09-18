import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Grid from "@mui/material/Grid"
import StarIcon from "@mui/icons-material/StarBorder"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

const tiers = [
  {
    title: "Nequi",
    price: "15",
    description: ["Número de celular", "311 667 8002"],
    buttonText: "Pagar",
    buttonVariant: "contained",
    imgUrl:
      "https://pbs.twimg.com/profile_images/872639434201681920/bhJs7rhP.jpg",
  },
  {
    title: "Bancolombia",
    price: "0",
    description: ["Cuenta de ahorros", "0806 8935 548"],
    buttonText: "Pagar",
    buttonVariant: "outlined",
    imgUrl:
      "https://unicentrodearmenia.com/wp-content/uploads/2016/06/bancolombia-300x300.jpg",
  },
  {
    title: "Daviplata",
    price: "30",
    description: ["Número de celular", "302 230 6955"],
    buttonText: "Pagar",
    buttonVariant: "outlined",
    imgUrl:
      "https://nuvei.com/wp-content/uploads/2021/02/daviplata-1-420x240.png",
  },
  {
    title: "Banco de Bogotá",
    price: "0",
    description: ["Cuenta de ahorros", "1737 10807"],
    buttonText: "Pagar",
    buttonVariant: "outlined",
    imgUrl:
      "https://www.numeroservicioalcliente.com/wp-content/uploads/2017/01/banco-de-bogota-logo.png",
  }, 
  {
    title: "BBVA",
    price: "0",
    description: ["Cuenta de ahorros", "1329 08377"],
    buttonText: "Pagar",
    buttonVariant: "outlined",
    imgUrl:
      "https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1024x576.jpg",
  },
]

function PricingContent() {
  return (
    <>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Metodos de pago
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          No puedes comprar la felicidad pero puedes comprar accesorios,{" "}
          <i>tú lo diseñas y nosotros lo hacemos realidad.</i>
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Nequi" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      minHeight: "225px",
                      mb: 2,
                    }}
                    style={{ alignItems: "center" }}
                  >
                    <img
                      src={tier.imgUrl}
                      style={{ maxWidth: "100%", maxHeight: "240px" }}
                      alt={tier.title}
                      title={tier.title}
                    />
                  </Box>
                  <ul>
                    {tier.description.map((line, index) => (
                      <Typography
                        style={{ listStyle: "none" }}
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {index === 1 ? <i>{line}</i> : line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default function Pricing() {
  return <PricingContent />
}
