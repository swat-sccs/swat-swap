"use client";
import { IconButton, Menu, MenuItem } from "@/components";
import React, { useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CREATE_LISTING,
  MY_LISTINGS,
  PROFILE,
  SAVED_LISTINGS,
  SIGN_OUT,
} from "@/constants/routes";
import { useSession } from "next-auth/react";

const MobileMenu = () => {
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
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem disabled>{session?.user.name}</MenuItem>
        <MenuItem onClick={handleClose}>
          <a href={PROFILE}>Profile</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href={MY_LISTINGS}>My Listings</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href={SAVED_LISTINGS}>Saved Listings</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href={CREATE_LISTING}>Create Listing</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href={SIGN_OUT}>Log Out</a>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
