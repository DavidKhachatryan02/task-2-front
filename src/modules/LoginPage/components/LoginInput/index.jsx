import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../constants/paths";

const styles = {
  container: " flex flex-col justify-center  p-6 gap-6 w-2/3",
  title: "text-sky-900 text-xl md:text-2xl font-medium leading-loose mb-4",
  mailInput: " w-1/2 md:max-w-sm ",
  button: "w-max place-self-end pt-10",
};

const LoginInput = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    alert(`Email entered: ${email}`);
    navigate(PATHS.VERIFY);
  };

  return (
    <form className={styles.container}>
      <p className={styles.title}>Login</p>
      <TextField
        className={styles.mailInput}
        id="standard-basic"
        autoFocus={true}
        label="Enter your email"
        type="email"
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
