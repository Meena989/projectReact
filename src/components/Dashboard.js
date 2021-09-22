import React from 'react';
import img6 from '../assets/img6.jpeg';
import Navbar from './Navbar'; 
import Search from './Searchbar';
import Menu from './Menu';
import Bestexps from './Bestexps';
import Hotels from './Hotels';
function Dashboard(){
    
    return(
        
        <div fluid className="dashboard">
            <div>
            <Navbar/>
            </div>
            <div className="content">
            
                <div className="topSec">
                    <div >
                    <Search/>
                    </div>
                <div className="prof">
                    Hello, User <img style={{width:"50px",height:"35px"}} src={img6} alt={"xyz"}/>
                </div>
                </div>
            <div className="box-menu">
                <Menu/>
            </div>
                <div className="Exp">
                    <Bestexps/>
                </div>
                <div className="Hotel">
                    <Hotels/>
                </div>
                
            </div>
            </div>
    )
}
export default Dashboard;