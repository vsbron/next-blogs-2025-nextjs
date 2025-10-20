import { Calendar1Icon, EyeIcon, ThumbsUpIcon } from "lucide-react";

// Props type
type ArticlePreviewStatsProps = {
  views: number;
  likes: number;
  date: string;
};

// The component
function ArticlePreviewStats({ views, likes, date }: ArticlePreviewStatsProps) {
  // Returned JSX
  return (
    <div className="flex items-center gap-3 lg:gap-4 text-foreground/50 text-sm font-semibold">
      <div className="flex items-center gap-x-1">
        <EyeIcon className="w-4 h-4 stroke-primary/80" />
        {views}
      </div>
      <div className="flex items-center gap-x-1">
        <ThumbsUpIcon className="w-4 h-4 stroke-primary/80" />
        {likes}
      </div>
      <div className="flex items-center gap-x-1.5">
        <Calendar1Icon className="w-4 h-4 stroke-primary/80" />
        {date}
      </div>
    </div>
  );
}

export default ArticlePreviewStats;
