import { handleSubmission } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlog() {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>
          Create a new post to share with the world
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" action={handleSubmission}>
          <div className="flex flex-col gap-2">
            <label>Title</label>
            <Input
              name="title"
              required
              type="text"
              placeholder="Enter the title"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>content</label>
            <Textarea
              name="content"
              required
              placeholder="Write the main content"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Image url</label>
            <Input name="url" required type="url" placeholder="image url" />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
