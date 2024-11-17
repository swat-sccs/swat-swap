// Usable social media sharing component that shows share options for
// Instagram, Twitter, Links, etc

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

export const SocialMediaSharing = () => {
  return (
    <div className="w-full bg-white shadow-sm p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Share this page
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
          <Facebook className="w-6 h-6 text-blue-600" />
          <span className="text-sm mt-2 text-blue-600">Facebook</span>
        </button>

        <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-sky-100 hover:bg-sky-200 transition-colors">
          <Twitter className="w-6 h-6 text-sky-600" />
          <span className="text-sm mt-2 text-sky-600">Twitter</span>
        </button>

        <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
          <Linkedin className="w-6 h-6 text-blue-600" />
          <span className="text-sm mt-2 text-blue-600">LinkedIn</span>
        </button>

        <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
          <Link2 className="w-6 h-6 text-gray-600" />
          <span className="text-sm mt-2 text-gray-600">Copy Link</span>
        </button>
      </div>
    </div>
  );
};
