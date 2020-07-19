import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'

const styles = (theme) => ({
  title: {
    fontSize: 28,
    fontFamily: 'shrikhand'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    backgroundColor: '#DB87D5',
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 20,
    color: theme.palette.common.white,

    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  backgroundColor: {
    backgroundColor: '#7EBEC0',
    padding: '6px'
  },
  buttonLogin: {
    marginTop: '6px'

  },
  fontShrikhand: {
    fontFamily: 'Shrikhand'
  },
  fontNunito: {
    fontFamily: 'Nunito'
  }

})

function AppAppBar (props) {
  const { classes } = props

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <Link
              variant='h7'
              underline='none'
              color='inherit'
              fontFamily='shrikhand'
              className={clsx(classes.title, classes.fontShrikhand)}
              href='/premium-themes/onepirate/'
            >

              {'Dona Irene Ajuda'}
            </Link>
          </div>
          <div className={classes.right}>
            <Link
              color='inherit'
              variant='h7'
              underline='none'
              className={clsx(classes.rightLink, classes.buttonLogin, classes.fontNunito)}
              href='/login'
            >
              {'Entrar'}
            </Link>
            <Link
              underline='none'
              variant='h7'
              className={clsx(classes.rightLink, classes.backgroundColor, classes.fontNunito)}
              href='/premium-themes/onepirate/sign-up/'
            >
              {'Escrever-se'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  )
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppAppBar)
