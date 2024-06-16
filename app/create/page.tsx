import CreateListingForm from "@/components/CreateListingForm";
import { getSessionUserId } from "../utils/hooks";

export default async function Create() {
  const userId = await getSessionUserId();
  if (!userId) {
    return <div>Not logged in</div>;
  }

  return <CreateListingForm userId={userId} />;
}
