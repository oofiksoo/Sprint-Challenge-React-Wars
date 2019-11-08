import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import PersonCard from "./components/PersonCard";
import { Button, ButtonGroup } from 'reactstrap';


const App = () => {
        // Try to think through what state you'll need for this app before starting. Then build out
        // the state properties here.

        // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
        // side effect in a component, you want to think about which state and/or props it should
        // sync up with, if any.
    const [api, setApi] = useState([])
    const [next, setNext] = useState(["https://swapi.co/api/people/"])
          useEffect(() => {
            axios.get(next)
                .then(response => {
                    setApi(response.data.results)
                })
                .catch(error => {
                    console.log(error)
                })
               
        }, [])
        axios.get('https://swapi.co/api/people/')
        .then(response1 => {
         console.log(response1)
         setNext(response1.data.next)
        })
        .catch(error => {
         console.log(error)
     }) 
             
        return ( <div className = "App">
                <h1 className = "Header"> React Wars </h1>
                <hr></hr>
                <ButtonGroup>
                    <Button onClick={() => setNext()}>Previouse Page</Button>
                    <Button onClick={() => setNext()}>Next Page</Button>
                </ButtonGroup>
                <div className="AllCards"> 
                {api.map((person, index) => {
                    return ( < PersonCard key = { index }
                                name = { person.name }
                                gender = { person.gender }
                                birth = { person.birth_year }
                                world = { person.homeworld }
                                /> 
                                );}
                            )
                    } </div> </div>
                    );           
               }



export default App;