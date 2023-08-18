import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


const styles = {
  mainContainer: "w-2/3 flex flex-col gap-5 ",
  title: "text-sky-900 text-xl font-medium leading-loose",
  firstRow: "flex w-4/5 gap-5",
  secondRow: "flex gap-5",
  thirdRow: "flex gap-7 w-5/7 mt-5 ",
  Absences: " w-20",
};

const UserMainInfo = (user) => {
  const parsedStartDate = dayjs(user.startDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.mainContainer}>
        <p className={styles.title}>General Info</p>
        <div className={styles.firstRow}>
          <TextField label="firstName" variant="standard" />
          <TextField label="Lastname" variant="standard" value="GAG" />
          <DatePicker disabled label="Date of birth" value={parsedStartDate} />
        </div>
        <div className={styles.secondRow}>
          <TextField label="Email" variant="standard" />
          <TextField label="Personal Email" variant="standard"  />
          <TextField label="phone number" variant="standard" type="number" />
        </div>
        <div className={styles.thirdRow}>
          <DatePicker
          disabled
            label="Start date"
            value={parsedStartDate}
          />
          <TextField
            className={styles.Absences}
            label="Absences"
            variant="standard"
            type="number"
            value={15}
          />
          <FormControlLabel
            control={<Checkbox checked={true} />}
            label=" Core team member"
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default UserMainInfo;
