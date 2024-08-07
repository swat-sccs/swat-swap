import {
  CREATE_LISTING,
  MY_LISTINGS,
  SAVED_LISTINGS,
} from "@/constants/routes";
import SettingsMenu from "./SettingsMenu";
import MobileMenu from "./MobileMenu";
import { getSessionUser } from "@/utils/hooks";

const NavigationOptions = {
  Create: CREATE_LISTING,
  "Saved Listings": SAVED_LISTINGS,
  "My Listings": MY_LISTINGS,
};

interface NavBarProps {}

const NavBar = async ({}: NavBarProps) => {
  const user = await getSessionUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <a href="/">
        <p className="m-0 font-bold text-2xl transition-colors duration-200 ease-in-out text-black hover:text-accent">
          SwatSwap
        </p>
      </a>

      <div className="flex space-x-16">
        <div className="hidden md:flex space-x-6">
          {Object.entries(NavigationOptions).map(([page, link]) => (
            <a key={page} href={link}>
              <p className="font-semibold text-lg text-black transition-colors duration-200 ease-in-out hover:text-accent">
                {page}
              </p>
            </a>
          ))}
        </div>

        {/* desktop settings menu */}
        <div className="hidden md:block">
          <SettingsMenu userName={user.name ?? ""} />
        </div>

        {/* mobile only menu*/}
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
