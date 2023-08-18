import { TextField, FormControlLabel, Checkbox } from "@mui/material";

//!! check date and number fealds

const styles = {
  mainContainer: "w-2/3 flex flex-col gap-2 ",
  title: "text-sky-900 text-xl font-medium leading-loose",
  firstRow: "flex w-4/5 gap-5",
  secondRow: "flex gap-5",
  thirdRow: "flex gap-5 w-5/7",
  Absences: " w-20",
};

const UserMainInfo = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>General Info</p>
      <div className={styles.firstRow}>
        <TextField label="firstName" variant="standard" />
        <TextField label="Lastname" variant="standard" value="GAG" />
        <TextField label="Date of birdth" variant="standard" />
      </div>
      <div className={styles.secondRow}>
        <TextField label="Email" variant="standard" />
        <TextField label="Personal Email" variant="standard" size="small" />
        <TextField label="phone number" variant="standard" type="number" />
      </div>
      <div className={styles.thirdRow}>
        <TextField label="Start Date" variant="standard" />
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
  );
};

export default UserMainInfo;
