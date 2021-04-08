import {useState,useEffect,useRef} from 'react'
import './App.scss';
import {BrowserRouter as Router, useLocation, withRouter} from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-45390016-3"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});
ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});



function App() {
  const myRef=useRef(null);
  const [open,setOpen]=useState(false);
  function change(){
    setOpen(!open)
  }
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    props.history.listen((location, action) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
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
