import { ReactElement } from "react"
import { Link } from 'react-router-dom'
import home from '../assets/imgs/home-solid.svg'

interface Props { display: () => void }

export function SideBar({ display }: Props): ReactElement {

    return <div className="side-bar-continer">
        <Link to={''}><div className="link home-link" onClick={display}><img src={home} className="home-icon" /></div></Link>
        <Link to={'graph-a'}><div className="link text-link" onClick={display}>דוח אחוז הנקה לפי גיל</div></Link>
        <Link to={'graph-b'}><div className="link text-link" onClick={display}>דוח מגמה שנתית לפי גיל</div></Link>
        <Link to={'graph-c'}><div className="link text-link" onClick={display}>דוח הפרש ציון מהממוצע</div></Link>
    </div>
}

