import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(20),
    display: 'flex'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: 'center'
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180
  }
})

function ProductValues (props) {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>

              <Typography variant='h6' className={classes.title}>
                Vantagens da dona irene
              </Typography>
              <Typography variant='h5'>
                {
                  'ChatBot 24h com baixo custo para alavancar as suas vendas e tornar o seu comércio digital'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>

              <Typography variant='h6' className={classes.title}>
               Por que ter a dona Irene?
              </Typography>
              <Typography variant='h5'>
                {
                  'Você consegue digitalizar seus itens e leva seu comércio a novos lugares, tudo isso com um custo acessível e com alta confiabilidade'
                }

              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>

              <Typography variant='h6' className={classes.title}>
                Por que comprar com a dona irene?
              </Typography>
              <Typography variant='h5'>
                {'Você consegue executar compras sem baixar nenhum aplicativo e ainda escolhe itens de comércios locais'}

              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductValues)
