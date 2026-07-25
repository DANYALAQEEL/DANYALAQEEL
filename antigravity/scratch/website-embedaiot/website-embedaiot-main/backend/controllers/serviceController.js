const Service = require("../models/Service");

// CREATE SERVICE
const createService = async (req, res) => {
  try {
    const serviceData = { ...req.body };
    if (req.file) {
      serviceData.image = req.file.filename;
    }
    const service = await Service.create(serviceData);
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL SERVICES
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE SERVICE
const getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE SERVICE
const updateService = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = req.file.filename;
    }
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } 
    );
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE SERVICE
const deleteService = async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createService,
  getServices,
  getSingleService,
  updateService,
  deleteService,
};