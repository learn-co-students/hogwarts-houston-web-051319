import React from 'react'
import { Tiles } from './Tiles';
import { Card } from 'semantic-ui-react';

export class Collection extends React.PureComponent{

    state={
        hogs: []
    }

    render(){
        let hogs
        this.props.greaseFilter ?
        hogs = this.state.hogs.filter((hog)=>hog.greased) :
        hogs = this.state.hogs;

        if(!this.props.hiddenFilter){
            hogs = hogs.filter((hog)=> !hog.hidden)
        }
        

        if(this.props.sortType==="name"){
            hogs.sort((a,b)=> a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
        }else if(this.props.sortType==="weight"){
            hogs.sort((a,b)=> a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
        }

        return(
            <Card.Group style={{justifyContent: 'center'}}>
                {hogs.map( hog=> < Tiles key={hog.id} hog={hog} hideHog={this.hideHog} /> )}
            </Card.Group>
        )
    }

    // Use this to have gifs instead of images

    // componentDidMount(){
    //     fetch('http://localhost:3001/hogs')
    //     .then(res => res.json())
    //     .then(hogs => {
    //         fetch('http://api.giphy.com/v1/gifs/search?q=pig&api_key=dc6zaTOxFJmzC&rating=g')
    //         .then(res => res.json())
    //         .then(gifs => {
    //             hogs.forEach((hog) =>{
    //                 let gif = gifs.data[hog.id].images.original.url
    //                 hog.hidden = false
    //                 hog.image = gif
    //             })
    //             this.setState({ hogs })
    //         })
    //     })
    // }

    componentDidMount(){
        fetch('http://localhost:3001/hogs')
        .then(res => res.json())
        .then(hogs => {
            hogs.forEach((hog) =>hog.hidden = false)
            this.setState({ hogs })
        })
    }

    hideHog = (id) => {
        this.setState({
            hogs: this.state.hogs.map(hog => {
                if(parseInt(hog.id,10)===id){
                    hog.hidden = !hog.hidden
                    return hog
                }else{
                    return hog
                }
            })
        })
    }
}