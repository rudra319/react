import React, { useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import './Legends.css'
import { useParams } from 'react-router-dom';

export default function Legends (){

const [flag, setFlag] = useState(false);
let { lang = "",id = 0 } = useParams();
console.log("useParams::::",lang, id)
    return(
        <Container fluid>
            <h1>Legends Home</h1>
</Container>
    )

};
