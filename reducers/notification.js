import { TYPES } from "../types/notifications.actions";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_MESSAGE:
      return {
        message: action.payload ?? null,
      };
    case TYPES.CLEAR_MESSAGE:
      return {
        message: null,
      };
    default:
      return state;
  }
};

export default notificationReducer;
