import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    render() {
        return ( <div>
            <button className="btn-primary btn-sm m-1"
            onClick={this.props.onReset}
            >Reset</button>
            {this.props.list.map((params)=>(
                    <Counter 
                        key={params.id}
                        counter={params} 
                        onDelete={this.props.onDelete}
                        onAdd={this.props.onAdd}
                        onSub={this.props.onSub}
                    />
                ))
                }
        </div> );
    }
}
 
export default Counters;