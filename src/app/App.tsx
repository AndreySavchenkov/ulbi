import './styles/index.scss'
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/NavBar';

const App = () => {
  const {theme,toggleTheme} = useTheme();

  return(
  <div className={classNames('app', {}, [theme])}>
    <button onClick={toggleTheme}>TOGGLE</button>
    <Navbar />
    <AppRouter />
  </div>
  )
}

export default App;