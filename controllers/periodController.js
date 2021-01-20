const unibeData = require('../data/unibeDB');

const getAllPeriodsById = async (req, res) => {
  try {
    const studentID = req.params.id;
    const periodElement = await unibeData.getAllPeriodsById(studentID);
    res.send(periodElement);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getAllPeriodsById,
};
