const unibeData = require('../data/unibeDB');

const getRatingsById = async (req, res) => {
  try {
    const studentID = req.params.id;
    const ratingElement = await unibeData.getRatingsById(studentID);
    res.send(ratingElement);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getRatingsById,
};
