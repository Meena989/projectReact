import React from 'react';
//import SearchIcon from '@material-ui/icons/Search';
function Search(){
    const Searchstyle={
        top:"0px",width:"250px",float:"center",fontSize:30,paddingTop:"0px"

    }
    return(
        <div className="sea" style={Searchstyle}>
                    
                    
                    <input type="text" className="searchcontrol" placeholder="Search"/>
                     
                    
                    </div>
    )
}
export default Search;