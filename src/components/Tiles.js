import React from 'react';
import { Details } from './Details';
import { Card } from 'semantic-ui-react';



export class Tiles extends React.Component{

    state={
        detailsDisplay: false
    }

    imageStyle={
        width: '250px',
        height: '300px',
        marginTop: '5px'
    }

    imageStyleDetails={
        width: '250px',
        height: '300px',
        marginTop: '5px',
        opacity: '0.5'
    }

    buttonStyle={
        margin: '5px'
    }

    render(){
        let {id,name,image, hidden} = this.props.hog
        let imageDisplay
        if(this.state.detailsDisplay){
            imageDisplay = (
            <div className="image">
                <img style={this.imageStyleDetails} src={ image } alt="Issa Pig" />
                < Details hog={this.props.hog} />
            </div>
            )
        }else{
            imageDisplay = (
                <div className="image">
                    <img style={this.imageStyle} src={ image } alt="Issa Pig" />
                </div>
            )
        }
        return(
            <Card>
                <div>
                    <button style={this.buttonStyle} className="small ui blue button" onClick={()=>this.setState({detailsDisplay: !this.state.detailsDisplay})}>
                        {this.state.detailsDisplay ? "Hide Details" : "Show Details"}
                    </button>
                    <div className="content">
                        <div className="ui medium header">{name}</div>
                    </div>
                    {imageDisplay}
                    <div className="ui fitted divider"></div>
                    <div>
                        <span> Hide this Hog Card: <input checked={hidden} type="checkbox" onChange={()=>this.props.hideHog(id)}/> </span>
                    </div>
                </div>
            </Card>
        )
    }

}