import Header from './components/Header'
import Report from './components/Report'
import Table from './components/Table'
import Appointments from './components/Appointments';
// SVG imports
import ChartsIcon from './assets/charts.svg';
import Menu from './components/Menu';
import Settings from './components/Settings';
// CSS
import './index.css';

function App() {
  function menuToggle() {
    const rightMenu = document.getElementById("rightMenu");
    rightMenu?.classList.toggle("MenuSlide");
  }
  function settingsToggle() {
    const settings = document.getElementById("settings");
    settings?.classList.toggle("MenuSlide");
  }
  return (
    <>
      <Header menuToggle={menuToggle} settingsToggle={settingsToggle} />
      <Menu menuToggle={menuToggle}/>
      <Settings settingsToggle={settingsToggle} />
      <section className="container">
      <h1>Appointments</h1>
        <article className="grid center">
        <Appointments />
        </article>
      </section>
      <section className="container">
        <h1>Patients</h1>
        <article className="grid center">
          <Table />
        </article>
      </section>
      <section className="container flex gap-1">
        <article className="w-50">
          <h1>Report Progress</h1>
          <Report />
        </article>
        <article className="w-50">
          <h1>Charts</h1>
          <ul>
            <li>
              <a href="#">Mahfuzul Islam</a>
              <a href="">
                <img src={ChartsIcon} alt="charts"/>
              </a>
            </li>
            <li>
              <a href="#">Rafiul Ahmed</a>
              <a href="">
                <img src={ChartsIcon} alt="charts"/>
              </a>
              </li>
            <li>
              <a href="#">Farzan Alam</a>
              <a href="">
                <img src={ChartsIcon} alt="charts"/>
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default App
