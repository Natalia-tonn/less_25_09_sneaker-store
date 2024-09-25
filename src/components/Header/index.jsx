import { NavLink } from "react-router-dom"
import styles from "./styles.module.css"

function Header() {
    return(
<header className={styles.header}>
   <div className={styles.box_left} >
    <h1>Сникер - магазин</h1>
    </div> 
   <div  className={styles.box_right} >
    <NavLink to= "/"  
     className={styles.navLink}
    style={({ isActive}) => ({
        color: isActive ? "#FFFFFF" : "#FFFFFF80"
    })}
    >Главная</NavLink>
    <NavLink to="/cart" 
      className={styles.navLink}
       style={({ isActive}) => ({
        color: isActive ? "#FFFFFF" : "#FFFFFF80"
    })}
    >Корзина</NavLink>
    <NavLink to="/contacts"
       className={styles.navLink}
       style={({ isActive}) => ({
        color: isActive ? "#FFFFFF" : "#FFFFFF80"
    })}
    >Контакты</NavLink>

   </div>

</header>
    )
}
export default Header