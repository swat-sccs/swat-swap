import { CREATE_LISTING } from "@/constants/routes";
import Link from "next/link";

const ZeroListingsNotice = () => {
  return (
    <div className="flex flex-col">
      <p>You have zero listings</p>
      <p>Click the button below to create your first listing</p>
      <Link href={CREATE_LISTING}>
        <button>Create Listing</button>
      </Link>
    </div>
  );
};

export default ZeroListingsNotice;
