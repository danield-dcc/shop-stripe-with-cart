import { styled } from "@stitches/react";

export const SuccessContainerSingleProduct = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const SuccessContainerManyProducts = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,
});

export const SuccessContainerManyProductsContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ImageContainerManyProducts = styled("div", {
  width: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 85,
  marginTop: "4rem",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "-1px 3px 10px rgb(0 0 0 / 0.6)",

  marginLeft: -50,

  img: {
    objectFit: "cover",
  },
});

export const FooterItems = styled("div", {
  display: "flex",
  margin: "auto",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },
  span: {
    marginTop: "1.5rem",
    marginBottom: "2rem",

    p: {
      fontSize: "$xl",
      textAlign: 'center',
    },
  },
  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
