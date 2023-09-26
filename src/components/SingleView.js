import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../actions/restAction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';


function SingleView() {

    let params = useParams();

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getRestaurant)
    }, []);

    const restaurants = useSelector(state => state.restReducer.restLis);


    const singleDetail = restaurants.find(i => i.id == params.id);
    console.log(singleDetail);


    //react bootstrap
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            {
                singleDetail ?
                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src={singleDetail.photograph} alt="" width="400" />
                                </div>

                                <div class="col-md-6">
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

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Operating Hours</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h4>Monday: {singleDetail.operating_hours.Monday}</h4>
                                                <h4>Tuesday: {singleDetail.operating_hours.Tuesday}</h4>
                                                <h4>Wednesday: {singleDetail.operating_hours.Wednesday}</h4>
                                                <h4>Thursday: {singleDetail.operating_hours.Thursday}</h4>
                                                <h4>Friday: {singleDetail.operating_hours.Friday}</h4>
                                                <h4>Saturday: {singleDetail.operating_hours.Saturday}</h4>
                                                <h4>Sunday: {singleDetail.operating_hours.Sunday}</h4>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={handleClose}>
                                                    Save Changes
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