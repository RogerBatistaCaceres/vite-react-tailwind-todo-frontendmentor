if (
    // window.matchMedia: verifica la configuración del Sistema Operativo
    localStorage.theme ==="dark" || 
    (!("theme" in localStorage) && 
    window.matchMedia("(prefers-color-scheme: dark)").matches)
){
 document.documentElement.classList.add("dark");
 localStorage.theme = "dark";
}else{
    document.documentElement.classList.remove("dark"); 
    localStorage.theme = "light";
}
