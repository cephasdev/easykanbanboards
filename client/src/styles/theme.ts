export const theme = {
  colors: {
    background: '#f5f5f5',
    text: '#333333',
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, // e.g. theme.spacing(2) => '0.5rem'
};
