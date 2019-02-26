import React, { Component } from "react";
import ReactDOM from  'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import axios from "axios"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Baby from "./components/Baby"
import LeftMenu from './components/LeftMenu'
import Messenger from './components/Messenger'
import SearchHeader from "./components/SearchHeader";
import ComposeSection from "./components/ComposeSection";
import Posts from "./components/Posts";
import LoadingComp from "./components/LoadingComp";


class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
   
    };
  }

  async componentWillMount(){
    const self = this

    const getInitialData = async function(){
      try{
        const initialData = await axios.get('/api/initialApp')
        // console.log(initialData)
        
        self.setState({
          initialData: initialData.data
        }, ()=> {
          console.log(self.state, "index")
        })
        
      } catch(error){
        console.log(error)
      }
    }
    getInitialData()
    
  }

  clickedBtn = () => {
    console.log("swag");
  };

  render() {
    console.log("render index")
    console.log(this.state.initialData)
    return (
      <Router>
        <div className="app-container home-page">
          <LoadingComp initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData }/>
          <LeftMenu initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData } />
          <section id="content-container">
            <SearchHeader />
            <Route exact path="/" component={(props) => <Home routeProps={props} initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} />} />
            <Route exact path="/profile/:id" component={(props) => <Profile routeProps={props} initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} />} />
            <Route exact path="/mybaby/:id" component={(props) => <Baby routeProps={props} initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} />} />
          </section>
          <Messenger initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} />
        </div>
      </Router >
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
