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
    kanbanTypes: {
      toDo: {
        header: '#1A92DB',
        background: '#BEE3F6',
        card: '#56B1E5',
      },
      inProgress: {
        header: '#E22959',
        background: '#F5C2C3',
        card: '#E86B79',
      },
      done: {
        header: '#102640',
        background: '#BBC3CB',
        card: '#4B5F74',
      },
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, // e.g. theme.spacing(2) => '0.5rem'
};
