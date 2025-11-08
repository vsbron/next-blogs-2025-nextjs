"use client";
import { FaCopy } from "react-icons/fa";
import { toast } from "sonner";

function CopyUrlLink({ url }: { url: string }) {
  // Returned JSX
  return (
    <FaCopy
      className="share-post-icon w-5 h-5 hover:fill-primary"
      onClick={() => {
        navigator.clipboard.writeText(url).catch((err) => console.error(err));
        toast("URL copied to clipboard");
      }}
    />
  );
}

export default CopyUrlLink;
