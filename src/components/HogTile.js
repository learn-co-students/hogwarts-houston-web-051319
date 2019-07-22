import React, {Component} from 'react'
// import {HogIndex} from './HogIndex'

export default class HogTile extends Component{

    state = {
        seeData: true
    }

    // showData =()=>{
    //     if(this.state.seeData===false){
    //         //generate elements with info
    //        stuff = <p>{this.props.piggys.specialty}</p>
    //     }

       

    // }

    letsee = () =>{
        this.setState({seeData: !this.state.seeData})
    }

    render(){
        
        

        console.log(this.props);
        console.log(this.props.piggys.specialty)
        return(

            <div className="ui eight wide column"  onClick={this.letsee} >
                
                 {this.state.seeData?    
                <div>
                <p>{this.props.piggys.name}</p>
                <img src = {this.props.piggys.image} alt = "" />    
                </div>
                    :
                <div>
                <p>{this.props.piggys.name}</p>
                <img src = {this.props.piggys.image} alt = "" />    
                <p>{this.props.piggys.specialty}</p>
                <p>{this.props.piggys["highest medal achieved"]}</p>
                <p>{this.props.piggys["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
                </div>
                 } 
                
            </div>
        )
    }
}
