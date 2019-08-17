import React, { useState, useContext } from 'react';
import { addNewImage } from '../../store/auth/actions';
import { toggleDialog, setSimpleImg } from '../../store/Dialog/actions';
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

const useStyles = makeStyles(theme => ({
  img: {
    display: 'block',
    position: 'fixed',
    width: 500,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    height: 'auto'
  }
}));

const DialogImage = ({
  isSimpleImg,
  isDialogOpen,
  dialogImg,
  toggleDialog,
  setSimpleImg,
  addNewImage,
  location
}) => {
  const classes = useStyles();

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

          addNewImage({
            imgMain: location.pathname.slice(9) + '.png',
            title,
            description,
            img: data.fileName
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

  const handleOnClose = () => {
    toggleDialog();

    setTimeout(() => setSimpleImg(false), 200);
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleOnClose}
      aria-labelledby="form-dialog-title"
    >
      {isSimpleImg ? (
        <img className={classes.img} src={dialogImg} />
      ) : (
        <React.Fragment>
          <DialogTitle id="form-dialog-title">Добавить картинку</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Чтобы добавить картинку, заполните поля ниже.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Название картинки"
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
              label="Описание картинки"
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
              Загрузить картинку
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
              Добавить
            </Button>
          </DialogActions>
        </React.Fragment>
      )}
    </Dialog>
  );
};

const mapStateToProps = state => ({
  isDialogOpen: state.dialog.isDialogOpen,
  dialogImg: state.dialog.dialogImg,
  isSimpleImg: state.dialog.isSimpleImg
});

const mapDispatchToProps = {
  toggleDialog,
  addNewImage,
  setSimpleImg
};

const WrappedDialogImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogImage);

export default WrappedDialogImage;
