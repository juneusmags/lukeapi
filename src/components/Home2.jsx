import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home2 = props =>{
    const [char, setChar] = useState(null);
    const [id, setId] = useState(1);
    const [category, setCategory] = useState("");
    const [resetChar, setResetChar] = useState (false);
    

    useEffect(() => {
        
        axios.get (`https://swapi.dev/api/${category}/${id}`)
        .then (res => setChar(res.data))
    },[resetChar])

    const getData = e =>{
        e.preventDefault();
        setResetChar(!resetChar);
    }
    return(
        <div>
            <h1>hi</h1>
            <form onSubmit = {getData}>
                <select name="categories" onChange = {e=> setCategory(e.target.value)}>
                    <option value="films">Films</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                </select>
                <input type ="text" name = "id" onChange = {e => setId(e.target.value)}/>
                <input type ="submit" value ="Submit"/>
            </form>
            {
                char ? <div>
                    <h2>{char.name}</h2>
                    <h2>{char.height}</h2>
                    <h2>{char.mass}</h2>
                    <h2>{char.hair_color}</h2>
                    <h2>{char.skin_color}</h2>
                    
                </div> : ""
    }
        </div>
    );
}

export default Home2;