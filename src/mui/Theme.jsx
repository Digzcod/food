import { createTheme, ThemeProvider } from '@mui/material/styles';

export const lightModeTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#e91e63' },
    secondary: { main: '#ed4b82' },
    success: { main: '#33eaff', secondary: "#0f9d58" },
    info: { main: '#00e5ff' },
    inherit: {main: "#BAB9B9"},
    text: {main: "#fcfcfc"},

  },

});

// export const darkModeTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: { main: '#e91e63' },
//     secondary: { main: '#ed4b82' },
//     success: { main: '#33eaff' },
//     info: { main: '#00e5ff' },
//   },
// });




export const FoodTheme = ({children}) => {
    return (
        <ThemeProvider theme={lightModeTheme}>
            {children}
        </ThemeProvider>
    )
}