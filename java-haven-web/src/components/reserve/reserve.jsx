import React, { useState } from "react";
import "./reserve.css";
import reserve from "../../assets/reserve.png";
import { useContext } from 'react';
import { AlertContext } from '../../App';

function Reserve() {
    const { showAlert } = useContext(AlertContext);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guest: "",
        name: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            alert('You must be logged in to make a reservation.');
            showAlert('You must be logged in to make a reservation.', 'error');
            return;
        }

        const user = JSON.parse(storedUser).email;
        const reservationData = {
            user_email: user,
            date: formData.date,
            time: formData.time,
            guests: formData.guest,
            name: formData.name,
            phone: formData.phone,
        };

        try {
            const response = await fetch('http://localhost:5000/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (!response.ok) {
                throw new Error('Failed to create reservation');
                showAlert('Failed to create reservation. Please try again.', 'error');
            }

            const result = await response.json();
            showAlert('Reservation created successfully!', 'success');
            setFormData({
                date: "",
                time: "",
                guest: "",
                name: "",
                phone: "",
            });
        } catch (error) {
            console.error('Error creating reservation:', error);
            showAlert('Failed to create reservation. Please try again.', 'error');
        }
    };

    return (
        <div className="reserve">
            <h1 className="reserve-header">Reserve a Table</h1>
            <div className="reserve-container">
                <img className="reserve-image" src={reserve} alt="reserve" />
                <div className="reserve-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-single">
                            <input
                                type="date"
                                name="date"
                                id="date"
                                placeholder="Date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-multiple">
                            <input
                                type="time"
                                name="time"
                                id="time"
                                placeholder="Time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                name="guest"
                                id="guest"
                                placeholder="Number of Guests"
                                value={formData.guest}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </div>
                        <div className="form-single">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-single">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>
                        <button type="submit" className="reserve-submit">
                            Reserve Table
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reserve;