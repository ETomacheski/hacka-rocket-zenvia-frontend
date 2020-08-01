import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#E3A43D'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    backgroundColor: '#DB87D5',
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
    fontFamily: 'Nunito',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: '#c46abc'
    }
  },

  fontNunito: {
    fontFamily: 'Nunito'
  },
  title: {
    fontSize: '36px'
  },
  fontShrikhand: {
    fontFamily: 'Shrikhand'
  }
}))
