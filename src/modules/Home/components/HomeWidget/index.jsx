import NavBar from "../NavBar";
import UserInfo from "../UserInfo";

const styles = {
  container: "h-screen flex flex-row ",
};

const HomeWidget = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <UserInfo />
    </div>
  );
};

export default HomeWidget;
