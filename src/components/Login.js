import React ,{useState,useRef}from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import {Link,  useNavigate} from "react-router-dom";
import { useAuth } from '../contexts/Auth';

export default function Signup() {
    const emailRef = useRef()
  const passwordRef = useRef()

  const { Login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

   

    
  
  try {
    setError("")
    setLoading(true)
    await Login(emailRef.current.value,passwordRef.current.value)
    history("/")
  } catch (error) {
    setError("failed to signin")
    
  }
  setLoading(false)
}



    return (
        <>
        <Card><Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            
            <Button disabled={loading} className="w-100" type="submit">
              login
            </Button>
          </Form>
        </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
            dont have an account? <Link to="/register">Log In</Link>
            </div>
        
        </>
            
        
    )
}
