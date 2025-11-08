import CopyUrlLink from "@/components/Sidebar/CopyUrlLink";
import ExternalLink from "@/components/Sidebar/ExternalLink";
import {
  PostSidebarCard,
  PostSidebarTitle,
} from "@/components/Sidebar/PostSidebar";

import { SITE_DOMAIN } from "@/utils/constants";
import { FaEnvelope, FaFacebookF, FaRedditAlien } from "react-icons/fa";
import {
  RiTelegram2Fill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";

function PostShare({ id, title: rawTitle }: { id: number; title: string }) {
  // Prepare some data
  const url = encodeURIComponent(`${SITE_DOMAIN}/posts/${id}`);
  const title = encodeURIComponent(rawTitle);

  // Returned JSX
  return (
    <PostSidebarCard>
      <PostSidebarTitle title="Share post" />
      <p>
        Liked this post? Feel free to share it with your friends using any of
        the options below:
      </p>
      <div className="flex items-center gap-x-4.5 gap-y-2 xs:gap-x-5 mt-2 md:mt-3 flex-wrap pb-1 md:pb-0">
        <ExternalLink
          url={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        >
          <FaFacebookF className="share-post-icon hover:fill-[#1877F2]" />
        </ExternalLink>
        <ExternalLink
          url={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
        >
          <RiTwitterXFill className="share-post-icon hover:fill-[#1DA1F2]" />
        </ExternalLink>

        <ExternalLink
          url={`https://www.reddit.com/submit?url=${url}&title=${title}`}
        >
          <FaRedditAlien className="share-post-icon hover:fill-[#FF4500]" />
        </ExternalLink>

        <ExternalLink url={`https://t.me/share/url?url=${url}&text=${title}`}>
          <RiTelegram2Fill className="share-post-icon hover:fill-[#0088CC]" />
        </ExternalLink>

        <ExternalLink
          url={`https://api.whatsapp.com/send?text=${title}%20${url}`}
        >
          <RiWhatsappFill className="share-post-icon hover:fill-[#25D366]" />
        </ExternalLink>
        <a href={`mailto:?subject=${title}&body=Check this out: ${url}`}>
          <FaEnvelope className="share-post-icon hover:fill-[#D44638]" />
        </a>
        <CopyUrlLink url={url} />
      </div>
    </PostSidebarCard>
  );
}

export default PostShare;
