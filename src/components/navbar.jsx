import React, { Component } from 'react';
class NavBar extends Component {
  total=()=>{
    let total=0;
    for(let i=0;i<this.props.list.length;i++){
      if(this.props.list[i].value!==0) total++;
    }
    return total;
  }
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
        Toal Items = {this.total()}
      </nav> );
    }
}
 
export default NavBar;