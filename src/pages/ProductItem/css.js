import { makeStyles } from '@material-ui/core/styles'
import { styles as toolbarStyles } from '../Home/modules/components/Toolbar'

export default makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Nunito'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
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
  },
  delete: {
    color: '#7EBEC0'
  },
  buttonCard: {
    textAlign: 'left'
  },
  titleCard: {
    fontFamily: 'shrikhand',
    fontWeight: 'semi-bold'
  }
}))
