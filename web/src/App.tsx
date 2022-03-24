import './App.css';
import './themes';
import { AuthProvider } from './contexts/authContext';
import { CodeProvider } from './contexts/codeContext';
import { ErrorProvider } from './contexts/errorContext';
import { LanguageProvider } from './contexts/languageContext';
import { ResultProvider } from './contexts/resultContext';
import { ThemeProvider } from './contexts/themeContext';
import RoutesContainer from './routes';

function App() {
  return (
    <ErrorProvider>
      <LanguageProvider>
        <CodeProvider>
          <AuthProvider>
            <ThemeProvider>
              <ResultProvider>
                <RoutesContainer />
              </ResultProvider>
            </ThemeProvider>
          </AuthProvider>
        </CodeProvider>
      </LanguageProvider>
    </ErrorProvider>
  );
}

export default App;
