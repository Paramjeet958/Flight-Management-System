// controllers/authController.js
const { sendMail } = require('../services/emailService');

// Example user registration function
async function registerUser(req, res) {
  try {
    const { email } = req.query.email;

    // Add logic to save user to the database

    // Send confirmation email
    await sendMail(
      email,
      'Confirm your email',
      'Please confirm your email by clicking on the following link...'
    );

    res.status(200).send('User registered successfully. Confirmation email sent.');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('An error occurred while registering the user.');
  }
}

module.exports = { registerUser };
