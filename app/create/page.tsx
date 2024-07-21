import CreateListingForm from "./components/CreateListingForm";
import { getSessionUserId } from "../../utils/hooks";

export default async function Create() {
  const userId = await getSessionUserId();
  if (!userId) {
    return <div>Not logged in</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-7/12 p-8">
        <CreateListingForm userId={userId} />
      </div>
    </div>
  );
}
