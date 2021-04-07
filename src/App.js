import {useState,useEffect,useRef} from 'react'
import './App.scss';
import {BrowserRouter as Router, useLocation, withRouter} from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';


function App() {
  const myRef=useRef(null);
  const [open,setOpen]=useState(false);
  function change(){
    setOpen(!open)
  }
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        myRef.current.scrollTo(0, 0);
    }, [pathname]);
    return props.children
  }
  const ScrollToTop = withRouter(_ScrollToTop)
  return (
    <div data-aos="fade-left" className="App ">
      <Router>
        <div className="row m-0">
          <i onClick={change} className={"ham-menu  fas fa-bars " +(open ? 'd-none' : 'd-md-none d-block')}></i>
          <i onClick={change} className={"ham-menu  fas fa-times " +(open ? 'd-md-none d-block' : 'd-none')}></i>
          <div className={"d-md-block col-md-5  m-0 " +(open ? 'd-block col-12' : 'd-none')}>            
            <Header open={setOpen}/>        
          </div>
          <div ref={myRef} className="body col m-0">
            <Body ScrollToTop={ScrollToTop}/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
