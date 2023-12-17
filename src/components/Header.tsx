// SVG Imports
import menuBtn from '../assets/menu.svg';
import settingBtn from '../assets/settings.svg';
import notificationsBtn from '../assets/notification.svg';

//interface to accept functions from the parent
interface BtnProps {
    menuToggle: () => void;
    settingsToggle: () => void;
}

function Header({menuToggle, settingsToggle}:BtnProps) {
    return (
        <header className="flex space-between">
            <div className="btn-container">
                <button onClick={menuToggle}>
                    <img src={menuBtn} alt="menu-button" />
                </button>
            </div>
            <div className="title-container">
                <h1>Mediconnect</h1>
            </div>
            <div className="flex">
                <div className="btn-container">
                    <button>
                        <img src={notificationsBtn} alt="notifications-button" />
                    </button>
                </div>
                <div className="btn-container">
                    <button onClick={settingsToggle}>
                        <img src={settingBtn} alt="settings-button" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;