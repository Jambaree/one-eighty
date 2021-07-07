const themeUi = {
  headerHeight: "60px",
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
    textLightGray: "#7C7C7C",
    termsPrivacy: "#B3B3B3",
    blue180: "#1F3D60",
    white: "#FFFFFF",
    black: "#000000",
    red: "#E0092D",
    darkBlue: "#233B48",
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontStyle: "normal",
      letterSpacing: "0.01em",
      color: "black",
    },
    paragraph: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "24px",
      letterSpacing: "0.01em",
      color: "textGray",
      fontStyle: "normal",
    },
    primaryNav: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: 1,
      lineHeight: "16px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    quoteSliderOptions: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: ["10px", 1],
      lineHeight: "16px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    footerNav: {
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: 0,
      lineHeight: "13px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    jobTitle: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "18px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    heroHeading: {
      variant: "text.heading",
      fontWeight: "normal",
      fontSize: ["30px", 7, 8],
      letterSpacing: "0.01em",
      lineHeight: "40px",
    },
    body: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "24px",
      letterSpacing: "0.01em",
    },
    companyName: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "18px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
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
    hyperlink: {
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: 2,
      lineHeight: "24px",
      letterSpacing: "0.01em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "black",

      "&:hover": {
        textDecoration: "underline",
      },
      "&:focus": {
        textDecoration: "underline",
      },
      "&:disabled": {},
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontStyle: "normal",
      color: "black",
      h1: {
        variant: "text.heading",
        fontWeight: "normal",
        fontSize: 8,
        lineHeight: "40px",
        color: "blue180",
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
      h5: {
        variant: "text.heading",
        fontWeight: "normal",
        fontSize: 3,
        lineHeight: "26px",
        color: "textGray",
      },
      h6: {
        variant: "text.heading",
        fontWeight: "bold",
        fontSize: 4,
        lineHeight: "22px",
        color: "blue180",
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
    h4name: {
      variant: "text.heading",
      fontWeight: "normal",
      fontSize: 6,
      lineHeight: "22px",
    },
  },
}

export default themeUi
