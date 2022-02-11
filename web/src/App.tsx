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
      <AuthProvider>
        <LanguageProvider>
          <CodeProvider>
            <ThemeProvider>
              <ResultProvider>
                <RoutesContainer />
              </ResultProvider>
            </ThemeProvider>
          </CodeProvider>
        </LanguageProvider>
      </AuthProvider>
    </ErrorProvider>
  );
}

export default App;
