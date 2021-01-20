const unibeData = require('../data/unibeDB');

const getStudentById = async (req, res) => {
  try {
    const studentID = req.params.id;
    const studentElement = await unibeData.getStudentById(studentID);
    res.send(studentElement);

    //setTimeout((function() {res.send(studentElement)}), 5000);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getStudentById,
};
