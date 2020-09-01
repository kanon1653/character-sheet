import React, {Component} from 'react';

class SkillRow extends Component{
    constructor(){
        super();
    }

    render(){
        const row = this.props.category.map((skill,i)=>{
            return(
                <tr key={i}>
                    <td className="skill-name">{skill.name}</td>
                    <td>{skill.initValue}</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>
                </tr>
            )
        })

        return(
            row
        )
    }
}

export default SkillRow