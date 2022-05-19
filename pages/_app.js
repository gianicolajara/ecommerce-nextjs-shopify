import { useContext, useState } from "react";
import CartNav from "../components/CartNav";
import Footer from "../components/Footer";
import LoadingLayout from "../components/LoadingLayout";
import Menu from "../components/Menu";
import Notification from "../components/Notification";
import CartContextProvider from "../contexts/cart.context";
import ContextNotificationProvider, {
  ContextNotification,
} from "../contexts/notification.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setOpen(!open);
  };

  return (
    <CartContextProvider>
      <LoadingLayout>
        <ContextNotificationProvider>
          <div className="flex flex-col min-h-[100vh] h-full">
            <Menu open={open} handleOpen={handleOpen} />
            <CartNav open={open} />
            <div className="flex-shrink-0 flex-grow">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </ContextNotificationProvider>
      </LoadingLayout>
    </CartContextProvider>
  );
}

export default MyApp;
