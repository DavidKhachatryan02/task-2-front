import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const styles = {
  mainContainer: "flex flex-col gap-14 mx-10 xl:w-3/5 xl:mr-10 ",
  title: "text-sky-900 text-xl font-medium leading-loose",
  firstRow: "flex flex-col md:flex-row gap-5",
  secondRow: "flex flex-col md:flex-row gap-5",
  thirdRow: "flex flex-col md:flex-row gap-5 md:items-center mt-5",
  Absences: "w-20",
};

const UserMainInfo = () => {
  const userPersonalData = useSelector((state) => state.user.userPersonalData);

  const parsedStartDate = dayjs(userPersonalData.startDate);
  const parsedBirthDate = dayjs(userPersonalData.dateOfBirth);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.mainContainer}>
        <p className={styles.title}>General Info</p>
        <div className={styles.firstRow}>
          <TextField
            disabled
            label="First Name"
            variant="standard"
            value={userPersonalData.firstName}
          />
          <TextField
            disabled
            label="Last Name"
            variant="standard"
            value={userPersonalData.lastName}
          />
          <DatePicker disabled label="Date of Birth" value={parsedBirthDate} />
        </div>
        <div className={styles.secondRow}>
          <TextField
            disabled
            label="Email"
            variant="standard"
            value={userPersonalData.email}
          />
          <TextField
            disabled
            label="Personal Email"
            variant="standard"
            value={userPersonalData.personalEmail}
          />
          <TextField
            disabled
            label="Phone Number"
            variant="standard"
            type="number"
            value={userPersonalData.mobilePhone}
          />
        </div>
        <div className={styles.thirdRow}>
          <DatePicker disabled label="Start Date" value={parsedStartDate} />
          <TextField
            disabled
            className={styles.Absences}
            label="Absences"
            variant="standard"
            type="number"
            value={userPersonalData.absences}
          />
          <FormControlLabel
            disabled
            control={<Checkbox checked={userPersonalData.isCoreTeamMember} />}
            label="Core Team Member"
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default UserMainInfo;
