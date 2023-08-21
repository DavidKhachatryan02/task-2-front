import { useState } from "react";
import { AxiosError } from "axios";
import { Button } from "@mui/material";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { COOKIE_TOKEN_KEY, COOKIES_REFRESH_KEY } from "~/constants/config";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import api from "~/api";
import { PATHS } from "~/constants/paths";
import { setUserCode, setUserPerosnalData } from "~/store/slice";

const styles = {
  container:
    "flex flex-col justify-center  items-center p-6 ml-16 gap-3 w-full md:w-2/3",
  title: "text-sky-900 text-xl md:text-2xl font-medium leading-loose mb-4",
  text: "text-sm",
  clearButton: "cursor-pointer",
  inputContainer: "flex flex-row items-center gap-3",
  button: "w-max place-self-end pr-10",
};

const CodeInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputCode, setInputCode] = useState("");

  const clearCode = () => {
    setInputCode("");
  };

  const email = useSelector((state) => state.user.email);
  const languageID = useSelector((state) => state.user.languageID);

  const handleClick = async () => {
    try {
      if (inputCode.length === 6) {
        dispatch(setUserCode(inputCode));
        const user = { languageID, email, code: inputCode };
        const response = await api.auth.login(user);
        Cookies.set(COOKIE_TOKEN_KEY, response.data.jwt.token);
        Cookies.set(COOKIES_REFRESH_KEY, response.data.jwt.refreshToken);
        const userData = await api.auth.getUser();
        dispatch(setUserPerosnalData(userData.data));
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
    setInputCode(data);
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
          value={inputCode}
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
