import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavBar.css"
class NavBar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
render(){
    return(
    <nav className="NavBarItems">
<h1 className="logo">Gold24</h1> 
<div className="menu-icons" onClick={this.handleClick}>
    <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
</div>
   <ul className={this.state.clicked? "nav-menu active":"nav-menu "}> 
    {MenuData.map((item,index)=>{
        return(
            <li key={index}>
                <a href={item.utl} className={item.cName}>
                    <i className={item.icon}></i>{item.tiltle}

                </a>
            </li>
        ) }
    
    )}
   </ul>
    </nav>
)}

}
export default NavBar;