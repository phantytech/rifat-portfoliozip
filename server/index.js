import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const contactMessages = [];

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString()
  };
  
  contactMessages.push(newMessage);
  console.log('New contact message received:', newMessage);
  
  res.status(200).json({ 
    success: true, 
    message: 'Message received successfully' 
  });
});

app.get('/api/messages', (req, res) => {
  res.json(contactMessages);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
