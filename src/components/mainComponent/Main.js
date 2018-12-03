import React, { Component } from 'react';
import './Main.css';


class Main extends Component {
  constructor(){
    super();
    this.state = {
      listas:[]
    };
  }

  componentDidMount(){
    fetch('https://afternoon-basin-68889.herokuapp.com/api/listas')
    .then(res => res.json())
    .then(data => {
      this.setState({
        listas:data
      })
      console.log(this.state.listas)
    })
  }

  render() {
    return (
      <main>
        <div className="detailsList">
        
        </div>
        
        <div className="lists">
          {this.state.listas.map((lista) => {
              return(
                <div className="box_list" key={lista._id}>
                  <div> {lista.title} </div>
                  <div> : </div>
                </div>
              )
            })
          }
        </div>
      </main>
    );
  }
}

export default Main;