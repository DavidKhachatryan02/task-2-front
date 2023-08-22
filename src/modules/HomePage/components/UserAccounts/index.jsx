import { useSelector } from "react-redux";
import { TextField, InputAdornment } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import GitHubIcon from "@mui/icons-material/GitHub";

const styles = {
  container: "flex flex-col gap-3.5 xl:w-1/5 ",
  title: "text-sky-900 text-base font-medium leading-loose",
};

const UserAccounts = () => {
  const userPersonalData = useSelector((state) => state.user.userPersonalData);

  return (
    <div className={styles.container}>
      <p className={styles.title}>My accounts</p>
      <TextField
        disabled
        label="Slack"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AndroidIcon />
            </InputAdornment>
          ),
        }}
        value={userPersonalData.slackUserName}
        variant="standard"
      />
      <TextField
        disabled
        label="GitHub"
        value={userPersonalData.gitHubUserName}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GitHubIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  );
};

export default UserAccounts;
