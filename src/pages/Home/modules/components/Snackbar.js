import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiSnackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    flexWrap: 'inherit',
    [theme.breakpoints.up('md')]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4
    }
  },
  contentMessage: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'center'
  },
  contentAction: {
    paddingLeft: theme.spacing(2)
  },
  info: {
    flexShrink: 0,
    marginRight: theme.spacing(2)
  },
  close: {
    padding: theme.spacing(1)
  }
})

function Transition (props) {
  return <Slide {...props} direction='down' />
}

function Snackbar (props) {
  const { classes, onClose, message, ...other } = props

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={6000}
      transition={Transition}
      ContentProps={{
        classes: {
          root: classes.content,
          message: classes.contentMessage,
          action: classes.contentAction
        }
      }}
      message={
        <>
          <span>{message}</span>
        </>
      }
      action={[
        <IconButton
          key='close'
          aria-label='close'
          color='inherit'
          className={classes.close}
          onClick={onClose}
        />
      ]}
      {...other}
    />
  )
}

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  SnackbarContentProps: PropTypes.object
}

export default withStyles(styles)(Snackbar)
