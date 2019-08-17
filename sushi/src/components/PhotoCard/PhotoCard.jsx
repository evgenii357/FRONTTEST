import React from 'react';
import { deleteImage } from '../../store/auth/actions';
import {
  toggleDialog,
  setDialogImg,
  setSimpleImg
} from '../../store/Dialog/actions';
import { appStore } from '../../store/store';

import { Route, Link, BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';

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
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

const PhotoCard = withRouter(
  ({
    imgMain,
    image,
    deleteImage,
    toggleDialog,
    setDialogImg,
    setSimpleImg,
    location
  }) => {
    const classes = useStyles();

    const handleDelete = () => {
      deleteImage({
        ...image,
        imgMain: location.pathname.slice(9) + '.png'
      });

      localStorage.setItem(
        'currentUser',
        JSON.stringify(appStore.getState().auth.currentUser)
      );
      localStorage.setItem(
        'users',
        JSON.stringify(appStore.getState().auth.users)
      );
    };

    const handleOpenImage = () => {
      toggleDialog();
      setSimpleImg(true);
      setDialogImg(`http://localhost:3001/images/${image.img}`);
    };

    return (
      <GridListTile key={image.img}>
        <img
          onClick={handleOpenImage}
          src={`http://localhost:3001/images/${image.img}`}
          alt={image.title}
        />
        <GridListTileBar
          title={image.title}
          subtitle={<span>Описание: {image.description}</span>}
          titlePosition="bottom"
          actionIcon={
            <IconButton className={classes.icon}>
              <DeleteIcon onClick={handleDelete} />
            </IconButton>
          }
          actionPosition="right"
        />
      </GridListTile>
    );
  }
);

const mapDispatchToProps = {
  deleteImage,
  toggleDialog,
  setDialogImg,
  setSimpleImg
};

const WrappedPhotoCard = connect(
  null,
  mapDispatchToProps
)(PhotoCard);

export default WrappedPhotoCard;
