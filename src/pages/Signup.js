import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({
  name: '',
  email: '',
  password: ''
});

  const API = "https://server-1-a50z.onrender.com";

  const navigate=useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/signup`,form);
      console.log(res.data);
      alert(res.data.msg);
      navigate("/login")
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4">Signup</Typography>
        <TextField fullWidth label="Name" name="name" value={form.name} margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Email" name="email" value={form.email} margin="normal" onChange={handleChange} />
        <TextField fullWidth label="Password" name="password"  value={form.password} type="password" margin="normal" onChange={handleChange} />
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSignup}>Signup</Button>
      </Box>
    </Container>
  );
};

export default Signup;
