import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState("");

  const API = "https://server-1-a50z.onrender.com";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(`${API}/api/auth/signup`, {
    name: 'soumya',
    email: 's@gmail.com',
    password: '12345'
  });
      console.log(res.data);
      alert(res.data.msg || "Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSignup}>
      <Box mt={5}>
        <Typography variant="h4">Signup</Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          onChange={handleChange}
          value={form.name}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          onChange={handleChange}
          value={form.email}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          margin="normal"
          onChange={handleChange}
          value={form.password}
        />
        <Button
          variant="contained"
          fullWidth
          type='submit'
          sx={{ mt: 2 }}
        >
          Signup
        </Button>
      </Box>
      </form>
    </Container>
  );
};

export default Signup;
