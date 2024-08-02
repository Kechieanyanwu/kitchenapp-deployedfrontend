import PageHeader from "../components/PageHeader";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import AddItemButton from "../components/AddItemButton";


export default function AddItem() {
    return <div>
        <PageHeader title={"Checklist"} subtitle={"Create a Checklist so you don't miss a thing!"} />
        <div className="curved-section">
            <h1 className="add-item-header">Add Item</h1>
            <div className="new-item-details">
                <Form.Group>
                    <Form.Label>Item Name</Form.Label><br></br>
                    <Form.Control placeholder="Enter item name" />
                </Form.Group>
                <InputGroup className="mb-3">
                    <Button variant="outline-secondary" id="button-addon1">
                        Button
                    </Button>
                    <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1" />
                    <Button variant="outline-secondary" id="button-addon1">
                        Button
                    </Button>
                </InputGroup>
                <Form.Select>
                    <option>Select from dropdown</option>
                    <option value="1">Fruit</option>
                    <option value="2">Dairy</option>
                    <option value="3">Bakery</option>
                </Form.Select>
            </div>
            <AddItemButton />
        </div>
    </div>;
}
