import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import api from "~/api";
import { PATHS } from "~/constants/paths";
import { COOKIE_TOKEN_KEY, COOKIES_REFRESH_KEY } from "~/constants/config";
import { login } from "~/store/slice/userSlice";

const styles = {
  container:
    "flex flex-col justify-center  items-center p-6 ml-16 gap-3 w-full md:w-2/3",
  title: "text-sky-900 text-xl md:text-2xl font-medium leading-loose mb-4",
  text: "text-sm",
  clearButton: "cursor-pointer",
  inputContainer: "flex flex-row items-center gap-3",
  button: "w-max place-self-end pr-10",
};

const isValidCode = (code) => {
  return code.length === 6;
};

const CodeInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  const clearCode = () => {
    setCode("");
  };

  const onChange = (newCode) => {
    setCode(newCode);
  };

  const handleSubmit = async () => {
    try {
      if (isValidCode(code)) {
        const email = sessionStorage.getItem("email");
        const response = await api.auth.login({ email, code, languageID: "1" });

        Cookies.set(COOKIE_TOKEN_KEY, response.data.jwt.token);
        Cookies.set(COOKIES_REFRESH_KEY, response.data.jwt.refreshToken);

        const { data } = await api.auth.getUser();

        dispatch(login(data));
        navigate(PATHS.HOME);
      }
    } catch (e) {
      if (e instanceof AxiosError)
        toast.error(e?.response?.data?.message || e.message);
    }
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
        disabled={!isValidCode(code)}
        className={styles.button}
        variant="contained"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default CodeInput;
