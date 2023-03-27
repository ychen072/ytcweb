import logo from './logo.svg';
import './App.css';
import NavigationBar from "./component/navigationBar";
import {Route, Routes} from 'react-router-dom'
import Landing from './pages/landing'
import AboutMe from './pages/aboutMe'
import ContactMe from './pages/contactMe'
import {useLayoutEffect, useRef, useState} from "react";
import {WEB_PAGE} from "./constants";

function App() {


    const ref = useRef(null)
    const [navHeight, setNavHeight] = useState(0);
    useLayoutEffect(()=>{
        console.log(ref, ref.current);
        const {height} = ref.current.getBoundingClientRect();
        setNavHeight(height);
            }, [])

    return (
        <div className="App">
            <NavigationBar ref={ref}/>
            <div style={{paddingTop: navHeight, height: `calc(100vh - ${navHeight}px)`, display: 'flex'}}>
                <Routes>
                    <Route index path="/ytcweb?" element={<Landing/>}/>
                    <Route path={WEB_PAGE.aboutMe} element={<AboutMe/>}/>
                    <Route path={WEB_PAGE.contact} element={<ContactMe/>}/>

                </Routes>
            </div>

        </div>
    );
}

export default App;
