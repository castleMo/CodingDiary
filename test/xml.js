const express = require('express')
const data = require("./data");
const xmlParser = require("express-xml-bodyparser");
const fs = require("fs");

const router = express.Router();

const XML_FILE_PATH = './xml';
const OADR_PATH = '/OpenADR2/Simple/2.0b'

const getBodyAndConsoleLog = (req, isLog = false) => {
	const data = req.body['ns3:oadrpayload']['ns3:oadrsignedobject'];

	if (isLog) {
		console.log(JSON.stringify(data, null, 2));
	}

	return data;
}

const getXml = (name) => {
	return fs.readFileSync(`${XML_FILE_PATH}/${name}`).toString();
}

router.use(xmlParser());

router.use((req, res, next) => {
	console.log('===============XML=====================');
	console.log(`method: ${req.method}`);
	console.log(`url: ${req.url}`);
	console.log(`req.params: ${JSON.stringify(req.params, null, 2)}`);
	console.log(`req.body: ${JSON.stringify(req.body, null, 2)}`);
	console.log('===============XML=====================\n\n');
	next();
});

let isEvent = false;
router.post('/OadrPoll', (req, res) => {
	let xml;

	if(isEvent) {
		xml = getXml('oadrDistributeEvent.xml');
	} else {
		xml = getXml('oadrResponse.xml');
	}

	isEvent = !isEvent;
	res.send(xml);
});

router.post('/EiEvent', (req, res) => {
	const body = getBodyAndConsoleLog(req)[0];

	let xml = '';
	if (body['ns3:oadrcreatedevent']) {
		xml = getXml('oadrResponse.xml');
	}

	res.send(xml).status(200);
});

router.post('/EiRegisterParty', (req, res) => {
	const body = getBodyAndConsoleLog(req)[0];

	let xml = '';
	if (body['ns3:oadrcreatepartyregistration']) {
		xml = getXml('oadrCreatePartyRegistration-oadrCreatedPartyRegistration.xml');
	}

	res.send(xml).status(200);
});

router.post('/EiReport', (req, res) => {
	const body = getBodyAndConsoleLog(req)[0];

	let xml = '';
	if (body['ns3:oadrregisterreport']) {
		xml = getXml('oadrRegisteredReport.xml');
	} else if(body['ns3:oadrupdatereport']) {
		xml = getXml('oadrUpdatedReport.xml');
	} else if(body['ns3:oadrregisterreport']) {
		xml = getXml('oadrRegisteredReport.xml');
	} else if(body['ns3:oadrcreatedreport']) {
		xml = getXml('oadrResponse.xml');
	}

	res.send(xml).status(200);
});

module.exports = router;