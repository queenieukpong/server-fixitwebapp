import User from '../models/userModel.js';

// Get user profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ error: 'User Not Found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
