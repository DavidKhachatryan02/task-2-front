import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//!! check date and number fealds

const UserMainInfo = () => {
  return (
    <div className="w-2/3 flex flex-col gap-2">
      <p>General Info</p>
      <div className="flex gap-6 w-3/5">
        <TextField label="firstName" variant="standard"  />
        <TextField label="Lastname" variant="standard"  value="GAG" />
        <TextField label="Date of birdth" variant="standard" />
      </div>
      <div className="flex gap-6">
        <TextField label="Email" variant="standard" />
        <TextField label="Personal Email" variant="standard" size="small"/>
        <TextField label="phone number" variant="standard" type="number" />
      </div>
      <div className="flex gap-6 w-5/7">
        <TextField label="Start Date" variant="standard" />
        <TextField label="amsensis" variant="standard" type="number" />
        <FormControlLabel
          control={<Checkbox checked={true} />}
          label=" Core team member"
        />
      </div>
    </div>
  );
};

export default UserMainInfo;
