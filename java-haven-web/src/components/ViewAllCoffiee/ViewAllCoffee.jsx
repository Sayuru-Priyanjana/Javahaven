import React, { useState } from 'react';
import './ViewAllCoffee.css';
import coffeeImage from '../../assets/coffee2.png';
import { useContext } from 'react';
import { AlertContext } from '../../App';


// Sample coffee data
const coffees = [
    {
        id: 1,
        image: coffeeImage,
        title: 'Espresso',
        price: '$3.50',
        description: 'A strong and bold coffee with a rich flavor.A creamy coffee with a perfect balance of espresso,',
    },
    {
        id: 2,
        image: coffeeImage,
        title: 'Cappuccino',
        price: '$4.00',
        description: 'A creamy coffee with a perfect balance of espresso, steamed milk, and foam.',
    },
    {
        id: 3,
        image: coffeeImage,
        title: 'Latte',
        price: '$4.50',
        description: 'A strong and bold coffee with a rich flavor.A creamy coffee with a perfect balance of espresso,',
    },
    {
        id: 4,
        image: coffeeImage,
        title: 'Mocha',
        price: '$5.00',
        description: 'A strong and bold coffee with a rich flavor.A creamy coffee with a perfect balance of espresso,',
    },
];

const ViewAllCoffees = () => {
    const [selectedCoffee, setSelectedCoffee] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { showAlert } = useContext(AlertContext);
    

    const handleOrderClick = (coffee) => {
        setSelectedCoffee(coffee);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCoffee(null);
    };

    const handleProceed = async () => {
        const storedUser = localStorage.getItem('user');
        const user = JSON.parse(storedUser).email;
    
        const orderData = {
            user_email: user,
            coffee_title: selectedCoffee.title,
            coffee_price: selectedCoffee.price
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to place order');
            }
    
            const result = await response.json();
            // alert(`Order placed successfully!`);
            showAlert('Order placed successfully!', 'success');
        } catch (error) {
            console.error('Error placing order:', error);
            // alert('Failed to place order. Please try again.');
            showAlert('Failed to place order. Please try again.', 'error');
        } finally {
            closeModal();
        }
    };

    return (
        <section className="view-all-coffees">
            <h2 className="header">Our Coffee Selection</h2>
            <div className="coffee-grid">
                {coffees.map((coffee) => (


                    <div key={coffee.id} className="coffee-card">
                        <img src={coffee.image} alt={coffee.title} className="coffee-image" />
                        <div className="coffee-details">
                            <h3 className="coffee-title">{coffee.title}</h3>
                            <p className="coffee-price">{coffee.price}</p>
                            <p className="coffee-description">{coffee.description}</p>
                            <button className="order-button" onClick={() => handleOrderClick(coffee)}>
                                Order Now
                            </button>
                        </div>
                    </div>


                ))}
            </div>

            {/* Popup Modal */}
            {isModalOpen && selectedCoffee && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Place Your Order</h2>
                            <button className="close-button" onClick={closeModal}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-content">
                            <img src={selectedCoffee.image} alt={selectedCoffee.title} className="modal-image" />
                            <h3 className="modal-title">{selectedCoffee.title}</h3>
                            <p className="modal-price">{selectedCoffee.price}</p>
                            <p className="modal-description">{selectedCoffee.description}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="cancel-button" onClick={closeModal}>
                                Cancel
                            </button>
                            <button className="proceed-button" onClick={handleProceed}>
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ViewAllCoffees;