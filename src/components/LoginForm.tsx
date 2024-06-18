import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

interface FormData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const [formData, setformData] = useState<FormData>({
        email:"",
        password:"",
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setformData({...formData, [name]: value })
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        window.alert("submitted!");
    }

    return (
        <div className="signup-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
