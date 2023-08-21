import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATHS } from "~/constants/paths";
import { Verify } from "../modules/VerifyPage";

const VerifyPage = () => {
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate(PATHS.LOGIN);
    }
  }, []);

  return <Verify />;
};

export default VerifyPage;
