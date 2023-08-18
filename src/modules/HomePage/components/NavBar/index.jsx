import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

const styles = {
  nabar: "bg-[#003367] left-0 w-16 flex flex-col items-center  py-5",
  menuIcon: "mb-10",
  dashboard: "mb-7",
};

const iconColorWhite = "#f3e5f5";

const NavBar = () => {
  return (
    <div className={styles.nabar}>
      <MenuIcon htmlColor={iconColorWhite} className={styles.menuIcon} />
      <DashboardOutlinedIcon
        htmlColor={iconColorWhite}
        className={styles.dashboard}
      />
      <PermContactCalendarOutlinedIcon htmlColor={iconColorWhite} />
    </div>
  );
};

export default NavBar;
