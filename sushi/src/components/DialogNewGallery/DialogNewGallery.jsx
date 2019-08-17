import React, { useState, useContext } from 'react';
import WrappedGalleriesList from '../GalleriesList/GalleriesList';
import { logIn, logOut, addNewGallery } from '../../store/auth/actions';
import { toggleDialog } from '../../store/Dialog/actions';
import { appStore } from '../../store/store';

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
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

const DialogNewGallery = ({ isDialogOpen, toggleDialog, addNewGallery }) => {
  const [title, setTitle] = useState('');
  const [titleFirstType, setTitleFirstType] = useState(false);

  const [description, setDescription] = useState('');
  const [descriptionFirstType, setDescriptionFirstType] = useState(false);

  const [isUploadFile, setIsUploadFile] = useState(false);

  const validateDialog = () => {
    return title && description && isUploadFile ? true : false;
  };

  const sendImgToServer = () => {
    if (validateDialog()) {
      var formData = new FormData();
      formData.append('img', document.getElementById('idInputFile').files[0]);

      const options = {
        method: 'POST',
        body: formData
      };

      fetch('http://localhost:3001/post', options)
        .then(response => response.json())
        .then(data => {
          toggleDialog();

          addNewGallery({
            title,
            description,
            imgMain: data.fileName
          });

          localStorage.setItem(
            'currentUser',
            JSON.stringify(appStore.getState().auth.currentUser)
          );
          localStorage.setItem(
            'users',
            JSON.stringify(appStore.getState().auth.users)
          );

          setTitle('');
          setDescription('');

          setTitleFirstType(false);
          setDescriptionFirstType(false);

          setIsUploadFile(false);
        });
    }
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={toggleDialog}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Новая галерея</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Чтобы создать новую галерею, нужно заполнить все поля ниже.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Название галереи"
          type="text"
          fullWidth
          error={titleFirstType && !title.length}
          onChange={event => {
            if (!titleFirstType) {
              setTitleFirstType(true);
            }
            setTitle(event.target.value);
          }}
        />

        <TextField
          margin="dense"
          label="Описание галереи"
          id="description"
          multiline={true}
          rows={5}
          rowsMax={50}
          fullWidth
          error={descriptionFirstType && !description.length}
          onChange={event => {
            if (!descriptionFirstType) {
              setDescriptionFirstType(true);
            }
            setDescription(event.target.value);
          }}
        />

        <Button variant="contained" component="label" fullWidth>
          Загрузить обложку
          <input
            id="idInputFile"
            type="file"
            style={{ display: 'none' }}
            onChange={() => {
              setIsUploadFile(true);
            }}
          />
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog} color="primary">
          Отменить
        </Button>
        <Button onClick={sendImgToServer} color="primary">
          Создать
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  isDialogOpen: state.dialog.isDialogOpen
});

const mapDispatchToProps = {
  toggleDialog,
  addNewGallery
};

const WrappedDialogNewGallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogNewGallery);

export default WrappedDialogNewGallery;
