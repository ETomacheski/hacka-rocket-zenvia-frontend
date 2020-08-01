import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useStyles from './css.js'
import clsx from 'clsx'

export default function SignIn () {
  const classes = useStyles()
  const history = useHistory()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  async function handleLogin (event) {
    event.preventDefault()
    const data = {
      email,
      password
    }
    try {
      axios.defaults.withCredentials = true

      const response = await axios({
        method: 'post',
        url: 'https://hacka-rocket-zenvia.herokuapp.com/signIn',
        data
      })
      const cookies = new Cookies()

      cookies.set('auth', response.data.token, { path: '/', sameSite: true })
      cookies.set('userData', response.data.userData, { path: '/', sameSite: true })

      history.push('/productItens')
    } catch (error) {
      alert('Falha no login.')
    }
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component='h1' className={clsx(classes.fontShrikhand, classes.title)}>
          Entrar
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            className={classes.fontNunito}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Senha'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            className={classes.fontNunito}
            onChange={event => setPassword(event.target.value)}
          />

          <Button
            type='submit'
            fullWidth
            className={clsx(classes.submit)}

          >
            Entrar
          </Button>
          <Grid container>

            <Grid item>
              <Link href='/register' className={classes.notRegistered}>
                {'Não possui cadastro?'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  )
}
