import React from 'react'

export class Details extends React.Component{

    style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5em'
      }

    render(){
        let {specialty,greased} = this.props.hog
        let weight = this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
        let medal = this.props.hog["highest medal achieved"]
        return(
            <div className="ui list" style={this.style} >
                <div className="item">{greased ? "Greased" : "Not Greased"}</div>
                <div className="item">Specialty: {specialty}</div>
                <div className="item">Weight: {weight}</div>
                <div className="item">Highest Medal: {medal}</div>
            </div>
        )
    }
}