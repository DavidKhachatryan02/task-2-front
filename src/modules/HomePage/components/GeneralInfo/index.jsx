import UserAccounts from "../UserAccounts";
import UserMainInfo from "../UserMainInfo";

const styles={
  container:"h-1/3 flex mb-10 "
}

const GeneralInfo = (user) => {
  return (
    <div className={styles.container}>
      <UserMainInfo {...user} />
      <UserAccounts {...user} />
    </div>
  );
};

export default GeneralInfo;
