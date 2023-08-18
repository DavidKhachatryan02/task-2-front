import { TextField } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import GitHubIcon from "@mui/icons-material/GitHub";
import InputAdornment from "@mui/material/InputAdornment";

const UserAccounts = (user) => {
  return (
    <div className="w-1/3 ">
      <p>My accounts</p>
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
