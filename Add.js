import React from "react";

//

export default class Add extends React.Component{

    constructor(props) {
        super(props);
        this.map = new Map();
        this.state={cv:'',major:'',sex:'female',swimming:false,reading:false};


    }





    handleCVchange=(e)=>{
        this.setState({cv:e.target.value});
    }


    handlemajor=(e)=>{
        this.setState({major:e.target.value});
    }

    handlebtn=()=>{
        console.log(this.state.cv);
        console.log(this.state.major);
        console.log(this.state.sex);
        console.log(this.state.swimming);
        console.log(this.state.reading);

    }

    handleautoselect=(e)=>{
       this.setState({major:e.target.value})
    }

    handlesex=(e)=>{
        this.setState({sex:e.target.value})
    }


    handleChangehobbies=(e)=>{

           let name=e.target.name;
        //   if (e.target.name==="swimming") {
               this.setState({[name]: e.target.checked});
        //   }else {
        //       this.setState({reading: e.target.checked});
        //   }

            //console.log(this.state.swimming);
    }



    render() {



        return(
            <form>
                <div>{this.state.swimming.toString()}</div>
                <div>{this.state.reading.toString()}</div>
                <label>CV</label>
                <textarea onChange={this.handleCVchange}/>
                <select onChange={this.handlemajor} value={this.state.major}>
                    <option>please select major</option>
                    <option value="CS">CS</option>
                    <option value="CE">CE</option>
                </select>
                <textarea value={this.state.cv}/>

                <label>
                    <input type="radio" value='male' name="sex" onChange={this.handlesex} checked={this.state.sex==='male'} />
                    male
                </label>

                <label>
                    <input type="radio" value='female' name="sex" onChange={this.handlesex} checked={this.state.sex==='female'} />
                    female
                </label>

                <br/>
                hobbies
                <label>
                    <input type={"checkbox"} name={'swimming'} onChange={this.handleChangehobbies} />
                    swimming
                </label>

                <label>
                    <input type={"checkbox"} name={'reading'}  onChange={this.handleChangehobbies}/>
                    reading
                </label>

                <br/>

                <input type="button" value="add" onClick={this.handlebtn} />
                <input type="button" value="CS" onClick={this.handleautoselect} />
                <input type="button" value="CE" onClick={this.handleautoselect} />







            </form>

        )
    }

}