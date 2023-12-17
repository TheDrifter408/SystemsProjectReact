// SVG imports
import Location from '../assets/location.svg';
import Account from '../assets/account-info.svg';
import CloseBtn from '../assets/menu-close.svg';


//interface to accept functions from the parent
interface BtnProps {
    settingsToggle: () => void;
}

function Settings({settingsToggle}:BtnProps) {
    return (
        <aside id="settings" className="leftMenu">
            <div className="btn-container flex center">
                <button onClick={settingsToggle}>
                    <img src={CloseBtn} alt="close-button" />
                </button>
            </div>
            <div>
                <ul className="nav-container">
                    <li>
                        <img src={Location} alt="location" />
                        <a href="">Location Permission</a>
                    </li>
                    <li>
                        <img src={Account} alt="account-information" />
                        <a href="">Account Information</a>
                    </li>
                    <li>
                        <a href="">File A Complaint</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Settings;