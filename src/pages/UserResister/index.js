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

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(3)
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
  }
}))

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
        <Typography component='h1' variant='h5'>
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
