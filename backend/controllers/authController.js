const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Helper: Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// @desc - Register User
// @routes - POST /api/auth/register
// @access - Public
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Please enter a valid email address'
            });
        }

        // Strong password validation
        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    'Password must be 8+ characters long and include 1 uppercase, 1 lowercase, 1 number, and 1 special character'
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create user
        const user = await User.create({ name, email, password });

        res.status(201).json({
            message: 'User registered successfully',
            token: generateToken(user._id)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc - Login User
// @routes - POST /api/auth/login
// @access - Public
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('+password');
        if (user && (await user.matchPassword(password))) {
            res.json({
                message: 'Login Successful',
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server Error' });
    }
};

// @desc - GET logged in User
// @routes - GET /api/auth/profile
// @access - Private
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            isPro: user.isPro
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc - Update User profile
// @routes - PUT /api/auth/me
// @access - Private
exports.updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (user) {
            user.name = req.body.name || user.name;

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name
            });
        } else {
            res.status(404).json({ message: 'User not found in the database' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
