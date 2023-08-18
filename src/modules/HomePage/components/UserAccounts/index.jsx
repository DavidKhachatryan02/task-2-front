import { TextField, InputAdornment } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import GitHubIcon from "@mui/icons-material/GitHub";

const styles = {
  container: "flex flex-col gap-3.5 w-1/4",
  title: "text-sky-900 text-base font-medium leading-loose",
};

const UserAccounts = (user) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>My accounts</p>
      <TextField
        label="Slack"
        value={user.slackUserName}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AndroidIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        label="GitHub"
        value={user.gitHubUserName}
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
