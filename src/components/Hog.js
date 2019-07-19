import React from 'react'




export class Hog extends React.Component {
    
    state = {
        showDetails: false
    }

    showDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
    
    render() {
        if (this.state.showDetails == false) {
        return (
                <div className="cardStyles ui eight wide column" onClick={this.showDetails}>
                    <div className="header">
                        <h3>{this.props.hog.name}</h3>
                    </div>
                    <div className= "imageCard">
                        <img src={this.props.hog.image} alt=""/>
                    </div>
                    </div>
                    )}
            else {
                return (
                    <div className = "cardStyles ui eight wide column" onClick={this.showDetails}>
                        <div className="header">
                        <h3>{this.props.hog.name}</h3>
                        </div>
                        <div>
                        <h3>Specialties: {this.props.hog.specialty}</h3>
                        <h3>Highest Medial Achieved: {this.props.hog['highest medal achieved']}</h3>
                        <h3>Weight-to-Fridge Ratio: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
                        <h3> {this.props.hog.greased ? "Is Greased" : "Not Greased"} </h3>
                     </div>
                    </div>

                )
            }
            
        }
}
