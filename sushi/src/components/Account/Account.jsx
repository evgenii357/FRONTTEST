import React from 'react';
import WrappedDialogNewGallery from '../DialogNewGallery/DialogNewGallery';
import WrappedDialogNewImage from '../DialogNewImage/DialogNewImage';
import WrappedDialogImage from '../DialogImage/DialogImage';

import EmptyGalleriesList from '../EmptyGalleriesList/EmptyGalleriesList';
import WrappedGalleriesList from '../GalleriesList/GalleriesList';
import { logIn, logOut } from '../../store/auth/actions';
import { toggleDialog } from '../../store/Dialog/actions';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import PhotosList from '../PhotosList/PhotosList';

const useStyles = makeStyles(theme => ({
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
  }
}));

const Account = ({ currentUser, toggleDialog, logOut }) => {
  const classes = useStyles();

  const getTitleGallery = location => {
    const searchImgMain = location.pathname.slice(9) + '.png';

    const galleryIndex = currentUser.galleries.findIndex(gallery =>
      gallery.imgMain === searchImgMain ? true : false
    );

    return currentUser.galleries[galleryIndex].title;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Фотогалерея
            </Typography>
          </Toolbar>
        </AppBar>
      </Link>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <Route
                path="/gallery"
                render={({ location }) =>
                  `Галерея ${getTitleGallery(location)} пользователя ${
                    currentUser.login
                  }`
                }
              />
              <Route
                exact
                path="/"
                render={() => `Фотогалерея пользователя ${currentUser.login}`}
              />
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleDialog}
                      >
                        Создать новую галерею
                      </Button>
                    )}
                  />

                  <Route
                    path="/gallery"
                    render={() => (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleDialog}
                      >
                        Добавить картинку
                      </Button>
                    )}
                  />
                </Grid>

                <Grid item>
                  <Route
                    path="/gallery"
                    render={() => (
                      <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                          К списку галерей
                        </Button>
                      </Link>
                    )}
                  />
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary" onClick={logOut}>
                    Выйти из аккаунта
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {currentUser.galleries.length === 0 ? (
          <EmptyGalleriesList />
        ) : (
          <div>
            <Route exact path="/" component={WrappedGalleriesList} />
            <Switch>
              {currentUser.galleries.map((gallery, i) => (
                <Route
                  exact
                  key={i}
                  path={`/gallery/${gallery.imgMain.slice(0, -4)}`}
                  render={props => (
                    <PhotosList {...props} images={gallery.imgs} />
                  )}
                />
              ))}
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </div>
        )}
      </main>

      <Switch>
        <Route path="/gallery" component={WrappedDialogImage} />
        <Route exact path="/" component={WrappedDialogNewGallery} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    localStorage.setItem('currentUser', null);
    dispatch(logOut());
  },
  toggleDialog: () => dispatch(toggleDialog())
});

const WrappedAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);

export default WrappedAccount;
