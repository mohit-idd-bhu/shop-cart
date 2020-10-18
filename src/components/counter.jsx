import React, { Component } from 'react'

export default class Counter extends Component{
    render() {
        const value=this.props.counter.value;
        return (
            <div className="row">
                <div className="col-md-1">
                    <span className={ this.classSelect(value) } >{this.formatCount(value)}</span>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-secondary btn-sm m-1" 
                    onClick={()=>this.props.onAdd(this.props.counter)}>+</button>

                    <button className="btn btn-secondary btn-sm m-1" 
                    onClick={()=>this.props.onSub(this.props.counter) }
                    disabled={!value}
                    >-</button>
                    
                    <button className="btn btn-secondary btn-sm btn-danger"
                    onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            </div>
        );
    }
    classSelect(count) {
        let badge = "badge m-2 ";
        if (count === 0)
            badge += "badge-warning";
        else
            badge += "badge-primary";
        return badge;
    }
    formatCount(param){
        if(param===0) return "Zero";
        else return param;
    }
}
