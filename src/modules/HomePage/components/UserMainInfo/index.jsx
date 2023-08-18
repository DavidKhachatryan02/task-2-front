import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//!! check date and number fealds

const styles={
    mainContainer:"w-2/3 flex flex-col gap-2",
    firstRow:"flex gap-6 w-4/5",
    secondRow:"flex gap-6",
    thirdRow:"flex gap-6 w-5/7",
    Absences:" w-20"
}

const UserMainInfo = () => {
  return (
    <div className={styles.mainContainer}>
      <p>General Info</p>
      <div className={styles.firstRow}>
        <TextField label="firstName" variant="standard"  />
        <TextField label="Lastname" variant="standard"  value="GAG" />
        <TextField label="Date of birdth" variant="standard" />
      </div>
      <div className={styles.secondRow}>
        <TextField label="Email" variant="standard" />
        <TextField label="Personal Email" variant="standard" size="small"/>
        <TextField label="phone number" variant="standard" type="number" />
      </div>
      <div className={styles.thirdRow}>
        <TextField label="Start Date" variant="standard" />
        <TextField className={styles.Absences} label="Absences" variant="standard" type="number" value={15} />
        <FormControlLabel
          control={<Checkbox checked={true} />}
          label=" Core team member"
        
        />
      </div>
    </div>
  );
};

export default UserMainInfo;
