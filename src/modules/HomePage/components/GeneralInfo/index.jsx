import UserAccounts from "../UserAccounts";
import UserMainInfo from "../UserMainInfo";

const styles = {
  container: "flex flex-col md:flex-row mb-10  md:mb-0",
};

const GeneralInfo = () => {
  return (
    <div className={styles.container}>
      <UserMainInfo />
      <UserAccounts />
    </div>
  );
};

export default GeneralInfo;
