import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

function AddCommentForm() {
  // Returned JSX
  return (
    <Card className="gap-0 py-4 mb-6">
      <CardHeader className="py-0">
        <div className="text-lg">Add a new comment</div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 py-0">
        <Textarea
          id="comment"
          className="resize-none"
          placeholder="Write your comment here..."
        />
        <Button className="self-start" size="sm">
          Add comment
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddCommentForm;
