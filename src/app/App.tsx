import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Suspense,  } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classnames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/router";


const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app' ,{}, [theme])}>
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <AppRouter/>
    </div>
  );
};

export default App;
