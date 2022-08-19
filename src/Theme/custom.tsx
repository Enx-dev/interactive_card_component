import { Global } from "@mantine/core";
export function ResetBody() {
  return (
    <Global
      styles={(theme) => ({
        "*": {
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          fontFamily: "'Space Grotesk', sans-serif !important",
        },
        ":root": {
          fontSize: "18px",
        },
        body: {
          minHeight: "100vh",
          overflow: "auto",
        },
      })}
    />
  );
}
