import React from 'react';
import ClassList from './components/CardList/CardList'
// import robots from './robots'
import Scroll from './components/Scroll/Scroll'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'
// import './App.css';



class App extends React.Component{
    constructor(){
        super()
        this.state= {
            robots: [],
            searchfield : ''
        }
       
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())   
        .then(users => {this.setState({robots:users})})
        // .then( users => {})
        
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value })
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>loading</h1>
        }else{
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ClassList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}
export default App;