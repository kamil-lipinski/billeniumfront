import './App.css';
import { FiAlignCenter, FiArrowLeft } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"


function App() {
  return (
    <div className="App">
      <div className="NavBar" style={{height:"45px"}}>
        <FiArrowLeft size="25px"></FiArrowLeft>
        <div className="NavBarFont">
          WALK-A-DOG
        </div>
        <div style={{width:"200px"}}></div>
        <FiAlignCenter size="25px"></FiAlignCenter>
      </div>
      <div className="NavBar" style={{borderBottom:"2px solid #AAAAAA"}}>
        <div className="Bar2Text">
          Opinie innych o trenerze...
        </div>
      </div>
      <div className="NavBar" style={{borderBottom:"2px solid #AAAAAA"}}>
        <div className="ButtonBar">
          <div className="Button" style={{borderRadius:"4px 0px 0px 4px", borderRight:"0px"}}>
            <AiFillStar size="20px" color="#111111"></AiFillStar>
            <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
              1
            </div>
          </div>
          <div className="Button" style={{borderRight:"0px"}}>
          <AiFillStar size="20px" color="#111111"></AiFillStar>
            <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
              2
            </div>
          </div>
          <div className="Button" style={{borderRight:"0px"}}>
          <AiFillStar size="20px" color="#111111"></AiFillStar>
            <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
              3
            </div>
          </div>
          <div className="Button" style={{borderRight:"0px"}}>
          <AiFillStar size="20px" color="#111111"></AiFillStar>
            <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
              4
            </div>
          </div>
          <div className="Button" style={{borderRadius:"0px 4px 4px 0px"}}>
          <AiFillStar size="20px" color="#111111"></AiFillStar>
            <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
              5
            </div>
          </div>
        </div>
      </div>
      <div className="OpinionBox">
        <div className="Profile">
          <CgProfile size="50%" color="#AAAAAA"></CgProfile>
          <div className="Font" style={{fontSize: "17px", userSelect:"none"}}>
              Stanisław Nowak
          </div>
        </div>
        <div className="TextBox" size="60px">
          <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, augue ut mattis 
          scelerisque, lectus urna sagittis mi, nec varius justo tellus sed leo. Suspendisse 
          ultrices odio enim, ut consectetur neque condimentum eget. 
          </div>
        </div>
      </div>
      <div className="OpinionBox">
        <div className="Profile">
          <CgProfile size="50%" color="#AAAAAA"></CgProfile>
          <div className="Font" style={{fontSize: "17px", userSelect:"none"}}>
              Jan Kowalski
          </div>
        </div>
        <div className="TextBox" size="60px">
          <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, augue ut mattis 
          scelerisque, lectus urna sagittis mi, nec varius justo tellus sed leo. Suspendisse 
          ultrices odio enim, ut consectetur neque condimentum eget. 
          </div>
        </div>
      </div>
      <div className="OpinionBox">
        <div className="Profile">
          <CgProfile size="50%" color="#AAAAAA"></CgProfile>
          <div className="Font" style={{fontSize: "17px", userSelect:"none"}}>
              Filip Czarnecki
          </div>
        </div>
        <div className="TextBox" size="60px">
          <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, augue ut mattis 
          scelerisque, lectus urna sagittis mi, nec varius justo tellus sed leo. Suspendisse 
          ultrices odio enim, ut consectetur neque condimentum eget. 
          </div>
        </div>
      </div>
      <div className="OpinionBox">
        <div className="Profile">
          <CgProfile size="50%" color="#AAAAAA"></CgProfile>
          <div className="Font" style={{fontSize: "17px", userSelect:"none"}}>
              Amadeusz Brzeźiński
          </div>
        </div>
        <div className="TextBox" size="60px">
          <div className="Font" style={{fontSize: "15px", userSelect:"none"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, augue ut mattis 
          scelerisque, lectus urna sagittis mi, nec varius justo tellus sed leo. Suspendisse 
          ultrices odio enim, ut consectetur neque condimentum eget. 
          </div>
        </div>
      </div>
      <div className="NavBar" style={{borderBottom:"0px solid #AAAAAA"}}>
        <div className="Font" style={{color: "#074EE8", userSelect:"none"}}>
          1 - 2 - 3 - 4 - 5 - 6
        </div>
      </div>
    </div>
  );
}

export default App;
