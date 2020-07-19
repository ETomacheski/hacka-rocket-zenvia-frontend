import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import clsx from 'clsx'
import axios from 'axios'
import Filled from '@material-ui/icons/Delete'
import Cookies from 'universal-cookie'
import { styles as toolbarStyles } from '../Home/modules/components/Toolbar'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
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
    flexDirection: 'column'
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
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Album () {
  const classes = useStyles()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts () {
      const cookies = new Cookies()

      const cookiesTes = cookies.getAll()
      try {
        const response = await axios({
          method: 'get',
          url: 'https://hacka-rocket-zenvia.herokuapp.com/user',
          withCredentials: true
        })
        cookies.set('auth', cookiesTes.token, { path: '/', sameSite: true })
        cookies.set('userData', cookiesTes.userData, { path: '/', sameSite: true })
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  return (
    <>
      <CssBaseline />
      <div>
        <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
            <div className={classes.left}>
              <Link
                item
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
                item xs={8} sm={4}
                color='inherit'
                variant='h7'
                underline='none'
                className={clsx(classes.rightLink, classes.buttonLogin, classes.fontNunito)}
                href='/productRegister'
              >
                {'Cadastrar Produto'}
              </Link>
              <Link
                item xs={8} sm={4}
                underline='none'
                variant='h7'
                className={clsx(classes.rightLink, classes.backgroundColor, classes.fontNunito)}
                href='/'
              >
                {'Sair'}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
      <main>

        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.category}
                    </Typography>
                    <Typography>
                      {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.buttonCard}>

                    <Button size='small' className={classes.delete}>
                      Editar
                    </Button>

                    <Button size='small' color='primary'>
                      <Filled className={classes.delete} />
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  )
}
