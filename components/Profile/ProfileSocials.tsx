import { SOCIALS } from "@/utils/constants";
import { User } from "@/utils/types";

function ProfileSocials({ user }: { user: User }) {
  // Returned JSX
  return (
    <div className="flex items-center gap-x-4 mt-2 mb-1">
      {SOCIALS.map(({ key, prefix }) => {
        // Prepare value
        const value = user[key] as string;

        // Return link object
        return (
          <a
            key={key}
            href={value ? (prefix || "") + value : ""}
            target="_blank"
            rel="noreferrer"
            className={value ? "" : "opacity-50 pointer-events-none"}
          >
            <svg className="fill-primary hover:fill-primary-light transition-all w-5 h-5">
              <use href={`/set-socials.svg#${key}`}></use>
            </svg>
          </a>
        );
      })}
    </div>
  );
}

export default ProfileSocials;
