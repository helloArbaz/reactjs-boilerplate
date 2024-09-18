import {  createTheme, responsiveFontSizes } from "@mui/material";



declare module '@mui/material/styles/createPalette' {
    interface Palette {
        backgroundLight?: Palette['primary'];
    }
    interface PaletteOptions {
        backgroundLight?: PaletteOptions['primary'];
    }

    interface Palette {
        backgroundDark?: Palette['primary'];
    }
    interface PaletteOptions {
        backgroundDark?: PaletteOptions['primary'];
    }

    interface Palette {
        caput?: Palette['primary'];
    }
    interface PaletteOptions {
        caput?: PaletteOptions['primary'];
    }
}


const AppThemeConfig: any = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                focusRipple: false
            },
        },
        MuiButtonGroup: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true
            },
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
                focusRipple: false
            },
        },
        MuiTabs: {
            defaultProps: {},
        }
    },

    palette: {
        primary: {
            main: '#004b4c',
        },
        secondary: {
            main: "#35ac8c",
        },
        text: {
            primary: "#262626",
            disabled: "#bdbdbd",
            secondary: "#000000",
        },
        backgroundLight: {
            main: "#fdf0e3"
        },
        backgroundDark: {
            main: "#fbbe68"
        },
        caput: {
            main: "#462824"
        },
    },
    typography: {
        fontFamily: "Lato",
        button: { textTransform: 'none' },
    },
    spacing: 4,
});


export default responsiveFontSizes(AppThemeConfig)



