import NavHeader from "../navHeader/navHeader";

function Header(){
    return(
        <header>
            <div class="tituloHeader">
                <p>healt<span style={{color:'red'}}>Home</span></p>
            </div>
            <NavHeader/>
        </header>
    );
}

export default Header
