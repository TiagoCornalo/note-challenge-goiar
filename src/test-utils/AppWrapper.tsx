import { Provider } from "react-redux";
import { ModalProvider } from "@/context";
import { Toaster } from "react-hot-toast";
import store from "@/redux/store";
import App from "@/App";

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <Toaster />
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  );
}
