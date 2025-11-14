import { Calendar1Icon, EyeIcon, ThumbsUpIcon } from "lucide-react";

// Props type
type PostPreviewStatsProps = {
  views: number;
  likes: number;
  date: string;
  reverse?: boolean;
};

// The component
function PostPreviewStats({
  views,
  likes,
  date,
  reverse = false,
}: PostPreviewStatsProps) {
  // Returned JSX
  return (
    <div
      className={`flex items-center gap-3 lg:gap-4 text-foreground/60 text-sm font-lato font-bold tracking-normal ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex items-center gap-x-1.5">
        <Calendar1Icon className="w-4 h-4 stroke-primary/80" />
        {date}
      </div>
      <div className="flex items-center gap-x-1">
        <ThumbsUpIcon className="w-4 h-4 stroke-primary/80" />
        {likes}
      </div>
      <div className="flex items-center gap-x-1">
        <EyeIcon className="w-4 h-4 stroke-primary/80" />
        {views}
      </div>
    </div>
  );
}

export default PostPreviewStats;
