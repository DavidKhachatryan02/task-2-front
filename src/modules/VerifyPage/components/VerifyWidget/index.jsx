import LoginPageLeftSplit from "../../../../ui/LoginPageleftSplit";
import CodeInput from "../CodeInput";

const styles = { container: "grid grid-cols-2 h-screen" };

const VerifyWidget = () => {
  return (
    <div className={styles.container}>
      <LoginPageLeftSplit />
      <CodeInput />
    </div>
  );
};

export default VerifyWidget;
