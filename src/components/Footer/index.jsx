import styles from "./styles.module.css";
import facebookLogo from "../../assets/icons/facebook_outlined.svg"

function Footer() {
  return (

    <footer className={styles.footer}>

    <div className={styles.box_top}>
             <div className={styles.box_top_left}>
               <p>Контакты</p>
               <p>8 800 000 00 00<br/>
                     emailexample@email.com
                </p>
             </div>
          <div className={styles.box_top_right}>

<a href="link.domain">
    <img src={facebookLogo} alt="facebookLogo"/>

</a>
             </div>
           </div>



       </footer>
        )
         }
export default Footer;

