
'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');



const getCareer = async () => {
	let dataConnect = await sql.connect(config.sql);
	const sqlQueries = await utils.loadSqlQueries('unibeDB');

	try {
		const careerList = await dataConnect.request().query(sqlQueries.career);
		return careerList.recordset;
	} catch (error) {
		console.log(error.message);
	}
}

const getCareerById = async (studentID) => {
	let dataConnect = await sql.connect(config.sql);
	const sqlQueries = await utils.loadSqlQueries('unibeDB');
	try {
		const career = await dataConnect.request()
			.input('studentID', sql.Int, studentID)
			.query(sqlQueries.careerByID);
		return career.recordset;
	} catch (error) {
		return error.message;
	}
}

module.exports = {
	getCareer,
	getCareerById
}

