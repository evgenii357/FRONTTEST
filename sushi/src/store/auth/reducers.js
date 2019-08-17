import {
  LOG_IN,
  LOG_OUT,
  ADD_USER,
  ADD_NEW_GALLERY,
  DELETE_GALLERY,
  ADD_NEW_IMAGE,
  DELETE_IMAGE
} from './actions';

const initialState = (() => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  console.log('Current user from localStorage ', currentUser);

  return {
    users,
    currentUser
  };
})();

const authReducer = (state = initialState, action) => {
  let currentUser = {};
  let users = [];

  let galleryIndex;

  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        currentUser: action.currentUser
      };

    case LOG_OUT:
      return {
        ...state,
        currentUser: null
      };

    case ADD_USER:
      users = state.users;
      users.push({ ...action.currentUser, galleries: [] });
      return {
        ...state,
        users
      };

    case ADD_NEW_GALLERY:
      currentUser = {
        login: state.currentUser.login,
        password: state.currentUser.password,
        galleries: [...state.currentUser.galleries]
      };

      currentUser.galleries.push({
        title: action.newGallery.title,
        description: action.newGallery.description,
        imgMain: action.newGallery.imgMain,
        imgs: []
      });

      users = state.users;
      users = users.map(user => {
        if (currentUser.login === user.login) {
          return currentUser;
        } else {
          return user;
        }
      });

      return {
        ...state,
        currentUser,
        users
      };

    case DELETE_GALLERY:
      currentUser = {
        login: state.currentUser.login,
        password: state.currentUser.password,
        galleries: [...state.currentUser.galleries]
      };

      currentUser.galleries = currentUser.galleries.filter(gallery =>
        gallery.imgMain === action.gallery.imgMain ? false : true
      );

      users = state.users;
      users = users.map(user => {
        if (currentUser.login === user.login) {
          return currentUser;
        } else {
          return user;
        }
      });

      return {
        ...state,
        currentUser,
        users
      };

    case ADD_NEW_IMAGE:
      currentUser = {
        login: state.currentUser.login,
        password: state.currentUser.password,
        galleries: [...state.currentUser.galleries]
      };

      galleryIndex = currentUser.galleries.findIndex(gallery =>
        gallery.imgMain === action.newImage.imgMain ? true : false
      );

      currentUser.galleries[galleryIndex].imgs.push({
        title: action.newImage.title,
        description: action.newImage.description,
        img: action.newImage.img
      });

      users = state.users;
      users = users.map(user => {
        if (currentUser.login === user.login) {
          return currentUser;
        } else {
          return user;
        }
      });

      return {
        ...state,
        currentUser,
        users
      };

    case DELETE_IMAGE:
      currentUser = {
        login: state.currentUser.login,
        password: state.currentUser.password,
        galleries: [...state.currentUser.galleries]
      };

      galleryIndex = currentUser.galleries.findIndex(gallery =>
        gallery.imgMain === action.image.imgMain ? true : false
      );

      currentUser.galleries[galleryIndex].imgs = currentUser.galleries[
        galleryIndex
      ].imgs.filter(image => (image.img === action.image.img ? false : true));

      users = state.users;
      users = users.map(user => {
        if (currentUser.login === user.login) {
          return currentUser;
        } else {
          return user;
        }
      });

      return {
        ...state,
        currentUser,
        users
      };

    default:
      return state;
  }
};

export default authReducer;
