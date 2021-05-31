const themeUi = {
  headerHeight: 94,
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Poppins, Verdana, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading:
      "Poppins, Verdana, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
  fontSizes: [11, 12, 14, 15, 18, 20, 22, 24, 28, 32, 36, 46, 65],
  fontWeights: {
    light: 300,
    medium: 400,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    charcoalLight: "#3F576E",
    charcoal: "#2D4052",
    charcoalDark: "#22303D",
    almondLight: "#F5F4F1",
    almond: "#DDDAD7",
    almondDark: "#C4BFBB",
    coralLight: "#FF7B59",
    coral: "#E86140",
    coralDark: "#AD4930",
    flaxLight: "#F0E3AC",
    flax: "#E5D282",
    flaxDark: "#AB9D61",
    turquoiseLight: "#A8E6E4",
    turquoise: "#66D7D1",
    turquoiseDark: "#4DA39F",
    plumLight: "#9083B2",
    plum: "#756999",
    plumDark: "#564F78",
    black: "#000000",
    black75: "#414141",
    black50: "#848484",
    black25: "#DBDBDB",
    black10: "#F7F7F7",
    white: "#FFFFFF",
    critical: "#DE0000",
    criticalLight: "#EBC7C4",
    success: "#6BAB33",
    successLight: "#DEF2D6",
    warning: "#FFD905",
    warningLight: "#F7F2D6",
    notice: "#3382E5",
    noticeLight: "#E0F0FF",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "charcoal",
    },
    introduction: {
      fontFamily: "body",
      fontSize: 3,
      fontWeight: "light",
      letterSpacing: "-0.27px",
      color: "black75",
      "@media (max-width: 767px)": {
        letterSpacing: "-0.24px",
        fontSize: "16px",
      },
    },
    paragraph: {
      fontFamily: "body",
      fontSize: 2,
      fontWeight: "light",
      letterSpacing: "-0.23px",
      color: "black75",
    },
    footerHeading1: {
      fontFamily: "body",
      fontSize: 3,
      color: "white",
      fontWeight: "medium",
      letterSpacing: "-0.15px",
    },
    footerHeading2: {
      fontFamily: "body",
      fontSize: 1,
      letterSpacing: "-0.12px",
      color: "black50",
    },
    desktopSubMenuItem: {
      fontSize: 7,
      fontFamily: "body",
      fontWeight: "light",
      letterSpacing: "-0.9px",
      color: "almond",
      "&:hover": {
        color: "coral",
      },
    },
    mobileMenuItem: {
      fontFamily: "body",
      fontSize: 2,
      fontWeight: "medium",
    },
    mobileSubMenuItem: {
      fontFamily: "body",
      fontSize: 2,
      fontWeight: "light",
    },
  },
  buttons: {
    primary: {
      fontFamily: "body",
      fontSize: 4,
      letterSpacing: "-0.18px",
      color: "white",
      bg: "coral",
      borderRadius: 6,
      width: 240,
      height: 48,
      transition: "box-shadow 0.2s",
      "&:hover": {
        bg: "coral",
        boxShadow: "0px 10px 20px #00000029",
      },
      "&:focus": {
        bg: "coralLight",
      },
      "&:disabled": {
        bg: "black25",
      },
    },
    navButton: {
      bg: "transparent",
      color: "#1C1C1C",
      fontSize: 3,
      fontFamily: "body",
      lineHeight: "body",
    },
    icon: {
      color: "coral",
    },
    entryfield: {
      label: {
        fontSize: 0,
        textTranform: "uppercase",
        "&:after": {
          content: "*",
          color: "coral",
          "&:disabled": {
            bg: "black25",
          },
        },
        "&:disabled": {
          bg: "black25",
        },
      },
      field: {
        fontSize: 3,
        lineHeight: "25px",
        p: "13px 69px 2px 13px",
        width: 304,
        height: 37,
        border: "1px solid black25",
        "&:placeholder": {
          color: "black25",
        },
        "&:hover": {
          borderColor: "black50",
        },
        "&:focus": {
          borderColor: "coralLight",
        },
        "&:disabled": {
          border: "black25",
          color: "black10",
        },
      },
    },
  },
  links: {
    hyperlink: {
      color: "coral",
      fontSize: 3,
      fontFamily: "body",
      "@media (max-width: 767px)": {
        fontSize: 2,
      },
      "&:hover": {
        color: "coralDark",
      },
      "&:focus": {
        color: "coralLight",
      },
      "&:disabled": {
        color: "black25",
      },
    },
    clickListMenu: {
      fontFamily: "body",
      fontSize: 10,
      fontWeight: "light",
      letterSpacing: "-0.9px",
      color: "almond",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 11,
      fontWeight: "heading",
      letterSpacing: "-1.63px",
      "@media (max-width: 767px)": {
        fontSize: 10,
        letterSpacing: "-0.9px",
      },
    },
    h2: {
      variant: "text.heading",
      fontSize: 11,
      letterSpacing: "-1.15px",
      "@media (max-width: 767px)": {
        fontSize: 8,
      },
    },
    h3: {
      variant: "text.heading",
      fontSize: 9,
      letterSpacing: "-.64px",
      lineHeight: "46px",
    },
    p: {
      fontSize: 2,
      color: "black75",
      fontWeight: 300,
    },
    h4: {
      variant: "text.heading",
      fontSize: 7,
    },
    h5: {
      variant: "text.heading",
      fontSize: 4,
      letterSpacing: "-0.64px",
      lineHeight: "32px",
    },
    h6: {
      variant: "text.heading",
      fontSize: 4,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}

export default themeUi
