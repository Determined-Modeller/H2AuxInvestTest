import { extendTheme } from '@mui/joy/styles';
import { inputClasses } from '@mui/joy/Input';

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: '#19B394',
                    100: '#19B394',
                    200: '#19B394',
                    300: '#19B394',
                    400: '#19B394',
                    500: '#19B394',
                    600: '#19B394',
                    700: '#19B394',
                    800: '#19B394',
                    900: '#19B394',
                    solidBg: 'var(--joy-palette-primary-600)',
                    solidHoverBg: 'var(--joy-palette-primary-500)',
                    solidActiveBg: 'var(--joy-palette-primary-400)',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    50: '#19B394',
                    100: '#19B394',
                    200: '#19B394',
                    300: '#19B394',
                    400: '#19B394',
                    500: '#19B394',
                    600: '#19B394',
                    700: '#19B394',
                    800: '#19B394',
                    900: '#19B394',
                    solidBg: 'var(--joy-palette-primary-700)',
                    solidColor: 'var(--joy-palette-common-black)',
                    solidHoverBg: 'var(--joy-palette-primary-600)',
                    solidActiveBg: 'var(--joy-palette-primary-400)',
                },
                background: {
                    body: 'var(--joy-palette-common-black)',
                    surface: 'var(--joy-palette-neutral-900)',
                },
            },
        },
    },
    fontFamily: {
        display: "'Inter', var(--joy-fontFamily-fallback)",
        body: "'Inter', var(--joy-fontFamily-fallback)",
    },
    shadow: {
        xl: "var(--joy-shadowRing, 0 0 #000),0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 0px 200px 10px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))",
    },
    components: {
        JoyInput: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState.variant === 'outlined' && {
                        [`&:not(.${inputClasses.focused}):hover::before`]: {
                            boxShadow: `inset 0 0 0 2px ${theme.vars.palette?.[ownerState.color!]?.outlinedBorder
                                }`,
                        },
                    }),
                }),
                input: {
                    caretColor: 'var(--Input-focusedHighlight)',
                },
            },
        },
    },
});

export default theme;