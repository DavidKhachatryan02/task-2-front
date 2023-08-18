import LeftSplit from "../../../../ui/LoginPageleftSplit";
import LoginInput from "../LoginInput";

const styles = { container: 'grid grid-cols-1 md:grid-cols-2 h-screen' };

const LoginWidge = () => {
  return (
    <div className={styles.container}>
      <LeftSplit />
      <LoginInput />
    </div>
  );
};

export default LoginWidge;
