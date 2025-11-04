import {
  FaEnvelope,
  FaFacebookF,
  FaRedditAlien,
  FaInstagram,
} from "react-icons/fa";
import {
  RiTelegram2Fill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";

import { SITE_DOMAIN } from "@/utils/constants";
import { PostSidebarCard, PostSidebarTitle } from "@/components/PostSidebar";

function PostShare({ id }: { id: number }) {
  const url = `${SITE_DOMAIN}/posts/"${id}`;
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
        <FaFacebookF className={`${iconsClass} hover:fill-[#1877F2]`} />
        <RiTwitterXFill className={`${iconsClass} hover:fill-[#1DA1F2]`} />
        <FaInstagram className={`${iconsClass} hover:fill-[#E1306C]`} />
        <FaRedditAlien className={`${iconsClass} hover:fill-[#FF4500]`} />
        <RiTelegram2Fill className={`${iconsClass} hover:fill-[#0088CC]`} />
        <RiWhatsappFill className={`${iconsClass} hover:fill-[#25D366]`} />
        <FaEnvelope className={`${iconsClass} hover:fill-[#D44638]`} />
      </div>
    </PostSidebarCard>
  );
}

export default PostShare;
