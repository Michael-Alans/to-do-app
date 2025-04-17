export default function Header(prop) {


return(
    <header>
        <span>TODO</span>
        <div id="theme-toggler" onClick={prop.toggleTheme} ><img src="/assets/images/icon-moon.svg" alt="" /></div>
    </header>
)


}