import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import clsx from 'clsx'
import axios from 'axios'
import Filled from '@material-ui/icons/Delete'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom'
import useStyles from './css.js'

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

export default function Album () {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const history = useHistory()
  async function deleteProducts (id) {
    try {
      await axios({
        method: 'delete',
        url: `https://hacka-rocket-zenvia.herokuapp.com/products/${id}`,
        withCredentials: true
      })
      history.go('/productItens')
    } catch (error) {
      console.log(error)
    }
  }
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
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product} xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2' className={classes.titleCard}>
                      {product.name}
                    </Typography>
                    <Typography className={classes.fontNunito}>
                      {product.category}
                    </Typography>
                    <Typography className={classes.fontNunito}>
                      {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.buttonCard}>

                    <Button size='small' color='primary' onClick={() => deleteProducts(product.id)}>
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
        <Typography variant='h6' align='center' gutterBottom className={classes.fontNunito}>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p' className={classes.fontNunito}>
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  )
}
