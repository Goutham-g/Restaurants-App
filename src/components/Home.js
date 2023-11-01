import React, { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from '../actions/restAction';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';







function Home() {
    const dispatch = useDispatch()

    // const [restaurantDetails, setRestaurants] = useState([]);


    // const fetchShop = async () => {
    //     var result = await fetch('/restaurants.json');
    //     result.json().then(data =>

    //         setRestaurants(data.restaurantDetails)

    //     )


    // }

    // console.log('aabc', restaurantDetails);


    useEffect(() => {
        // fetchShop();
        dispatch(getRestaurant)
    }, []);

    const restaurants = useSelector(state => state.restReducer.restLis)

    console.log(restaurants);


    return (
        <div>
            <section className="home" >
                <div className="home-text ">
                    <h1>Restaurant</h1>
                    <h2>
                        Food the <br />
                        Most precious things
                    </h2>
                    <p>Good food is very often even most often simple food</p>
                    <a href="#" className="button">
                        Learn More
                    </a>
                </div>
                <div className="home-img">
                    <img src="/home.png" alt=" Home" />
                </div>

            </section>


            <div className="heading">
                <h1>Restaurants</h1>
                <h2>Fresh taste and great price</h2>
            </div>


            <Container>


                <Row>


                    {
                        restaurants.map(i => (
                            <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                                <Link to={`view/${i.id}`} style={{ textDecoration: "none" }}>
                                    <div className="menu menu-container ">
                                        <Card style={{ width: '17rem' }} className='p-3 box  '>
                                            <Card.Img variant="top" className='box-img' src={i.photograph} />
                                            <Card.Body>
                                                <Card.Title>{i.name}</Card.Title>
                                                <Card.Text>
                                                    {i.address}
                                                </Card.Text>
                                                <Button variant="primary">View</Button>
                                            </Card.Body>
                                        </Card>

                                    </div>

                                </Link>



                            </Col>


                        ))
                    }






                </Row>
            </Container>





        </div >









    )
}

export default Home