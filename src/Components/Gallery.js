import React, { useState , useEffect } from 'react';
import axios from 'axios' ;
import {Container,Row,Col,Image} from 'react-bootstrap';

function Gallery() {
    const[Photo ,setPhoto] =useState([]);
    const[Photo1 ,setPhoto1] =useState([]);
    const[Photo2 ,setPhoto2] =useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/data")
        .then(response=>(setPhoto(response.data)))
        .catch(error=>console.log(error))

    }, []);
    useEffect(()=>{
        axios.get(" http://localhost:3003/data")
        .then(response=>(setPhoto1(response.data)))
        .catch(error=>console.log(error))

    }, []);
    useEffect(()=>{
        axios.get("http://localhost:3004/data")
        .then(response=>(setPhoto2(response.data)))
        .catch(error=>console.log(error))

    }, []);



    return (
        <div> 
            
                <Container>
                    <Row className="text-center">
                     <Col lg={4} md={3} sm={6}>
                        {Photo.map(item => {
                            return (<div><p>
                                <img src={item.download_url}
                                 alt="photo1"
                                 height= "200"
                                 width="300"
                                 fluid/>
                                 </p>
                                </div>)
                        })}
                        </Col>
                        <Col lg={4} md={3} sm={6}>
                        {Photo1.map(item => {
                            return (<div><p>
                                <img src={item.download_url}
                                 alt="photo1"
                                 height= "200"
                                 width="300"
                                 fluid/>
                                 </p>
                                </div>)
                        })}
                        </Col>
                        <Col lg={4} md={3} sm={6}>
                        {Photo2.map(item => {
                            return (<div><p>
                                <img src={item.download_url}
                                 alt="photo1"
                                 height= "200"
                                 width="300"
                                 fluid/>
                                 </p>
                                </div>)
                        })}
                        </Col>
                        </Row>
               </Container>
              
        </div>
    )
}
export default Gallery