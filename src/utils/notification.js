import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const settings = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const success = (text) => toast.success(text, settings);
const error = (text) => toast.error(text, settings);

//

const SignupSuccess = (name) =>
  success(`Success profile created. Welcome, ${name}`);

const SignupError = () => error("Something went wrong, please try again");

const LoginSuccess = (name) => success(`Welcome back, ${name}`);

const LoginError = () => error("Wrong login or password");

const LogoutSuccess = (name) => toast(`Goodbye, will happy to see you later`);

const LogoutError = () =>
  error("Something went wrong, refresh the site or try again");

const RefreshError = () =>
  error("Something went wrong, please try again later");

//

const FetchSuccess = () => success("Your contacts successfully upload");

const FetchError = () =>
  error("Failed to get your contact list. Please try again later");

const AddContactSuccess = () => success("Contact added successfully");

const AddContactError = () =>
  error("There was an error adding a contact. Please try agin later");

const DeleteContactSuccess = () => success("Contact successfully deleted");

const DeleteContactError = () =>
  error("Failed to add contact. Please try again later");

const ChangeContactSuccess = () => success("Contact changed successfully");

const ChangeContactError = () =>
  error("Failed to change contact. Please try again later");

//

const notification = {
  success,
  error,
  SignupSuccess,
  SignupError,
  LoginSuccess,
  LoginError,
  LogoutSuccess,
  LogoutError,
  RefreshError,
  FetchSuccess,
  FetchError,
  AddContactSuccess,
  AddContactError,
  DeleteContactSuccess,
  DeleteContactError,
  ChangeContactSuccess,
  ChangeContactError,
};

export default notification;
