import React, {Component} from 'react';
import CharOptions from './CharOptions'

class CharStatus extends Component{
    constructor(props){
        super(props);
        this.updateStatus = this.updateStatus.bind(this);
        this.state = {
            str: "",
            con: "",
            pow: "",
            dex: "",
            app: "",
            siz: "",
            int: "",
            edu: "",
            hp: "",
            mp: "",
            san: "",
            idea: "",
            luck: "",
            knowledge: "",
            o_str: 0,
            o_con: 0,
            o_pow: 0,
            o_dex: 0,
            o_app: 0,
            o_siz: 0,
            o_int: 0,
            o_edu: 0,
            o_hp: 0,
            o_mp: 0,
            o_san: 0,
            o_idea: 0,
            o_luck: 0,
            o_knowledge: 0,
            t_str: 0,
            t_con: 0,
            t_pow: 0,
            t_dex: 0,
            t_app: 0,
            t_siz: 0,
            t_int: 0,
            t_edu: 0,
            t_hp: 0,
            t_mp: 0,
            t_san: 0,
            t_idea: 0,
            t_luck: 0,
            t_knowledge: 0,
            f_str: "",
            f_con: "",
            f_pow: "",
            f_dex: "",
            f_app: "",
            f_siz: "",
            f_int: "",
            f_edu: "",
            f_hp: "",
            f_mp: "",
            f_san: "",
            f_idea: "",
            f_luck: "",
            f_knowledge: ""
        }
    }

    getStatus = (n, m, l) => {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += Math.floor(Math.random() * m) + 1;
        }

        sum += l;
        return sum;
    }

    getAllStatus = () => {
        this.setState({
            str: this.getStatus(3, 6, 0),
            con: this.getStatus(3, 6, 0),
            pow: this.getStatus(3, 6, 0),
            dex: this.getStatus(3, 6, 0),
            app: this.getStatus(3, 6, 0),
            siz: this.getStatus(2, 6, 6),
            int: this.getStatus(2, 6, 6),
            edu: this.getStatus(3, 6, 3),
        }, () => {
            this.updateFinalStatus();
        })
    }

    updateFinalStatus = () => {
        this.setState({
            f_str: this.state.str + this.state.o_str + this.state.t_str,
            f_con: this.state.con + this.state.o_con + this.state.t_con,
            f_pow: this.state.pow + this.state.o_pow + this.state.t_pow,
            f_dex: this.state.dex + this.state.o_dex + this.state.t_dex,
            f_app: this.state.app + this.state.o_app + this.state.t_app,
            f_siz: this.state.siz + this.state.o_siz + this.state.t_siz,
            f_int: this.state.int + this.state.o_int + this.state.t_int,
            f_edu: this.state.edu + this.state.o_edu + this.state.t_edu,
        }, () =>{
            this.updateCalculatedStatus();
        })
    }

    updateCalculatedStatus = () => {
        this.setState({
            hp: Math.ceil((this.state.f_con+this.state.f_siz)/2),
            mp: this.state.f_pow,
            san: this.state.f_pow*5,
            idea: this.state.f_int*5,
            luck: this.state.f_pow*5,
            knowledge: this.state.f_edu*5
        }, () => {
            this.setState({
                f_hp: this.state.hp + this.state.o_hp + this.state.t_hp,
                f_mp: this.state.mp + this.state.o_mp + this.state.t_mp,
                f_san: this.state.san + this.state.o_san + this.state.t_san,
                f_idea: this.state.idea + this.state.o_idea + this.state.t_idea,
                f_luck: this.state.luck + this.state.o_luck + this.state.t_luck,
                f_knowledge: this.state.knowledge + this.state.o_knowledge + this.state.t_knowledge
            })
        })
    }

    updateOtherTemporaryStatus = (e) => {
        this.setState({
            [e.target.id]: parseInt(e.target.value) || 0
        }, () => {
            this.updateFinalStatus();
        })
    }

    updateStatus = (statusName, statusValue) => {
        this.setState({
            [statusName]: parseInt(statusValue)
        }, () => {
            this.updateFinalStatus();
        })
    }



    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>STR</td>
                            <td>CON</td>
                            <td>POW</td>
                            <td>DEX</td>
                            <td>APP</td>
                            <td>SIZ</td>
                            <td>INT</td>
                            <td>EDU</td>
                            <td>HP</td>
                            <td>MP</td>
                            <td>初期SAN</td>
                            <td>アイデア</td>
                            <td>幸運</td>
                            <td>知識</td>
                        </tr>
                        <tr>
                            <td>能力値</td>
                            <td>
                                <CharOptions status="str" value={this.state.str} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <CharOptions status="con" value={this.state.con} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <CharOptions status="pow" value={this.state.pow} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <CharOptions status="dex" value={this.state.dex} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <CharOptions status="app" value={this.state.app} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <CharOptions status="siz" value={this.state.siz} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <CharOptions status="int" value={this.state.int} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <CharOptions status="edu" value={this.state.edu} onStateChange={this.updateStatus}/>
                            </td>
                            <td>
                                <input value={this.state.hp} onChange={this.handleChange} readOnly />
                            </td>
                            <td>
                                <input value={this.state.mp} onChange={this.handleChange} readOnly />
                            </td>
                            <td>
                                <input value={this.state.san} onChange={this.handleChange} readOnly />
                            </td>
                            <td>
                                <input value={this.state.idea} onChange={this.handleChange} readOnly />
                            </td>
                            <td>
                                <input value={this.state.luck} onChange={this.handleChange} readOnly />
                            </td>
                            <td>
                                <input value={this.state.knowledge} onChange={this.handleChange} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>その他増加分</td>
                            <td><input id="o_str" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_con" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_pow" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_dex" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_app" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_siz" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_int" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_edu" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_hp" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_mp" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_san" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_idea" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_luck" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="o_knowledge" onChange={this.updateOtherTemporaryStatus}/></td>
                        </tr>
                        <tr>
                            <td>一時的増加</td>
                            <td><input id="t_str" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_con" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_pow" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_dex" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_app" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_siz" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_int" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_edu" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_hp" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_mp" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_san" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_idea" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_luck" onChange={this.updateOtherTemporaryStatus}/></td>
                            <td><input id="t_knowledge" onChange={this.updateOtherTemporaryStatus}/></td>
                        </tr>
                        <tr>
                            <td>合計値</td>
                            <td><input value={this.state.f_str} readOnly/></td>
                            <td><input value={this.state.f_con} readOnly/></td>
                            <td><input value={this.state.f_pow} readOnly/></td>
                            <td><input value={this.state.f_dex} readOnly/></td>
                            <td><input value={this.state.f_app} readOnly/></td>
                            <td><input value={this.state.f_siz} readOnly/></td>
                            <td><input value={this.state.f_int} readOnly/></td>
                            <td><input value={this.state.f_edu} readOnly/></td>
                            <td><input value={this.state.f_hp} readOnly/></td>
                            <td><input value={this.state.f_mp} readOnly/></td>
                            <td><input value={this.state.f_san} readOnly/></td>
                            <td><input value={this.state.f_idea} readOnly/></td>
                            <td><input value={this.state.f_luck} readOnly/></td>
                            <td><input value={this.state.f_knowledge} readOnly/></td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={()=>this.getAllStatus()}>キャラクター作成</button>
            </div>
        )
    }

}

export default CharStatus;