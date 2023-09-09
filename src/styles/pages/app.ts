import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",

  div: {
    width: "3rem",
    height: "3rem",
    background: "$gray800",
    color: "$gray300",
    padding: "0.5rem",
    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
