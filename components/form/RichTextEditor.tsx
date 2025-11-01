/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
import { Control, Controller } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Set the modules and formats
const modules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "link",
];

// The component
function RichTextEditor({ control }: { control: Control<any> }) {
  return (
    <Controller
      name="text"
      control={control}
      render={({ field }) => (
        <div className="w-full">
          <ReactQuill
            theme="snow"
            value={field.value || ""}
            onChange={field.onChange}
            modules={modules}
            formats={formats}
          />
        </div>
      )}
    />
  );
}
export default RichTextEditor;
