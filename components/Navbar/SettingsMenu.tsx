"use client";
import { Menu } from "@/components";
import { PROFILE, SIGN_OUT } from "@/constants/routes";

interface SettingsMenuProps {
  userName: string;
}

const SettingsMenu = ({ userName }: SettingsMenuProps) => {
  return (
    <div>
      <Menu id="basic-menu">
        <Menu.Target>
          <button className="font-bold text-lg hover:text-accent">
            {userName}
          </button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <a href={PROFILE}>Profile</a>
          </Menu.Item>
          <Menu.Item>
            <a href={SIGN_OUT}>Log Out</a>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default SettingsMenu;
