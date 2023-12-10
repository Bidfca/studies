const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
} as const;

dave.name = "bianca";

function layout(settings: {
  align: "left" | "center" | "right";
  padding: number;
}) {
  console.log("Performing layout:", settings);
}

// const example = {
//   align: "left",
//   padding: 0,
// };

const example = {
  align: "left" as const,
  padding: 0,
};

layout(example);
