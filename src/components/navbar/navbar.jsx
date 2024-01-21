import Link from "next/link";
import Links from "./links/links";
import style from "./navbar.module.css"
const NavBar = () => {
  return <div className={style.container}>

    <div className={style.logo}>Logo</div>
    <div>
       <Links/>

    </div>

  </div>;
};

export default NavBar;
