import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { SignUpFormData } from "../utils/interfaces";
import { NewUser } from "../utils/interfaces";

export default function SignUpForm() {
    const [formData, setformData] = useState<SignUpFormData>({
        username:"",
        email:"",
        password:"",
        confirmPassword:""

    });

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();    

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setformData({...formData, [name]: value })
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // window.alert("submitted!");
        setError(null); // clear previous errors

        try {
            const response = await fetch('https://kitchen-app-backend-two.vercel.app/user/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newUser:NewUser = await response.json();
                window.alert("Welcome, " + newUser.username)
                navigate('/login');
            }
        } catch (error) {
            console.error('There was a problem with the signup request: ', error);
            setError('Sign up failed, please try again');
        }

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
