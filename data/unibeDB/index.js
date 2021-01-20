'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

// ================================
// career
// ================================

const getCareer = async () => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const careerList = await dataConnect.request().query(sqlQueries.career);
    return careerList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getCareerById = async careerID => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const career = await dataConnect
      .request()
      .input('careerID', sql.Int, careerID)
      .query(sqlQueries.careerByID);
    return career.recordset;
  } catch (error) {
    return error.message;
  }
};

// ================================
// student
// ================================

const getStudentById = async studentID => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const student = await dataConnect
      .request()
      .input('studentID', sql.Int, studentID)
      .query(sqlQueries.studentByID);
    return student.recordset;
  } catch (e) {
    return e.message;
  }
};

// ================================
// ratings
// ================================

const getRatingsById = async studentID => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const rating = await dataConnect
      .request()
      .input('studentID', sql.Int, studentID)
      .query(sqlQueries.ratingsByID);
    return rating.recordset;
  } catch (e) {
    return e.message;
  }
};

// ================================
// period
// ================================

const getAllPeriodsById = async studentID => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const period = await dataConnect
      .request()
      .input('studentID', sql.Int, studentID)
      .query(sqlQueries.periodByID);
    return period.recordset;
  } catch (e) {
    return e.message;
  }
};

// ================================
// registration
// ================================

const getRegistrationByID = async studentID => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const period = await dataConnect
      .request()
      .input('studentID', sql.Int, studentID)
      .query(sqlQueries.registrationByID);
    return period.recordset;
  } catch (e) {
    return e.message;
  }
};

// ================================
// accounts
// ================================
const createAccount = async studentData => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const insertAccount = await dataConnect
      .request()
      .input('studentID', sql.Int, studentData.studentID)
      .input('name', sql.NVarChar(60), studentData.name)
      .input('lastName', sql.NVarChar(60), studentData.lastName)
      .input('career', sql.NVarChar(60), studentData.career)
      .input('email', sql.NVarChar(60), studentData.email)
      .query(sqlQueries.createAccount);
    return insertAccount.recordset;
  } catch (e) {
    return e.message;
  }
};

// ================================
// ACCOUNT BY ID
// ================================

const getEmailAccountByID = async studentID => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const emailAccount = await dataConnect
      .request()
      .input('studentID', sql.Int, studentID)
      .query(sqlQueries.accountByID);
    return emailAccount.recordset;
  } catch (e) {
    return e.message;
  }
};

// ================================
// ALL ACCOUNTS
// ================================

const getAllAccounts = async () => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const accountList = await dataConnect.request().query(sqlQueries.account);
    return accountList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

// ================================
// UPDATE ACCOUNT
// ================================
const updateEmailAccountByID = async (studentID, newEmail) => {
  let dataConnect = await sql.connect(config.sql);
  const sqlQueries = await utils.loadSqlQueries('unibeDB');
  try {
    const update = await dataConnect
      .request()
      .input('studentID', sql.Int, studentID)
      .input('email', sql.NVarChar(60), newEmail.email)
      .query(sqlQueries.updateAccountByID);
    return update.recordset;
  } catch (e) {
    return e.message;
  }
};
module.exports = {
  getCareer,
  getCareerById,
  getStudentById,
  getRatingsById,
  getAllPeriodsById,
  getRegistrationByID,
  createAccount,
  getEmailAccountByID,
  updateEmailAccountByID,
  getAllAccounts
};
