import { useState } from "react";
import { AxiosError } from "axios";
import { Button } from "@mui/material";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { COOKIE_TOKEN_KEY, COOKIES_REFRESH_KEY } from "~/constants/config";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import api from "~/api";
import { PATHS } from "~/constants/paths";

const styles = {
  container:
    "flex flex-col justify-center  items-center p-6 ml-16 gap-3 w-full md:w-2/3",
  title: "text-sky-900 text-xl md:text-2xl font-medium leading-loose mb-4",
  text: "text-sm",
  clearButton: "cursor-pointer",
  inputContainer: "flex flex-row items-center gap-3",
  button: "w-max place-self-end pr-10",
};

const languageID = "1";
const email = "demo@demo.com";

const CodeInput = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const clearCode = () => {
    setCode("");
  };

  const handleClick = async () => {
    try {
      if (code.length === 6) {
        const user = { email, languageID, code };
        const response = await api.auth.login(user);
        Cookies.set(COOKIE_TOKEN_KEY, response.data.jwt.token);
        Cookies.set(COOKIES_REFRESH_KEY, response.data.jwt.refreshToken);
        const userData = await api.auth.getUser();
        console.log(userData);
        navigate(PATHS.HOME);
      } else {
        toast.error("invalid code");
      }
    } catch (e) {
      if (e instanceof AxiosError)
        toast.error(e.response?.data.message || e.message);
    }
  };

  const onChange = (data) => {
    setCode(data);
  };

  return (
    <form className={styles.container}>
      <p className={styles.title}>Login</p>
      <p className={styles.text}>
        To finalize your verification, please enter the code that has been sent
        to your email address / SMS
      </p>
      <div className={styles.inputContainer}>
        <VerificationInput
          autoFocus
          value={code}
          validChars="0-9"
          placeholder="*"
          onChange={onChange}
        />
        <CloseOutlinedIcon className={styles.clearButton} onClick={clearCode} />
      </div>
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleClick}
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default CodeInput;
