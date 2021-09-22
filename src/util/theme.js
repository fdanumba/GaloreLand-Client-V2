export default {
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },
  spreadIt: {
    form: {
      textAlign: "center",
    },
    image: {
      margin: "20px auto 20px auto  ",
    },
    pageTitle: {
      margin: "10x auto 10x auto  ",
    },
    textField: {
      margin: "10x auto 10x auto  ",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 15,
    },
    progress: {
      position: "absolute",
    },
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        paddingLeft: '15%',
        '& button': {
          position: 'ansolute',
          top: '80%',
          left: '0%'
        }
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: "#00bcd4"
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    buttons: {
      textAlign: 'center',
      '& a': {
         margin: '20px 10px'
      }
    }    

  },
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
  visibleSeparator: {
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    marginBottom: 20
  },
  paper: {
    padding: 20
  },

 
  // profile: {
  //   '& .image-wrapper': {
  //     textAlign: 'center',
  //     position: 'relative',

  //   },
  //   '& .profile-image': {
  //     width: 200,
  //     height: 200,
  //     objectFit: 'cover',
  //     maxWidth: '100%',
  //     borderRadius: '50%'
  //   },
  //   '& .profile-details': {
  //     textAlign: 'center',
  //     '& span, svg': {
  //       verticalAlign: 'middle'
  //     },
  //     '& a': {
  //       color: theme.palette.primary.main
  //     }
  //   },
  //   '& hr': {
  //     border: 'none',
  //     margin: '0 0 10px 0'
  //   }
  // }  
};
