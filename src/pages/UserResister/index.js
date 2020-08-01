import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useStyles from './css.js'
import clsx from 'clsx'

export default function SignUp () {
  const classes = useStyles()
  const history = useHistory()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [category, setCategory] = useState('')

  async function handleCreateCompanyAccount (event) {
    event.preventDefault()
    const data = {
      name,
      email,
      password,
      location: city,
      business_category: category
    }
    try {
      await axios({
        method: 'post',
        url: 'https://hacka-rocket-zenvia.herokuapp.com/users',
        data
      })
      alert('Conta criada com sucesso.')
      history.push('/login')
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
        <Typography component='h1' className={clsx(classes.fontNunito, classes.title)}>
          Inscrever-se
        </Typography>
        <form className={classes.form} onSubmit={handleCreateCompanyAccount}>
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
                name='email'
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email'
                value={email}
                onChange={event => setEmail(event.target.value)}
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='city'
                variant='outlined'
                required
                fullWidth
                id='city'
                label='Cidade'
                value={city}
                onChange={event => setCity(event.target.value)}
              />

            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Senha'
                type='password'
                id='password'
                autoComplete='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
              />

            </Grid>

          </Grid>
          <Button
            type='submit'
            fullWidth
            className={classes.submit}
          >
            Enviar
          </Button>

        </form>
      </div>

    </Container>
  )
}
