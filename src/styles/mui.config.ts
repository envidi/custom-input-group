import { ThemeOptions, createTheme } from '@mui/material';
import colors from 'tailwindcss/colors';

const muiThemeConfigs: ThemeOptions = {
  typography: {
    fontFamily: ['Work Sans', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: colors.red[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {},
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: colors.gray[300],
            },
            '&:hover fieldset': {
              borderColor: colors.gray[500],
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.red[500],
            },
          },
        },
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            // Make the margin left to zero for better displaying the text error
            // The default margin-left of MuiFormHelperText-root is 14px and it takes a lot of space and do not align with the above input
            marginLeft: 0,
          },
        },
      },
    },
  },
};

export const muiTheme = createTheme(muiThemeConfigs);
