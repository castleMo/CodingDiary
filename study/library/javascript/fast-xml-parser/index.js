const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const XMLdata = `<?xml version="1.0" encoding="utf-8"?>
<oadrPayload xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="http://openadr.org/oadr-2.0b/2012/07">
    <oadrSignedObject>
        <oadrPoll d3p1:schemaVersion="2.0b"
            xmlns:d3p1="http://docs.oasis-open.org/ns/energyinterop/201110">
            <d3p1:venID>VEN_ID_HERE</d3p1:venID>
        </oadrPoll>
    </oadrSignedObject>
</oadrPayload>
`;

/*
const parserDefaultOptions = {
	preserveOrder: false,
	attributeNamePrefix: '@_',
	attributesGroupName: false,
	textNodeName: '#text',
	ignoreAttributes: true,
	removeNSPrefix: false, // remove NS from tag name or attribute name if true
	allowBooleanAttributes: false, //a tag can have attributes without any value
	//ignoreRootElement : false,
	parseTagValue: true,
	parseAttributeValue: false,
	trimValues: true, //Trim string values of tag and attributes
	cdataPropName: false,
	numberParseOptions: {
		hex: true,
		leadingZeros: true,
		eNotation: true
	},
	tagValueProcessor: function(tagName, val) {
		return val;
	},
	attributeValueProcessor: function(attrName, val) {
		return val;
	},
	stopNodes: [], //nested tags will not be parsed even for errors
	alwaysCreateTextNode: false,
	isArray: () => false,
	commentPropName: false,
	unpairedTags: [],
	processEntities: true,
	htmlEntities: false,
	ignoreDeclaration: false,
	ignorePiTags: false,
	transformTagName: false,
	transformAttributeName: false,
};
*/

const parserOptions = {
	ignoreAttributes: false,
}

const parser = new XMLParser(parserOptions);
let jObj = parser.parse(XMLdata);
console.log(JSON.stringify(jObj, null, 2));

console.log('\n\n\n');

const builder = new XMLBuilder();
const xmlContent = builder.build(jObj);
console.log(xmlContent);