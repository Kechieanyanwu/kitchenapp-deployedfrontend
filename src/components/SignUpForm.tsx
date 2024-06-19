import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignUpForm() {
    const [formData, setformData] = useState<FormData>({
        username:"",
        email:"",
        password:"",
        confirmPassword:""

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
                    <Form.Control className="custom-input" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="custom-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="custom-input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="custom-input" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                </Form.Group>
                <Button className="submit-button" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
