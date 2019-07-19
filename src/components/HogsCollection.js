import React, { Component } from 'react'
import { Hog } from './Hog'

export default class HogsCollection extends Component {
    
    state = {
        HogsCollectionArray: [],
        filter: false
    }

    greasedPigs = () => {
        this.setState({
            filter: !this.state.filter
        })
    }





    componentDidMount() {
        fetch('http://localhost:3001/hogs')
            .then( res => res.json() )
            .then( res => {
                this.setState({ 
                    HogsCollectionArray: res
                })
            })  
          }

    
    
    render() {
        let filteredPigs = this.state.filter ? this.state.HogsCollectionArray.filter( hog => hog.greased) : this.state.HogsCollectionArray

        return (
        <div>
            <div>
                <button onClick={this.greasedPigs}>Greased? {this.state.filter ? 'Yes' : 'No'}</button>
            </div><br></br>
            <div className="ui grid container">
                {filteredPigs.map( hog => {
                    return <Hog hog={hog} ></Hog>
                })
                }
            </div>
        </div>
        )
    }
}
