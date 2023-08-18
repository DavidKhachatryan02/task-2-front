import { useState } from "react";
import { Button } from "@mui/material";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { PATHS } from "../../../../constants/paths";

const styles = {
  container: " flex flex-col justify-center  p-6 gap-3 w-2/3",
  title: "text-sky-900 text-xl md:text-2xl font-medium leading-loose mb-4",
  text: "text-sm",
  inputContainer: "flex flex-row items-center gap-3",
  button: "w-max place-self-end pr-10",
};

const CodeInput = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const clearCode = () => {
    setCode("");
  };

  const handleClick = () => {
    alert(`Code entered: ${code}`);
    navigate(PATHS.HOME);
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
        <CloseOutlinedIcon onClick={clearCode} />
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
