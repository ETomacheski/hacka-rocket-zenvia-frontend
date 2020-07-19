import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200,
    padding: '10px'
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  },
  buttonColor: {
    backgroundColor: '#DB87D5',
    '&:hover': {
      background: '#efefef',
      color: '#000'
    }
  },
  fontNunito: {
    fontFamily: 'Nunito'
  }

})

function ProductHero (props) {
  const { classes } = props

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt='increase priority'
      />

      <Grid container spacing={2} justify='center'>
        <Grid item>
          <Button variant='contained' className={clsx(classes.buttonColor, classes.fontNunito)}>
                    Escreva seu comercio
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' className={clsx(classes.buttonColor, classes.fontNunito)}>
                    Converse com a vovó
          </Button>
        </Grid>
      </Grid>

    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductHero)
