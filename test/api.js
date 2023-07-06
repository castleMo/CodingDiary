const express = require("express");
const data = require("./data");
const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(express.json())

router.use((req, res, next) => {
	console.log('===============API=====================');
	console.log(`method: ${req.method}`);
	console.log(`url: ${req.url}`);
	console.log(`req.params: ${JSON.stringify(req.params, null, 2)}`);
	console.log(`req.body: ${JSON.stringify(req.body, null, 2)}`);
	console.log(`req.query: ${JSON.stringify(req.query, null, 2)}`);
	console.log('===============API=====================');
	next();
});

/*
COMPANIES
 */
router.patch('/companies/:venName', (req, res) => {
	res.send({
		text: "success",
	})
});

/*
REPORTS
 */
router.get('/reports/update/:venName', (req, res) => {
	const list = data.sites.map((site) => {
		return {
			id: site.id,
			kepcoCode: site.kepcoCode,
			reportRequestId: site.reportRequestId,
			reportDuration: site.reportDuration,
			reportSpecifierId: site.reportSpecifierId,
			reportName: site.reportName,
			intervalList: site.intervalList,
		}
	});

	res.send(list);
});

router.get('/reports/register/:venName', (req, res) => {
	const list = data.sites.map((site) => {
		return {
			duration: site.reportDuration,
			reportSpecifierId: site.reportSpecifierId,
			reportName: site.reportName,
			rId: site.kepcoCode,
			reportType: site.reportType,
			readingType: site.readingType,
			marketContext: site.marketContext,
			resourceId: site.resourceId,
			itemDescription: site.itemDescription,
			itemUnits: site.itemUnits,
			siScaleCode: site.siScaleCode,
			minPeriodMinutes: site.minPeriodMinutes,
			maxPeriodMinutes: site.maxPeriodMinutes,
			oadrOnChange: site.oadrOnChange,
		}
	});

	res.send(list);
});

router.patch('/reports', (req, res) => {
	res.send({
		text: "success",
	});
});

/*
SITE
 */
router.patch('/sites', (req, res) => {
	req.body.list.forEach((dto) => {
		const idx = data.sites.findIndex((site) => site.kepcoCode === dto.kepcoCode);
		data.sites[idx].reportRequestId = dto.reportRequestId;
		data.sites[idx].granularity = dto.granularity;
		data.sites[idx].reportBackDuration = dto.reportBackDuration;
	});

	res.send({
		text: "success",
	})
});

module.exports = router;