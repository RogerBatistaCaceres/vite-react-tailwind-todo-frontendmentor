import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

// Leo el valor de localStorage
const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

  // Si quiero cambiar una referencia dentro del DOM de React
  // tengo que hacerlo usando useRef..
  const refHeader = useRef(null);

  // UseEffect es un observable para estar pendiende del cambio del estado
  // de algún elemento seleccionado..
  // cada vez que cambie el darkMode se ejecuta el useEffect
  useEffect(() => {
    //console.log("darkMode");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      refHeader.current.classList.add("bg-gray-900");
      localStorage.setItem("theme", "dark");
      // localStorage.theme = "dark";
    } else {
      // document.documentElement.classlist.remove("dark");
      refHeader.current.classList.remove("bg-gray-900");
      localStorage.setItem("theme", "light");
      // localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8" ref={refHeader}>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
          todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
