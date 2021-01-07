//import area

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//Create an Class Component
class Myclass extends Component{
    //1.Property
    state = {};

    //2.Construtor
    //order sequence 1
    constructor(props){
        super(props);
        //The Role Constructor is to initialize the properties
        this.state = {"favColor":'red'};
    }
    getSnapshotBeforeUpdate(prevProps,prevState){//Formal argument
        alert('Previous value of State was '+prevState.favColor);
    }
    componentDidUpdate(){
        alert('After value of state is'+this.state.favColor);
    }

    //3.Method
    //Every method must have render method
    //order sequence 2
    render(){
        return(
            <div>
                <h1>My Favourite color is { this.state.favColor }</h1>
            </div>
        );
    }
    //order sequence 3
    componentDidMount(){
       //this.state.favColor = 'yellow';
        setTimeout(()=>{
            this.setState({"favColor":'yellow'});
        },3000);
    }

}

ReactDOM.render(<Myclass/>,document.getElementById('root'));//actual arg