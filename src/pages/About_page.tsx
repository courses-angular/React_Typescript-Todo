import React from 'react';
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () =>{
    const history = useHistory()
    return (
        <>
            <h1>Page About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos natus nemo numquam ullam? Alias architecto, cupiditate doloribus fuga fugit illum inventore non reiciendis repellendus unde? Consequatur earum placeat voluptatibus.</p>
            <button  className="waves-effect waves-light btn purple darken-2 " onClick={()=> history.push('/')}>Back to  list</button>
        </>
    )
}
