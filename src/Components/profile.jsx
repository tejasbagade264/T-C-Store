import React, { useState } from 'react';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState('123 Example Street, City, Country');
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleAddressEditing = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img
          src="h&m tee.jpeg" // Replace with the URL of the user's profile picture
          alt="User Profile"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2>User Name</h2>
          <div className={styles.addressContainer}>
            {isEditingAddress ? (
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className={styles.addressInput}
              />
            ) : (
              <p>{address}</p>
            )}
            <button
              onClick={toggleAddressEditing}
              className={styles.editAddressButton}
            >
              {isEditingAddress ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
        <div className={styles.profileMenu}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            Options
          </button>
          {menuVisible && (
            <div className={styles.menuOptions}>
              <ul>
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Address</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
