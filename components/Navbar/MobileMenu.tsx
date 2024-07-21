"use client";
import { Menu } from "@/components";
import {
  CREATE_LISTING,
  MY_LISTINGS,
  PROFILE,
  SAVED_LISTINGS,
  SIGN_OUT,
} from "@/constants/routes";
import { useSession } from "next-auth/react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

const MobileMenu = () => {
  const { data: session } = useSession();

  return (
    <Menu>
      <Menu.Target>
        <IconMenu2 />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{session?.user.name}</Menu.Label>

        <Menu.Item>
          <Link href={PROFILE}>Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={MY_LISTINGS}>My Listings</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={SAVED_LISTINGS}>Saved Listings</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={CREATE_LISTING}>Create Listing</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href={SIGN_OUT}>Log Out</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MobileMenu;
