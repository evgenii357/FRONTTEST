export const TOGGLE_DIALOG_OPEN = 'TOGGLE_DIALOG_OPEN';
export const LOG_OUT = 'LOG_OUT';
export const SET_DIALOG_IMG = 'SET_DIALOG_IMG';
export const SET_SIMPLE_IMG = 'SET_SIMPLE_IMG';

export const toggleDialog = () => ({
  type: TOGGLE_DIALOG_OPEN
});

export const setDialogImg = dialogImg => ({
  type: SET_DIALOG_IMG,
  dialogImg
});

export const setSimpleImg = bool => ({
  type: SET_SIMPLE_IMG,
  bool
});
