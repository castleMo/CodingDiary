const data = {
	sites: [],
};

const createSites = () => {
	for(let i = 0; i < 3; i++) {
		const intervalList = [];

		for (let j = 10; j <= 30; j += 10) {
			intervalList.push({
				startTimestamp: Date.now(),
				value: j,
				uId: j / 10,
				confidence: 100,
				accuracy: 0.0,
				oadrDataQuality: 'Quality Good - Non Specific',
			})
		}

		data.sites.push({
			kepcoCode: `kepcoCode${i}`,
			reportRequestId: null,
			id: `reportId-${i}`,
			reportDuration: 5,
			reportSpecifierId: 'KPX_TU',
			reportName: 'METADATA_TELEMETRY_USAGE',
			intervalList,

			duration: 0,
			reportType: 'usage',
			readingType: 'Direct Read',
			marketContext: 'http://dras.kmos.kr',
			resourceId: 'KpxResource',
			itemDescription: 'RealEnergy',
			itemUnits: 'Wh',
			siScaleCode: 'k',
			minPeriodMinutes: 1,
			maxPeriodMinutes: 15,
			oadrOnChange: false,
		});
	}
}

createSites();

module.exports = data;