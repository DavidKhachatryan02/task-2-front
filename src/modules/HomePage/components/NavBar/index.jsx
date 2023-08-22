import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { setUserPersonalData } from "~/store/slice";
import { PATHS } from "~/constants/paths";

const styles = {
  nabar:
    "fixed bg-[#003367] h-full left-0 w-16 flex flex-col items-center py-5",
  menuIcon: "mb-3 md:mb-10 cursor-pointer ",
  dashboard: "mb-3 md:mb-7 opacity-60 cursor-pointer hover:opacity-100",
  userInfo: "cursor-pointer",
  logoutIcon: "opacity-60 mt-auto cursor-pointer hover:opacity-100",
};

const iconColorWhite = "#f3e5f5";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserPersonalData({}));
    navigate(PATHS.LOGIN);
  };

  return (
    <div className={styles.nabar}>
      <MenuIcon htmlColor={iconColorWhite} className={styles.menuIcon} />
      <DashboardOutlinedIcon
        htmlColor={iconColorWhite}
        className={styles.dashboard}
      />
      <PermContactCalendarOutlinedIcon
        className={styles.userInfo}
        htmlColor={iconColorWhite}
      />
      <LogoutIcon
        className={styles.logoutIcon}
        htmlColor={iconColorWhite}
        onClick={handleLogout}
      />
    </div>
  );
};

export default NavBar;
