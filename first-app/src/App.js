import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import Reacts from 'react';

class App2 extends Component {
  state = {
      persons : [
        {id:'a',name:'Max',age:28},
        {id:'b',name:'Manu',age:29},
        {id:'c',name:'stephinie',age:26}
      ],
      otherState:'lkjbdkb',
      ShowPersons: false,
      ShowSecondPerson : false
  }

  switchNameHandler = (newName) => {
    //console.log('clicked');
    this.setState({
        persons : [
        {name: newName,age:28},
        {name:'Manu',age:29},
        {name:'stephinie',age:29}
      ] 
      })
  }


  switchNameHandler2 = () => {
    //console.log('clicked');
    this.setState({
        persons : [
        {name: 'buttonClick',age:28},
        {name:'Manu',age:29},
        {name:'stephinie',age:29}
      ] 
      })
  }


  nameChangeHandler = (event) => {
    //console.log('clicked');
    this.setState({
        persons : [
        {name: 'Max!!',age:28},
        {name:'stephie',age:29},
        {name:event.target.value,age:29}
      ] 
      })
  }

  nameChangeHandler2 = (event,id) => {
    console.log(id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
   console.log(personIndex);
   //let person = [...this.state.persons[personIndex]];
   //console.log(person.id+ 'name:'+person.name);
   var person = Object.assign({},this.state.persons[personIndex]);
   
   //console.log(perp.id+ 'name:'+perp.name);
   person.name = event.target.value;
  console.log('after'+person.id+ 'name:'+person.name);
   const persons = [...this.state.persons];
   persons[personIndex] = person;


    this.setState({
        persons : persons 
      })
  }

  togglePersonHanlder = () => {
    
    const doesShow = this.state.ShowPersons;
    this.setState({
      ShowPersons: !doesShow
    });
  }

   togglePerson2Hanlder = () => {
    
    const doesShow = this.state.ShowSecondPerson;
    this.setState({
      ShowSecondPerson: !doesShow
    });
  }

  deletePeron = (personIndex) => {
    //const persons = this.state.persons;
    
    //Note:
    //opar wali line is wajah say comment kari hai kyu kay immutable 
    //wala concept agaya tha. Reference type tha direct data orhaa day ta tha
    // tu jabhi pehlay copy banaye puranay ki pher change kar kay data dala puranay mai.

    //const persons = this.state.persons.slice();
    //or
    const persons = [...this.state.persons];  
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

 
  render() {
    const Style = {

      backgroundColor: 'White',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      margin : '10px'
    }
    const inputStyle = {
        margin : '10px'
    }

    let per = null;

    if(this.state.ShowSecondPerson)
    {
      per = (
        <div>
        {
          this.state.persons.map((person,index)=> {
              return <Person 
              click ={ () => this.deletePeron(index)}
              name ={person.name} 
              age = {person.age} 
              key={person.id}
              id= {person.id}
              changed={ (event) => this.nameChangeHandler2(event,person.id)}
              />
          })
        }
        </div>
      //  <div>
      // <Person style={Style} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      
      // <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
      // click={this.switchNameHandler.bind(this,'OsamaMunawar!!')} >My Hobbies:</Person>
      
      // <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed ={this.nameChangeHandler}/>
      // </div>
      );
    }

     return (
      <div className="App">
        <h1>Hi, I m a REACT APP</h1>
        <button onClick= {this.switchNameHandler2}>Switch Name</button>
        <button style={Style} onClick= {this.togglePersonHanlder}>Toggle Div</button>
        <button style={Style} onClick= {this.togglePerson2Hanlder}>Toggle Javascript Dynamically</button>
        {per}
      {
        this.state.ShowPersons === true ? 
        <div>
      <Person style={Style} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
      click={this.switchNameHandler.bind(this,'OsamaMunawar!!')} >My Hobbies:</Person>
      
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed ={this.nameChangeHandler}/>
      </div>
      : null
      }
     
      
      </div>
      
    );
    /*return React.createElement('div',null,'h2','My First App');*/
   // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'My First App'));
  }

}

export default App2;
