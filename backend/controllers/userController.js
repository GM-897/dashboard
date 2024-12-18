const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    console.log("working..user saved")
    
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const createUser = async (req, res) => {
  try {
    const {name, email,password,role, status} = req.body;
    const newUser = new User({ name, email,password,role, status });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const {role, status} = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {role, status},
      { new: true }
    );
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};

//Made By Manmohit