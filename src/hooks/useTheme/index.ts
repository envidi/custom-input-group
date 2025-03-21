import { createTheme } from '@mui/material';
import { useState, useMemo } from 'react';
import { muiTheme as muiThemeConfig } from '~root/styles/mui.config';
interface LabelConfig {
  clear: boolean;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  color: string;
}
interface TextConfig {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  paddingX: string;
  paddingY: string;
  color: string;
  placeholderOpacity: string;
}
interface BorderConfig {
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  hoverColor: string;
  focusColor: string;
}
interface ContainerCssConfig {
  gapX: number;
  gapY: number;
  rowHeight: number;
  direction?: string;
}
export interface ThemeConfig {
  label: LabelConfig;
  text: TextConfig;
  border: BorderConfig;
  containerCss: ContainerCssConfig;
  name?: string;
}
export const initThemeConfig = {
  label: { clear: true, fontSize: '16', fontWeight: '400', lineHeight: '16', color: '#ccc' },
  text: {
    fontSize: '16',
    fontWeight: '400',
    lineHeight: '16',
    paddingX: '10',
    paddingY: '10',
    color: '#ccc',
    placeholderOpacity: '0.5',
  },
  border: { borderColor: '#ccc', borderRadius: '4', borderWidth: '1', focusColor: '#ccc', hoverColor: '#ccc' },
  containerCss: { gapX: 0, gapY: 8, rowHeight: 43, direction: '' },
};

export const useThemeCustom = () => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(initThemeConfig);
  const muiTheme = useMemo(
    () =>
      createTheme({
        ...muiThemeConfig,
        components: {
          MuiButton: {
            defaultProps: {},
          },

          MuiTypography: {
            styleOverrides: {
              root: {
                '& label': {
                  fontSize: (themeConfig?.label?.fontSize || '16') + 'px',
                  color: themeConfig?.label?.color || '#000',
                  fontWeight: themeConfig?.label?.fontWeight || '400',
                  lineHeight: (themeConfig?.label?.lineHeight || '16') + 'px',
                },
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiInputBase-root': {
                  fontSize: (themeConfig?.text?.fontSize || '16') + 'px',
                  color: themeConfig?.text?.color || '#ccc',
                  fontWeight: themeConfig?.text?.fontWeight || '400',
                },
                '& .MuiInputBase-root input::placeholder': {
                  opacity: themeConfig.text.placeholderOpacity,
                },
                '& .MuiInputBase-input': {
                  padding: `${themeConfig?.text?.paddingY || '10'}px ${themeConfig?.text?.paddingX || '10'}px`,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: themeConfig?.border?.borderColor || '#ccc',
                    borderWidth: (themeConfig?.border?.borderWidth || '1') + 'px',
                    borderRadius: (themeConfig?.border?.borderRadius || '4') + 'px',
                  },
                  '&:hover fieldset': {
                    borderColor: themeConfig?.border?.hoverColor || '#ccc',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: themeConfig?.border?.focusColor || '#ccc',
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
      }),
    [themeConfig],
  );
  return {
    muiTheme,
    setThemeConfig,
    themeConfig,
  };
};
