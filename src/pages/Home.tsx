import HomeHeader from "../components/HomeHeader";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { ItemCardProps } from "../utils/interfaces";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function ItemCard({ itemName, subtitle }: ItemCardProps) {
    //will use item name to get itemNumber. Let the card manage it's state. Can lift up if necessary
    const [itemNumber, setItemNumber] = useState<number | null>(null);

    useEffect(() => {
        async function fetchCount() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/${itemName}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItemNumber(data.count); //TO MODIFY backend AND GET AN ENDPOINT RETURNING THE COUNT OF ITEMS
            } catch (error) {
                console.error("Error fetching count:", error);
                setItemNumber(null);
            }
        }
        fetchCount();
    }, [itemName]);


    return (
        <Card className="home-card">
            <Card.Body>
                <Row>
                    <div className="card-row">
                        <div>
                            <Card.Title>{itemName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                            <Card.Text> Number of Items </Card.Text>
                            <p className="card-number">{itemNumber !== null ? itemNumber : 'Loading...'}</p>
                        </div>
                        <div className="card-button dark">
                            <Button variant="secondary" onClick={() => { window.alert("Adding new item")}}>+</Button>
                        </div>
                    </div>
                </Row>
            </Card.Body>
        </Card>
    )
}

function CardColumn() {
    return (
        <>
            <Row>
                <ItemCard itemName="Checklist" subtitle="Add items so you don't forget anything!" />
            </Row>
            <Row>
                <ItemCard itemName="Inventory" subtitle="Keep track of everything you have!" />
            </Row>
        </>
    )
}

function Home() {
    return (
        <>
            <HomeHeader />
            <CardColumn />
            <div className="footer-buttons">
                <NavBar />
            </div>
        </>
    )
}


export default Home;