import { createContext, useReducer } from "react";
import notificationReducer from "../reducers/notification";
import { TYPES } from "../types/notifications.actions";

const initialReducerNotification = {
  message: null,
};

const ContextNotification = createContext({});

const ContextNotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(
    notificationReducer,
    initialReducerNotification
  );

  const handleSetNotification = (msg) => {
    dispatch({
      type: TYPES.SET_MESSAGE,
      payload: msg,
    });
  };

  const handleClearNotification = () => {
    dispatch({
      type: TYPES.CLEAR_MESSAGE,
    });
  };

  const data = {
    notification,
    handleSetNotification,
    handleClearNotification,
  };

  return (
    <ContextNotification.Provider value={data}>
      {children}
    </ContextNotification.Provider>
  );
};

export default ContextNotificationProvider;
export { ContextNotification };
