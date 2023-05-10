import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Segment, Header, Divider, Grid } from 'semantic-ui-react';

function HospitalList(props) {
    const [hospitals, setHospitals] = useState([]);

    const { city } = useParams;

    useEffect(() => {
        axios.get(`http://localhost:5002/api/hospitals/${city}`)
            .then(res => {
                const newHospitals = res.data.map(hospital => {
                    return {
                        address: `Address : ${hospital.address}`,
                        city: hospital.city,
                        name: hospital.username,
                        contact: `Contact : ${hospital.contact}`,
                        img: `../images/${hospital.img}`
                    }
                });
                setHospitals(newHospitals);
            })
            .catch(err => console.log("Error:" + err));
    }, [props.city]);

    const renderHospitals = () => {
        const hospitalCards = hospitals.map(hospital => {
            return {
                image: hospital.img,
                header: hospital.name,
                meta: hospital.contact,
                description: hospital.address
            };
        });
        return <Card.Group items={hospitalCards} centered />;
    }

    return (
        <Grid centered columns={2} style={{ marginTop: '20px' }}>
            <Grid.Column width={12}>
                <Segment>
                    <Header as="h3" color="grey" style={{ textAlign: "center" }}>
                        Please visit any one hospital from the given list, to get yourself approved!
                    </Header>
                    <Divider />
                    {renderHospitals()}
                </Segment>
            </Grid.Column>
        </Grid>
    );
}

export default HospitalList;
