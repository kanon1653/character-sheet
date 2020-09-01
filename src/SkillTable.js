import React, {Component} from 'react';
// import skills from './skills'
import SkillRow from './SkillRow'
import battleSkills from './skills/battleSkills.js'
import searchSkills from './skills/searchSkills'
import actionSkills from './skills/actionSkills'
import negotiationSkills from './skills/negotiationSkills'
import knowledgeSkills from './skills/knowledgeSkills'
import headerData from './skills/headerData'

class Skills extends Component{
    constructor(){
        super();
    }

    render(){

        const tableHeader = headerData.map((header,i)=>{
            return(
                <tr key={i}>
                    <td>{header.name}</td>
                    <td>{header.initVal}</td>
                    <td>{header.jobP}</td>
                    <td>{header.interP}</td>
                    <td>{header.other}</td>
                    <td>{header.growth}</td>
                    <td>{header.sum}</td>
                </tr>
            )
        })

        return(
            <div>
                <h2>Sample</h2>

                <table>
                    <tbody>
                        {tableHeader}
                        <SkillRow category={battleSkills} />
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableHeader}
                        <SkillRow category={searchSkills} />
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableHeader}
                        <SkillRow category={actionSkills} />
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableHeader}
                        <SkillRow category={negotiationSkills} />
                    </tbody>
                </table>

                <table>
                    <tbody>
                        {tableHeader}
                        <SkillRow category={knowledgeSkills} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Skills;