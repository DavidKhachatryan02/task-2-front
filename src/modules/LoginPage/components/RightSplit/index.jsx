import { TextField } from "@mui/material";

const RightSplit = () => {
  return (
    <div  className=" flex flex-col justify-center  items-start w-2/3 ">
        <p className="w-96 text-sky-900 text-2xl font-medium leading-loose">Login</p>
      <TextField
        id="standard-basic"
        label="Enter your email"
        type={"email"}
        variant="standard"
      />
    </div>
  );
};

export default RightSplit;
