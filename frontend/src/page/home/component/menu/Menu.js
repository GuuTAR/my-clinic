import './styles.scss'

import {
  faCalendar,
  faDatabase,
  faHome,
  faHospitalUser,
  faPills,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "antd";

const HomeMenu = () => {

  return (
    <Menu
      className="homemenu"
      defaultSelectedKeys={["home"]}
      mode="inline"
    >
      <Menu.Item key="home" icon={<FontAwesomeIcon icon={faHome} />}>
        Home
      </Menu.Item>
      <Menu.Item key="patient" icon={<FontAwesomeIcon icon={faHospitalUser} />}>
        My Patient
      </Menu.Item>
      <Menu.Item key="medicine" icon={<FontAwesomeIcon icon={faPills} />}>
        My Medicine
      </Menu.Item>
      <Menu.Item key="calendar" icon={<FontAwesomeIcon icon={faCalendar} />}>
        Calendar
      </Menu.Item>
      <Menu.Item key="account" icon={<FontAwesomeIcon icon={faUser} />}>
        Account
      </Menu.Item>
      <Menu.Item key="backup" icon={<FontAwesomeIcon icon={faDatabase} />}>
        Backup
      </Menu.Item>
    </Menu>
  );
};

export default HomeMenu;
