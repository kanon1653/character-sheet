import React, {Component} from 'react';
import { MIN_STR, MAX_STR, MIN_INT, MAX_INT, MIN_EDU, MAX_EDU } from './constant'

class CharOptions extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            value: ""
        };
    }

    buildOptions = (status)=>{
        let arr = [];
        let min = MIN_STR;
        let max = MAX_STR

        if (status==='int'){
            min = MIN_INT;
            max = MAX_INT;
        } else if (status==='edu'){
            min = MIN_EDU;
            max = MAX_EDU;
        }

        arr.push(<option key = {0} value=" "> </option>)
        for (let i = min; i <= max; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }

        return arr; 
    }

    handleChange = (e) => {
        this.props.onStateChange(e.target.id, e.target.value);
    }

    render(){
        // console.log(this.props.calVal);
        return(
            <select id={this.props.status} value={this.props.value} onChange={this.handleChange}>
                {this.buildOptions(this.props.status)}
            </select>
        )
    }

}

export default CharOptions;