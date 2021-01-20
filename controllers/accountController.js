const unibeData = require('../data/unibeDB');

const addAccount = async (req, res) => {
  try {
    const data = req.body;
    const create = await unibeData.createAccount(data);
    res.send(create);
  } catch (e) {
    res.status(400).send(error.message);
  }
};

const getEmailAccountByID = async (req, res) => {
  try {
    const careerID = req.params.id;
    const emailElement = await unibeData.getEmailAccountByID(careerID);
    res.send(emailElement);
  } catch (e) {
    res.status(400).send(e.message);
  }
};


const updateEmailAccountByID = async (req, res) => {
  try {
    const studentID = req.params.id;
    const data = req.body;
    const update = await unibeData.updateEmailAccountByID(studentID, data);
    res.send(update);
  } catch (e) {
    res.status(400).send(error.message);
  }
};


const getAllAccounts = async (req, res) => {
  try {
    const accountList = await unibeData.getAllAccounts();
    res.send(accountList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addAccount,
  getEmailAccountByID,
  updateEmailAccountByID,
  getAllAccounts
};
