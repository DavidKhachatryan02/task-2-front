import GeneralInfo from "../GeneralInfo";

const styles = {
  container:
    "w-full md:flex-row items-start md:items-center md:justify-between px-20 py-6 md:py-8 ",
  title: "text-sky-900 text-3xl md:text-4xl font-medium leading-loose mb-4",
};

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>My Profile</p>
      <GeneralInfo />
    </div>
  );
};

export default UserInfo;
