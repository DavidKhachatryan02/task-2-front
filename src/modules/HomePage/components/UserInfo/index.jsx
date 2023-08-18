import GeneralInfo from "../GeneralInfo";

const user = {
  appUserID: "9bdb799d-a8f8-4580-b5f9-2a0b59b08569",
  languageID: "b73471f8-a753-4d71-8d5b-2ca27a10779b",
  name: "Demo Demo",
  firstName: "Demo",
  lastName: "Demo",
  userPhoto: null,
  email: "demo@demo.com",
  slackUserName: "demo",
  gitHubUserName: "demo",
  personalEmail: "demo@demo",
  dateOfBirth: "2022-07-14T09:00:00",
  absences: 18,
  startDate: "2022-07-22T18:00:00",
  mobilePhone: "0000",
  isCoreTeamMember: true,
  userCrmProfilePermission: {
    isAllowToEditSetting: true,
    isAllowToEditLabels: true,
    isAllowToEditProfile: true,
    isAllowToEditCrmUsers: true,
    isAllowToEditPermissions: true,
    isAllowToViewLog: true,
    isAllowToViewSensitiveInformation: true,
    isAllowToResetSensitiveInformation: true,
    userCrmProfiles: null,
    title: "Admin",
    id: "1ad90a0d-ba09-4df2-b466-e6733f8437cd",
    isActive: true,
  },
  isActive: true,
};

const UserInfo = () => {
  return (
    <div className="w-full flex flex-col ml-9 mr-5 mt-4 gap-5	">
      <p>My Profile</p>
      <GeneralInfo {...user}/>
      <div className="bg-sky-400 h-1/3">baylusss</div>
    </div>
  );
};

export default UserInfo;
