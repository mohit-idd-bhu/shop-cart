import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
class App extends Component {
    state = { 
        handle:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0}
        ]
     }
     handleReset=()=>{
        const counters=this.state.handle.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({handle:counters});
     }
    handleAdd=(params)=>{
        const counters=[...this.state.handle];
        const index=counters.indexOf(params);
        counters[index]={...params};
        counters[index].value++;
        this.setState({handle:counters});
    }
    handleSub=(params)=>{
        const counters=[...this.state.handle];
        const index=counters.indexOf(params);
        counters[index]={...params};
        if(counters[index].value!==0) counters[index].value--;
        this.setState({handle:counters});
    }
    handleDelete=(counterId)=>{
        const counters=this.state.handle.filter(c=> c.id!==counterId);
        this.setState({handle:counters});
    }
    render() { 
        return ( 
            <>
                <NavBar list={this.state.handle}/>
                <main className="container">
                    <Counters
                        onReset={this.handleReset}
                        onAdd={this.handleAdd}
                        onSub={this.handleSub}
                        onDelete={this.handleDelete}
                        list={this.state.handle}
                    />
                </main>
            </>
         );
    }
}
 
export default App;