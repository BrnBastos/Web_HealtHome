import NavHeader from "../navHeader/navHeader";

function Header(){
    return(
        <header>
            <p className="tituloHeader">healt<span style={{color:'red'}}>Home</span></p>
            <NavHeader/>
        </header>
    );
}

export default Header