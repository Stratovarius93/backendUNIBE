const unibeData = require('../data/unibeDB');

const getRegistrationByID = async (req, res) => {
  try {
    const studentID = req.params.id;
    const studentElement = await unibeData.getRegistrationByID(studentID);
    res.send(studentElement);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getRegistrationByID,
};
