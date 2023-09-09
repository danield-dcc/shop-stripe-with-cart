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


  a: {
    display: 'flex',
    justifyContent: "space-between",
    "&:hover":{
      cursor: "pointer",
    }
  },


  variants: {
    headerLogoImg: {
      center: {
        justifyContent: "center",
      },
        space: {
          justifyContent: "space-between",
        },
    },
  },

});

export const BagButton = styled("button", {
  width: "3rem",
  height: "3rem",
  background: "$gray800",
  color: "$gray300",
  padding: "0.5rem",
  borderRadius: 6,
  border: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  "&:hover": {
    cursor: "pointer",
  },

  div: {
    position: "absolute",

    height: "1.5rem",
    width: "1.5rem",
    borderRadius: 16,
    color: "$white",
    backgroundColor: "$green500",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    left: 36,
    top: -5,
  },
});

export const DrawerContainer = styled("div", {
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  padding: "3rem",

  alignItems: "stretch",
  margin: "0 auto",
});

export const DrawerProduct = styled("div", {
  display: "flex",
  marginTop: "2rem",

  div: {
    display: "flex",
    flexDirection: "column",

    span: {
      marginTop: "2,5rem",
      fontSize: "$md",
      lineHeight: 1.6,
      color: "$gray300",
    },

    p: {
      marginTop: "2,5rem",
      fontSize: "$md",
      lineHeight: 1.6,
      color: "$gray300",
      fontWeight: "bold",
    },

    button: {
      marginTop: "2,5rem",
      color: "$green500",
      border: "none",
      background: "transparent",
      fontSize: "1rem",
      fontWeight: "bold",
      marginRight: "auto",

      "&:hover": {
        color: "$green300",
        cursor: "pointer",
      },
    },
  },
});

export const DrawerImage = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "5.924rem",
  height: "5.924rem",
  marginRight: "1.43rem",
});

export const FooterItems = styled("footer", {
  marginTop: "auto",

  display: "flex",
  flexDirection: "column",

  div: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0",
    fontSize: "1rem",
  },

  button: {
    marginTop: "3.56rem",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});

export const FooterItemsValue = styled("div", {
  p: {
    fontSize: "$md",
    fontWeight: "bold",
  },
  span: {
    fontSize: "$lg",
    fontWeight: "bold",
  },
});
