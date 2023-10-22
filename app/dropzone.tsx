"use client";

type Props = {
  name: string;
};

export default function Dropzone(props: Props) {
  const { name } = props;
  return (
    <div
      style={{ border: "1px solid red", padding: "5px" }}
      onDragOver={(e) => {
        e.preventDefault();
        e.currentTarget.style.backgroundColor = "red";
        e.dataTransfer.dropEffect = "move";
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.currentTarget.style.backgroundColor = "";
      }}
      onDrop={(e) => {
        const id = e.dataTransfer.getData("text");
        e.currentTarget.appendChild(document.getElementById(id)!);
      }}
    >
      <div style={{ border: "1px solid blue" }}>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
