import { RFValue } from "react-native-responsive-fontsize";

export const defaultTheme = {
  colors: {
    white: '#FFFFFF',

    'gray-200': '#d9d9d9',
    'gray-300': '#808080',
    'gray-400': '#333333',
    'gray-500': '#262626',

    primary: '#6C63FF',
    primaryLight: '#DED4F7',
    secondary: '#FF7D3B',
    secondaryLight: '#FFC2A3',
    shape: '#F6F4FD',
    danger: '#E25858',
  },

  fonts: {
    regular: 'Lato_400Regular',
    bold: 'Lato_700Bold'
  },

  metrics: {
    paddingHorizontal: RFValue(24),
    inputHeight: RFValue(52),
  },
}