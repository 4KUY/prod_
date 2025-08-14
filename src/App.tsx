import { Route, Routes } from "react-router-dom";
import './index.scss'
import { Suspense } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
const App = () => {
  return (
    <div className="app">
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>

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
