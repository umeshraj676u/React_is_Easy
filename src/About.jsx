import User from "./User";
import UserClass from "./UserClass";
import {Component} from 'react';

class About extends Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor");  
  
  }
componentDidMount(){
  console.log("parents components didMound");
}

render(){
  console.log("parents Reder");


  return (
    <div>
      <h1>About Class Component</h1>
      <UserClass name={"first"} location={"Deharadun class"}/>
    </div>
  )
}}

export default About;