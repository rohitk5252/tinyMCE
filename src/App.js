import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

const students = [{Interviewee: "Alice", Location: "Ludhiana", name: "Gim"}, {Interviewee: "Mini", Location: "Jalandhar", name: "Gurji"},{Interviewee: "Nagopal", Location: "Phagwara", name: "Vivek"}];

// function handleSendEmail() {
//   let content = editorRef.current.getContent();
//   students.forEach((student) => {
//      content.replace(/`\${Interviewee}`/g, student.Interviewee);
//      content.replace(/`\${Location}`/g, student.Location);
//     const newContent = content.replace(/`\${name}`/g, student.name);
//     // editorRef.current.setContent(newContent);
//     console.log(newContent);
//     // Send email with newContent here
//   });
// }
const names = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Jones" },
  { firstName: "Charlie", lastName: "Lee" },
  { firstName: "David", lastName: "Wang" },
];

function handleSendEmail() {
  let content = editorRef.current.getContent();
  names.forEach((name) => {
    let newContent = content.replace(
      /\$\{firstName\}|\$\{lastName\}/g,
      function (match) {
        switch (match) {
          case "${firstName}":
            return name.firstName;
          case "${lastName}":
            return name.lastName;
          default:
            return match;
        }
      }
    );
    console.log(newContent);

    // editorRef.current.setContent(newContent);
    // Send email with newContent here
  });
}
  return (
    <>
      <Editor
        apiKey="pgl2l1lqwleqx1624hgdef8wwkj0s6vkuqwfr8ukmgdbx8vy"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Dear `${firstName}`,
        <br>
        Congrats!
        <br>
        Best regards,
        `${lastName}` </p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        ref={editorRef}
      />
      <button onClick={handleSendEmail}>Log editor content</button>
    </>
  );
}
