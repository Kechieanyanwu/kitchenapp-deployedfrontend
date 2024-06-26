import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FormData } from "../utils/interfaces";

export default function LoginForm() {
    const [formData, setformData] = useState<FormData>({
        email:"",
        password:"",
    });

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setformData({...formData, [name]: value })
    }

    async function handleSubmit(e: FormEvent) {   
        e.preventDefault();
        setError(null); //clear previous errors
        
        try {
            const response = await fetch('https://kitchen-app-backend-two.vercel.app/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('auth_token', data.auth_token);
                console.log('Login successful:', data);
                navigate('/home');
            } else {
                throw new Error('Network response was not ok');
            }

        } catch (error) {
            console.error('There was a problem with the login request: ', error);
            setError('Login failed. Please check your email and password');
        }

        // window.alert("submitted!");         
    }

    return (
        <div className="login-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group>    
                    <Form.Control 
                    className="custom-input" 
                    type="email" 
                    name="email" 
                    value={formData.email}  
                    onChange={handleChange} 
                    placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    className="custom-input"
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Password" />
                </Form.Group>
                <Button className="submit-button" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
