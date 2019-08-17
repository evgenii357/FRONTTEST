import { TOGGLE_DIALOG_OPEN, SET_DIALOG_IMG, SET_SIMPLE_IMG } from './actions';

const initialState = {
  isDialogOpen: false,
  dialogImg: '',
  isSimpleImg: false
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG_OPEN:
      return {
        ...state,
        isDialogOpen: !state.isDialogOpen
      };

    case SET_DIALOG_IMG:
      return {
        ...state,
        dialogImg: action.dialogImg
      };

    case SET_SIMPLE_IMG:
      return {
        ...state,
        isSimpleImg: action.bool
      };
  }

  return state;
};

export default dialogReducer;
