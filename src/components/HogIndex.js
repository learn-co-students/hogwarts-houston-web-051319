import React,{Component} from 'react'
import HogTile from './HogTile'

export class HogIndex extends Component{

    state ={
        oinkArray : [ ],
        seeData: true,
        seeGrease: false
    }


    componentDidMount(){
        fetch("http://localhost:3001/hogs")
        .then(res => res.json())
        .then(piggyData => {
            console.log(piggyData)
            this.setState({oinkArray: piggyData})
        });  
    }

    // letsee = () => {
    //     
    // }
    // changeView(event) {
    //     let clickStatus = event.target.value
    //     this.setState({
    //         completedFilter: clickStatus === 'completed' ? true : false
    //     })
    // }

    changeView = (e) =>{
        e.preventDefault()
        let greaseStatus = this.state.seeGrease
        this.setState({
            seeGrease: !greaseStatus
        })
    }

    // render() {
    //     let fileredItems = this.state.list;
    //     if (this.state.completedFilter) {
    //         fileredItems = this.state.list.filter((item) => item.completed);
    //     }
    //     return (
    //         ...
    //         {
    //             filteredItems.map((item) => {
    //                 //return item node
    //             })
    //         }
    //     );
    // }
    render(){
        let  greasedPigs= this.state.oinkArray.filter(pig => {return  pig.greased})

        return(
            <div> 
                <button onClick={this.changeView} >Toggle Greased Pigs  </button> 
                
                <div className = "ui grid container" >

                    {this.state.seeGrease ===false?
                        <div>
                        {this.state.oinkArray.map(hog => {
                            return <HogTile piggys={hog}/>
                        })}
                        </div>
                        :
                        <div>
                            {greasedPigs.map(g_pig => {
                                return <HogTile piggys={g_pig}/>
                            })}
                        </div>
                    }
                </div>
            </div>
        )
        
        
     
    }
}