const themeUi = {
  headerHeight: 60,
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 100, 256, 512],
  fonts: {
    body: "Barlow Semi Condensed, Tahoma, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading:
      "Barlow Semi Condensed, Tahoma, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
  fontSizes: [13, 14, 16, 20, 21, 24, 26, 32, 36, 40],
  fontWeights: {
    extralight: 200,
    light: 300,
    normal: 400,
    bold: 500,
    boldest: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.125,
  },
  colors: {
    textGray: "#353535",
    termsPrivacy: "#B3B3B3",
    blue180: "#1F3D60",
    white: "#FFFFFF",
    black: "#000000",
    red: "#E0092D",
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontStyle: "normal",
      letterSpacing: "0.01em",
      color: "black",
    },
    textComponent: {
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "24px",
      letterSpacing: "1%",
      color: "textGray",
    },
    primaryNav: {
      fontWeight: "normal",
      fontSize: 1,
      lineHeight: "16px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    footerNav: {
      fontWeight: "bold",
      fontSize: 0,
      lineHeight: "13px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    jobTitle: {
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "18px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    heroHeading: {
      fontWeight: 400,
      fontSize: ["30px", "32px", "36px"],
      fontStyle: "normal",
      letterSpacing: "0.01em",
      lineHeight: "40px",
    },
    quoteText: {
      fontSize: ["28px", "36px", "40px"],
      fontWeight: "light",
      letterSpacing: "1%",
      lineHeight: "60px",
      color: "blue180",
    },
    body: {
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "24px",
      letterSpacing: "0.01em",
    },
  },
  buttons: {
    // primary: {
    //   "&:hover": {},
    //   "&:focus": {},
    //   "&:disabled": {},
    // },
    // navButton: {},
    // icon: {},
    // entryfield: {
    //   field: {
    //     "&:placeholder": {},
    //     "&:hover": {},
    //     ":focus": {},
    //     "&:disabled": {},
    //   },
    // },
  },
  forms: {},
  links: {
    // hyperlink: {
    //   "&:hover": {},
    //   "&:focus": {},
    //   "&:disabled": {},
    // },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontStyle: "normal",
      color: "black",
    },
    h1: {
      variant: "text.heading",
      fontWeight: "normal",
      fontSize: 8,
      lineHeight: "40px",
    },
    h2: {
      variant: "text.heading",
      fontWeight: "light",
      fontSize: 9,
      lineHeight: "60px",
    },
    h3: {
      variant: "text.heading",
      fontWeight: "light",
      fontSize: 7,
      lineHeight: "42px",
    },
    h4: {
      variant: "text.heading",
      fontWeight: "normal",
      fontSize: 3,
      lineHeight: "26px",
    },
    h4name: {
      variant: "text.heading",
      fontWeight: "normal",
      fontSize: 6,
      lineHeight: "22px",
    },
    h5: {},
    h6: {},
    p: {},
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
