import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserEmail } from "~/store/slice";
import { PATHS } from "~/constants/paths";
import { userEmail } from "~/constants/userSchema";

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
  const [isButtonValid, setIsButtonValid] = useState(false);

  const dispatch = useDispatch();

  const handleEmailChange = async (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const isValid = await userEmail.isValid(newEmail);
    setIsButtonValid(isValid);
  };

  const handleClick = async () => {
    try {
      dispatch(setUserEmail(email));
      navigate(PATHS.VERIFY);
    } catch (e) {
      toast.error(e.message);
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
        disabled={!isButtonValid}
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
