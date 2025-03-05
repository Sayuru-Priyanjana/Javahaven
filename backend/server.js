const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');
const bcrypt = require('bcryptjs');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Register a new user
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide name, email, and password.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, hashedPassword], function(err) {
        if (err) {
            return res.status(400).json({ message: 'Registration failed. Email may already be in use.' });
        }
        res.status(201).json({ message: 'User registered successfully!', userId: this.lastID });
    });
});

// Login a user
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password.' });
    }

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred during login.' });
        }
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        res.status(200).json({ message: 'Login successful!', userId: user });
    });
});


// Endpoint to handle order submissions
app.post('/api/orders', (req, res) => {
    const { user_email, coffee_title, coffee_price } = req.body;
    console.log(req.body);

    if (!user_email || !coffee_title || !coffee_price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const query = `INSERT INTO orders (user_email, coffee_title, coffee_price) VALUES (?, ?, ?)`;
    db.run(query, [user_email, coffee_title, coffee_price], function(err) {
        if (err) {
            console.error('Error inserting order:', err.message);
            return res.status(500).json({ error: 'Failed to insert order' });
        }

        res.status(201).json({ message: 'Order placed successfully', orderId: this.lastID });
    });
});

// Endpoint to handle reservation submissions
app.post('/api/reservations', (req, res) => {
    const { user_email, date, time, guests, name, phone } = req.body;

    if (!user_email || !date || !time || !guests || !name || !phone) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const query = `
        INSERT INTO reservations (user_email, date, time, guests, name, phone)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.run(query, [user_email, date, time, guests, name, phone], function(err) {
        if (err) {
            console.error('Error inserting reservation:', err.message);
            return res.status(500).json({ error: 'Failed to insert reservation' });
        }

        res.status(201).json({ message: 'Reservation created successfully', reservationId: this.lastID });
    });
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});