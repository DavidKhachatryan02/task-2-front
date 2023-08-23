import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserState } from "~/store/selectors/userSelectors";
import { PATHS } from "~/constants/paths";

const PublicRoute = ({ children }) => {

  const { data, loaded } = useSelector(selectUserState);

  if (!loaded) return null;
  if (data) return <Navigate to={PATHS.HOME} />;
  return children;
};

export default PublicRoute;
