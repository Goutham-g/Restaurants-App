import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
// import { getRestaurant } from '../actions/restAction';


function SingleView() {

    let params = useParams();
    const [restAll, setRestAll] = useState([])

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // fetchShop();
    //     dispatch(getRestaurant)
    // }, []);

    // const restaurants = useSelector(state => state.restReducer.restLis)

    // console.log(restaurants);

    const fetchRest = async () => {
        var res = await fetch('/restaurants.json')
        res.json().then(data => setRestAll(data.restaurants))
    }
    console.log(restAll);
    useEffect(() => {
        fetchRest()
    }, [])



    const singleDetail = restAll.find(i => i.id == params.id);
    console.log(singleDetail);


    // react bootstrap
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        // <>gsdfgsdggfgds</>
        <div>
            {
                singleDetail ?
                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <img src={singleDetail.photograph} alt="" width="300" />
                                </div>

                                <div class="col-md-6 c0l-sm-12 ">
                                    <h1>{singleDetail.name}</h1>
                                    <h3>Neighborhood : {singleDetail.neighborhood}</h3>
                                    <div>
                                        <h5>Address: {singleDetail.address}</h5>
                                        <p>Cuisine Type : {singleDetail.cuisine_type}</p>
                                    </div>

                                    <div class="d-flex">
                                        <Button variant="primary" onClick={handleShow}>
                                            Operating Hours
                                        </Button>

                                        <Modal className='text-dark' show={show} onHide={handleClose}>
                                            <Modal.Header >
                                                <Modal.Title>Operating Hours</Modal.Title>
                                            </Modal.Header >
                                            <Modal.Body className='text-dark '>
                                                <h5>Monday: {singleDetail.operating_hours.Monday}</h5>
                                                <h5>Tuesday: {singleDetail.operating_hours.Tuesday}</h5>
                                                <h5>Wednesday: {singleDetail.operating_hours.Wednesday}</h5>
                                                <h5>Thursday: {singleDetail.operating_hours.Thursday}</h5>
                                                <h5>Friday: {singleDetail.operating_hours.Friday}</h5>
                                                <h5>Saturday: {singleDetail.operating_hours.Saturday}</h5>
                                                <h5>Sunday: {singleDetail.operating_hours.Sunday}</h5>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <div>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Reviews</Accordion.Header>
                                                <Accordion.Body>
                                                    <h3>{singleDetail.reviews[0].name}</h3>
                                                    <p>{singleDetail.reviews[0].date}</p>
                                                    <p>{singleDetail.reviews[0].rating}</p>
                                                    <p>{singleDetail.reviews[0].comments}</p>
                                                    <hr />
                                                    <h3>{singleDetail.reviews[1].name}</h3>
                                                    <p>{singleDetail.reviews[1].date}</p>
                                                    <p>{singleDetail.reviews[1].rating}</p>
                                                    <p>{singleDetail.reviews[1].comments}</p>
                                                    <hr />
                                                    <h3>{singleDetail.reviews[2].name}</h3>
                                                    <p>{singleDetail.reviews[2].date}</p>
                                                    <p>{singleDetail.reviews[2].rating}</p>
                                                    <p>{singleDetail.reviews[2].comments}</p>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    : <h1>No Contact Found</h1>
            }


        </div>
    )
}

export default SingleView