import {useState} from 'react'
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  const [open,setOpen]=useState(false);
  function change(){
    setOpen(!open)
  }
  return (
    <div data-aos="fade-left" className="App ">
      <Router>
        <div className="row m-0">
          <i onClick={change} className={"ham-menu  fas fa-bars " +(open ? 'd-none' : 'd-md-none d-block')}></i>
          <i onClick={change} className={"ham-menu  fas fa-times " +(open ? 'd-md-none d-block' : 'd-none')}></i>
          <div className={"d-md-block col-md-5  m-0 " +(open ? 'd-block col-12' : 'd-none')}>            
            <Header open={setOpen}/>        
          </div>
          <div className="body col m-0">
            <Body />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
