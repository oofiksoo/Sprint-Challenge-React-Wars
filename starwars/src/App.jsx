import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import PersonCard from "./components/PersonCard";
import { Button, ButtonGroup, Jumbotron } from 'reactstrap';


const App = () => {
        // Try to think through what state you'll need for this app before starting. Then build out
        // the state properties here.

        // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
        // side effect in a component, you want to think about which state and/or props it should
        // sync up with, if any.
    const [api, setApi] = useState([])
    const [url, setUrl] = useState(["https://swapi.co/api/people/"])
    const [next, setNext] = useState("")
    const [prev, setPrev] = useState("")
          useEffect(() => {
            axios.get(url)
                .then(response => {
                    setApi(response.data.results)
                    setNext(response.data.next)
                    setPrev(response.data.prev)
                    })
                .catch(error => {
                    console.log(error)
                })
               
        }, [])
                    
        return ( <div className = "App">
                <h1 className = "Header"> Lambda School Intro to React challange:</h1>
                <Jumbotron>
                    <div className="bord">
                    <div className="jmbo">
                    <h1>React Wars</h1>
                    <p>In this challange, I have consumed data provided by the "Star Wars" API. Below you will
                        see a consumed objected, with a .map over the people array. Each person's data is presented 
                        as a brief "Card". Additional details can be found by following the button on each "Card".
                    </p>
                    <p><Button variant="primary" href="https://swapi.co/api/">API Specification</Button></p>
                </div>
                </div>
                </Jumbotron>
                <hr></hr>
                <ButtonGroup>
                    <Button onClick={() => setUrl({next})}>Previouse Page</Button>
                    <Button onClick={() => setUrl({prev})}>Next Page</Button>
                </ButtonGroup>
                <div className="AllCards"> 
                
                {api.map((person, index) => {
                    return ( 
                            < PersonCard key = { index }
                                name = { person.name }
                                gender = { person.gender }
                                birth = { person.birth_year }
                                url = { person.url }
                                />
                                 
                                );}
                            )
                    } </div> </div>
                    );           
               }
               


export default App;