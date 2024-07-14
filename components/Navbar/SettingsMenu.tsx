"use client";
import { Menu, MenuItem } from "@/components";
import React, { useCallback } from "react";
import { PROFILE, SIGN_OUT } from "@/constants/routes";
import { useSession } from "next-auth/react";

const SettingsMenu = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <>
      <button
        className="font-bold text-lg"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {session?.user.name}
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href={PROFILE}>Profile</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href={SIGN_OUT}>Log Out</a>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SettingsMenu;
