import UserAccounts from "../UserAccounts";
import UserMainInfo from "../UserMainInfo";

const GeneralInfo = (user) => {
  return (
    <div className="h-1/3 flex mb-10 ">
      <UserMainInfo {...user} />
      <UserAccounts {...user} />
    </div>
  );
};

export default GeneralInfo;
