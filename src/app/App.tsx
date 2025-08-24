import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classnames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";


const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app' ,{}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <AppRouter/>
    </div>
  );
};

export default App;
