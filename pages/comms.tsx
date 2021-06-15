import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { stringify } from 'querystring';

export default function comms(){
    const [newDiv, setDiv] = useState(<></>);
    const handleClick = () => setDiv(newDiv + (<h1>Hello!</h1>));
        //setDiv({content : "<h1>Player</h1>"});
    const renderChats = () => {return(newDiv)}            
    return (
        <div className="container">
            <div><button onClick={() => handleClick()}>Add Participant</button></div>
            <div>{renderChats()}</div>
        </div>
    );
}