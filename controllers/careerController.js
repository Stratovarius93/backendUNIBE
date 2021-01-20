const unibeData = require('../data/unibeDB');

const getCareer = async (req, res) => {
  try {
    const careerList = await unibeData.getCareer();
    res.send(careerList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCareerById = async (req, res) => {
  try {
    const careerID = req.params.id;
    const careerElement = await unibeData.getCareerById(careerID);
    res.send(careerElement);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getCareer,
  getCareerById,
};
