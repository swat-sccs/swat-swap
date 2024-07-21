import { CREATE_LISTING } from "@/constants/routes";
import { Button } from "@/components";
import Link from "next/link";

const ZeroListingsNotice = () => {
  return (
    <div className="flex flex-col h-full gap-4 items-center">
      <p className="m-0">You currently have zero listings created.</p>
      <Link href={CREATE_LISTING}>
        <Button variant="contained" className="">
          Create Listing
        </Button>
      </Link>
    </div>
  );
};

export default ZeroListingsNotice;
