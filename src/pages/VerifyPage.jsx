import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATHS } from "~/constants/paths";
import { Verify } from "../modules/VerifyPage";

const VerifyPage = () => {
  const email = useSelector((state) => state.user.email);
  const user = useSelector((state) => state.user.userPerosnalData);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(user) !== "{}") {
      navigate(PATHS.HOME);
    } else if (!email) {
      navigate(PATHS.LOGIN);
    }
  }, []);

  return <Verify />;
};

export default VerifyPage;
