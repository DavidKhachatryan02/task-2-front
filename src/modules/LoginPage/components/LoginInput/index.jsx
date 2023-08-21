import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { PATHS } from "~/constants/paths";
import { userEmail } from "~/constants/userSchema";
import api from "~/api";
import { COOKIE_TOKEN_KEY, COOKIES_REFRESH_KEY } from "~/constants/config";

const languageID = "1";
const code = "111111";

const styles = {
  container:
    "flex flex-col items-center justify-center p-6 gap-6 w-full md:w-2/3 ",
  title: "text-sky-900 text-2xl md:text-3xl font-medium leading-loose mb-4",
  mailInput: "w-full md:max-w-sm",
  button: "w-max place-self-end pt-4",
};

const LoginInput = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = async () => {
    const isValid = await userEmail.isValid(email);
    try {
      if (isValid) {
        const userData = { email, languageID, code };
        console.log()
        const response = await api.auth.login(userData); 
        Cookies.set(COOKIE_TOKEN_KEY, response.data.jwt.token);
        Cookies.set(COOKIES_REFRESH_KEY, response.data.jwt.refreshToken);
        console.log(response)
        navigate(PATHS.VERIFY);
      } else {
        toast.error("invalid Email");
      }
    } catch (e) {
      if (e instanceof AxiosError)
        toast.error(e.response?.data.message || e.message);
    }
  };

  return (
    <form className={styles.container}>
      <p className={styles.title}>Login</p>
      <TextField
        className={styles.mailInput}
        id="standard-basic"
        autoFocus={true}
        label="Enter your email"
        variant="standard"
        value={email}
        onChange={handleEmailChange}
      />
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleClick}
      >
        Send Code
      </Button>
    </form>
  );
};

export default LoginInput;
