import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import ProductHeroLayout from './ProductHeroLayout'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import backgroundImage from '../img/fundo.jpg'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 0,
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
    color: '#fff',
    borderStyle: 'none',
    backgroundColor: '#DB87D5',
    '&:hover': {
      backgroundColor: '#c46abc'

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
          <Button variant='contained' className={clsx(classes.buttonColor, classes.fontNunito, classes.button)}>
                    Escreva seu comercio
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' className={clsx(classes.buttonColor, classes.fontNunito, classes.button)}>
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
