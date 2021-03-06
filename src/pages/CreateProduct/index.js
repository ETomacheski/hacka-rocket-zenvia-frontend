import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Cookies from 'universal-cookie'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import useStyles from './css.js'

export default function SignUp () {
  const classes = useStyles()
  const history = useHistory()

  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')

  async function handleCreateProductAccount (event) {
    const cookies = new Cookies()

    const cookiesTes = cookies.getAll()

    event.preventDefault()
    setPrice(parseFloat(price))
    const data = {
      name,
      price,
      category,
      sold_by: cookiesTes.userData.id
    }
    try {
      console.log(cookiesTes.userData)
      cookies.set('auth', cookiesTes.token, { path: '/', sameSite: true })
      cookies.set('userData', cookiesTes.userData, { path: '/', sameSite: true })
      await axios({
        method: 'post',
        url: 'https://hacka-rocket-zenvia.herokuapp.com/products',
        withCredentials: true,
        data
      })

      alert('Produto cadastrado com sucesso.')
      history.push('/productItens')
    } catch (error) {
      console.log(error)
      console.log(data)
    }
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component='h1' variant='h5' className={clsx(classes.fontNunito, classes.title)}>
          Cadastro de Produto
        </Typography>
        <form className={classes.form} onSubmit={handleCreateProductAccount}>
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <TextField
                autoComplete='fname'
                name='name'
                variant='outlined'
                required
                fullWidth
                id='name'
                label='Nome'
                autoFocus
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete='fname'
                name='price'
                variant='outlined'
                required
                fullWidth
                id='price'
                label='Preço'
                value={price}
                onChange={event => setPrice(event.target.value)}
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='fname'
                name='category'
                variant='outlined'
                required
                fullWidth
                id='category'
                label='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
              />

            </Grid>

          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Enviar
          </Button>

        </form>
      </div>

    </Container>
  )
}
