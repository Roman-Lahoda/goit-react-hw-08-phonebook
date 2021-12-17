import Contacts from "./component/Contacts/Contacts";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Contacts />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
