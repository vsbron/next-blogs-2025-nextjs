"use client";
import { PostSidebarCard, PostSidebarTitle } from "@/components/PostSidebar";
import { SITE_DOMAIN } from "@/utils/constants";

import { FaCopy, FaEnvelope, FaFacebookF, FaRedditAlien } from "react-icons/fa";
import {
  RiTelegram2Fill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { toast } from "sonner";

function PostShare({ id, title: rawTitle }: { id: number; title: string }) {
  // Prepare some data
  const url = encodeURIComponent(`${SITE_DOMAIN}/posts/${id}`);
  const title = encodeURIComponent(rawTitle);
  const iconsClass =
    "w-6 h-6 fill-foreground/80 cursor-pointer transition-colors duration-200";

  // Returned JSX
  return (
    <PostSidebarCard>
      <PostSidebarTitle title="Share post" />
      <p>
        Liked this post? Feel free to share it with your friends using any of
        the options below:
      </p>
      <div className="flex items-center gap-x-5 mt-3">
        <ExternalLink
          url={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        >
          <FaFacebookF className={`${iconsClass} hover:fill-[#1877F2]`} />
        </ExternalLink>
        <ExternalLink
          url={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
        >
          <RiTwitterXFill className={`${iconsClass} hover:fill-[#1DA1F2]`} />
        </ExternalLink>

        <ExternalLink
          url={`https://www.reddit.com/submit?url=${url}&title=${title}`}
        >
          <FaRedditAlien className={`${iconsClass} hover:fill-[#FF4500]`} />
        </ExternalLink>

        <ExternalLink url={`https://t.me/share/url?url=${url}&text=${title}`}>
          <RiTelegram2Fill className={`${iconsClass} hover:fill-[#0088CC]`} />
        </ExternalLink>

        <ExternalLink
          url={`https://api.whatsapp.com/send?text=${title}%20${url}`}
        >
          <RiWhatsappFill className={`${iconsClass} hover:fill-[#25D366]`} />
        </ExternalLink>
        <a href={`mailto:?subject=${title}&body=Check this out: ${url}`}>
          <FaEnvelope className={`${iconsClass} hover:fill-[#D44638]`} />
        </a>
        {/* <FaCopy
          className={`${iconsClass}`}
          onClick={() => {
            navigator.clipboard
              .writeText(url)
              .catch((err) => console.error(err));
            toast("URL copied to clipboard");
          }}
        /> */}
      </div>
    </PostSidebarCard>
  );
}

// Helper component props
type ExternalLinkProps = {
  url: string;
  children: React.ReactNode;
};
// Helper component
function ExternalLink({ url, children }: ExternalLinkProps) {
  // Returned link
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        window.open(
          url,
          "popupWindow",
          "width=500,height=400,scrollbars=yes,resizable=yes"
        );
      }}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default PostShare;
