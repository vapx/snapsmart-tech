import { Dispatch, SetStateAction } from 'react';
import "../global.css";

type setSelectedCategory = Dispatch<SetStateAction<string>>;

interface SidenavProps {
  setSelectedCategory: setSelectedCategory;
}

const Sidenav: React.FC<SidenavProps> = ({ setSelectedCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-start" style={{height: "100%"}}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav flex-column align-items-start">
        <li className={window.location.hash === "#all-items" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#all-items" onClick={() => {
            setSelectedCategory("all-items")
            }}>All Items</a>
        </li>
        <li className={window.location.hash === "#groceries" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#groceries" 
          onClick={() => {
            setSelectedCategory("groceries")
            }}
          >Groceries</a>
        </li>
        <li className={window.location.hash === "#lifestyle" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#lifestyle"
          onClick={() => {
            setSelectedCategory("lifestyle")
            }}
          >Lifestyle</a>
        </li>
        <li className={window.location.hash === "#cloths" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#cloths"
          onClick={() => {
            setSelectedCategory("cloths")
            }}
          >Cloths</a>
        </li>
        <li className={window.location.hash === "#automative" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#automative"
          onClick={() => {
            setSelectedCategory("automative")
            }}
          >Automative</a>
        </li>
        <li className={window.location.hash === "#gadgets" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#gadgets"
          onClick={() => {
            setSelectedCategory("gadgets")
            }}
          >Gadgets</a>
        </li>
        <li className={window.location.hash === "#furniture" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#furniture" 
          onClick={() => {
            setSelectedCategory("furniture")
            }}
          >Furniture</a>
        </li>
        <li className={window.location.hash === "#toys" ? "selected-nav" : "nav-item"}>
          <a className="nav-link" href="#toys"
          onClick={() => {
            setSelectedCategory("toys")
            }}
          >Toys</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
