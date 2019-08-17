export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const ADD_USER = 'ADD_USER';
export const ADD_NEW_GALLERY = 'ADD_NEW_GALLERY';
export const DELETE_GALLERY = 'DELETE_GALLERY';
export const ADD_NEW_IMAGE = 'ADD_NEW_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export const logIn = currentUser => {
  return {
    type: LOG_IN,
    currentUser
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};

export const addUser = currentUser => {
  return {
    type: ADD_USER,
    currentUser
  };
};

export const addNewGallery = newGallery => {
  return {
    type: ADD_NEW_GALLERY,
    newGallery
  };
};

export const deleteGallery = gallery => {
  return {
    type: DELETE_GALLERY,
    gallery
  };
};

export const addNewImage = newImage => {
  return {
    type: ADD_NEW_IMAGE,
    newImage
  };
};

export const deleteImage = image => {
  return {
    type: DELETE_IMAGE,
    image
  };
};
