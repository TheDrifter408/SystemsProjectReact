// SVG imports
import CloseBtn from "../assets/menu-close.svg";
import MedicSymbol from "../assets/medical-Symbol.svg";
import Profile from "../assets/profile-svg.svg";
import Report from "../assets/report.svg";
import Payment from "../assets/payments.svg";
import Call from '../assets/call-nurse.svg';
import Doctors from '../assets/doctors.svg';

//interface to accept functions from the parent

interface BtnProps {
    menuToggle: () => void;
}

function Menu({menuToggle}:BtnProps) {
    return (
        <aside id="rightMenu" className="rightMenu">
            <div className="btn-container flex center">
                <button onClick={menuToggle}>
                    <img src={CloseBtn} alt="close-btn" />
                </button>
            </div>
            <div className="symbol-container">
                <img src={MedicSymbol} alt="mediconnect-pro" />
                <p>Mediconnect</p>
            </div>
            <div className="flex center gap-1">
                <img src={Profile} alt="profle" />
                <p>Welcome Dr.House</p>
            </div>
            <div>
                <ul className="nav-container">
                    <li>
                        <img src={Report} alt="reports" />
                        <a href="">Reports</a>
                    </li>
                    <li>
                        <img src={Payment} alt="payments" />
                        <a href="">Payments</a>
                    </li>
                    <li>
                        <img src={Call} alt="call-nurse" />
                        <a href="">Call Nurse</a>
                    </li>
                    <li>
                        <img src={Doctors} alt="doctors" />
                        <a href="">Doctors</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Menu;