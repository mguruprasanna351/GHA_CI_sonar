const users = [];

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  
  const newUser = {
    id: Date.now().toString(),
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};