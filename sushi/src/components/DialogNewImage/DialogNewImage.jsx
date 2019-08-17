import React, { useState } from 'react';
import { addNewImage } from '../../store/auth/actions';
import { toggleDialog } from '../../store/Dialog/actions';
import { appStore } from '../../store/store';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

const DialogNewImage = ({
  isDialogOpen,
  toggleDialog,
  addNewImage,
  location
}) => {
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

  return (
    <Dialog
      open={isDialogOpen}
      onClose={toggleDialog}
      aria-labelledby="form-dialog-title"
    >
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
    </Dialog>
  );
};

const mapStateToProps = state => ({
  isDialogOpen: state.dialog.isDialogOpen
});

const mapDispatchToProps = {
  toggleDialog,
  addNewImage
};

const WrappedDialogNewImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogNewImage);

export default WrappedDialogNewImage;
