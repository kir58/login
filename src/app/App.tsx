import { HashRouter as Router } from 'react-router-dom';
import { theme } from './theme.ts';
import { Routing } from './Routing';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routing />
      </Router>
    </ThemeProvider>
  );
}

export default App;
