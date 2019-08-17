import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { appStore } from '../../store/store';
import { connect } from 'react-redux';
import { logIn, addUser } from '../../store/auth/actions';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginForm = ({ onSubmitClick }) => {
  const classes = useStyles();

  const [authData, setAuthDate] = useState({
    login: '',
    password: '',
    loginError: false,
    passwordError: false
  });
  let { login, password, loginError, passwordError } = authData;
  return (
    <Container component="main" maxWidth="xs">
      <Redirect to="/" />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Форма входа
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();

            console.log(!login.length);
            loginError = !login.length;
            passwordError = !password.length;

            if (!passwordError) {
              const wrongPassword = onSubmitClick(login, password);
              if (wrongPassword === false) {
                passwordError = true;
              }
            }

            setAuthDate({ login, password, loginError, passwordError });
            console.log(authData);
          }}
          noValidate
        >
          <TextField
            error={loginError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Логин"
            name="login"
            autoComplete="email"
            onChange={e => {
              login = e.target.value;
              setAuthDate({ ...authData, login, loginError: false });
            }}
          />
          <TextField
            error={passwordError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => {
              password = e.target.value;
              setAuthDate({ ...authData, password, passwordError: false });
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: (login, password) => {
      let currentUser = null;
      const users = appStore.getState().auth.users;
      currentUser = users.filter(user => user.login === login)[0];
      if (currentUser) {
        if (currentUser.password !== password) {
          return false;
        }
      } else {
        currentUser = {
          login,
          password
        };

        dispatch(addUser(currentUser));
        localStorage.setItem(
          'users',
          JSON.stringify(appStore.getState().auth.users)
        );
      }
      currentUser.galleries = currentUser.galleries || [];
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      dispatch(logIn(currentUser));
    }
  };
};

const WrappedLoginForm = connect(
  null,
  mapDispatchToProps
)(LoginForm);

export default WrappedLoginForm;
