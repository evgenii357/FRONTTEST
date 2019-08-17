import React from 'react';
import { deleteGallery } from '../../store/auth/actions';
import { appStore } from '../../store/store';
import PhotosList from '../PhotosList/PhotosList';

import { Route, Link, BrowserRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';

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

const GalleryCard = ({ gallery, deleteGallery }) => {
  const classes = useStyles();

  const handleDelete = () => {
    deleteGallery(gallery);

    localStorage.setItem(
      'currentUser',
      JSON.stringify(appStore.getState().auth.currentUser)
    );
    localStorage.setItem(
      'users',
      JSON.stringify(appStore.getState().auth.users)
    );
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`http://localhost:3001/images/${gallery.imgMain}`}
          title={`${gallery.title}'s preview`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {gallery.title}
          </Typography>
          <Typography>{gallery.description}</Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ textDecoration: 'none' }}
            to={`/gallery/${gallery.imgMain.slice(0, -4)}`}
          >
            <Button size="small" color="primary">
              Открыть
            </Button>
          </Link>
          <Button size="small" color="primary" onClick={handleDelete}>
            Удалить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

// const mapStateToProps = state => ({
//   galleries: state.auth.currentUser.galleries
// });

const mapDispatchToProps = {
  deleteGallery
};

const WrappedGalleryCard = connect(
  null,
  mapDispatchToProps
)(GalleryCard);

export default WrappedGalleryCard;
