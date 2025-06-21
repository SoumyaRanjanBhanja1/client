import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const API = "https://server-1-a50z.onrender.com";

  const navigate=useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, form);
      console.log(res.data.token);
      alert(`Welcome ${res.data.user.name}`);
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4">Login</Typography>
        <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} />
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
      </Box>
    </Container>
  );
};

export default Login;
