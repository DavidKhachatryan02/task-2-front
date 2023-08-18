import UserAccounts from '../UserAccounts';
import UserMainInfo from '../UserMainInfo';

const styles = {
  container: 'flex flex-col md:flex-row mb-10  md:mb-0', // Adjusted flex layout for responsive behavior
};

const GeneralInfo = (user) => {
  return (
    <div className={styles.container}>
      <UserMainInfo {...user} />
      <UserAccounts {...user} />
    </div>
  );
};

export default GeneralInfo;
