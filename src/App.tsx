import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Suspense, useContext, useState } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/'} element={<AboutPageAsync />} />
          <Route path={'/about'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
