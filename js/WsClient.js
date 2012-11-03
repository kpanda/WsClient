/**
* 
* This is a self-invoking function.
*
*/
WsClient = wsc = function () {

	/****************************************************************
	 **	VARIABLES
	 ***************************************************************/
	wsc.SERVICE_URL = 'http://localhost:57299/ProductService.asmx?op=SaveProduct';

	wsc.REQ = '';
	wsc.REQ = '<Search xmlns="http://model.businessobjects.domain.gcrm.ist.apple.com"> \
	<TotalCountInResponse>true</TotalCountInResponse> \
	<ResultSize>1000</ResultSize> \
	<DiagnosticsEnabled>false</DiagnosticsEnabled> \
	<TransactionID>410ab469-b342-419e-87cd-123744323e81</TransactionID> \
	<AppID>supertramp.corp.apple.com</AppID> \
	<SearchMap> \
		<entry> \
			<SearchRequest> \
				<SearchCriteria> \
					<field>COMPANY_BO_ID</field> \
					<operator>EQUALS</operator> \
					<value>423174</value> \
				</SearchCriteria> \
				<operatorType>NO_OP</operatorType> \
			</SearchRequest> \
			<Operator>NO_OP</Operator> \
		</entry> \
	</SearchMap> \
	</Search>';

	/****************************************************************
	 **	LOGGER
	 ***************************************************************/
	//----- BEGINS: void modifying this code----//
	// This package is used to print the logs in the console of a web browsers like firefox.

	//create main logger package
	wsc.logger = function() {
	
		//this package variable is used to set the logging...
		// ... set it true, if you want to print the logs in console...
		// ... set it false, if you DO NOT want to print the logs in console.
		wsc.logger.LOG = true;	
	
		//this sub-package is used to print the logs in INFORMATION manner
		wsc.logger.info = function(msg){
			if (wsc.logger.LOG) {
				console.info(msg);
			}
		};
	
		//this sub-package is used to print the logs in WARNING manner
		wsc.logger.warn = function(msg){
			if (wsc.logger.LOG) {
				console.warn(msg);
			}
		};
	
		//this sub-package is used to print the logs in ERROR manner
		wsc.logger.error = function(msg){
			if (wsc.logger.LOG) {
				console.error(msg);
			}
		};
	};
	
	//initialize this package
	wsc.logger();
	//----- END: Avoid modifying this code----//
	

	/****************************************************************
	 **	Web Services 
	 ***************************************************************/
	wsc.hitWS = function (productServiceUrl , coherenceReq) { 
	
		//now call the AJAX services
		$.ajax({
			url: wsc.SERVICE_URL ,
			type: "POST",
			dataType: "xml",
			data: wsc.REQ ,
			complete: function(xml, status)
			{
				console.info('status is', status); 
				console.info('XML result is', xml.responseText); 
			},
			contentType: "application/xml"
		});
	
		return false;
	};
	
	wsc.beginSaveProduct = function (xml) {
	
		/*
		$(xml).find('Response').each(function(){
		  var cid = $(this).find('cfgId').text();
		  if(cid==cfgid) {   
			// Now grab the entitiy string
			var newXmlString = $(xml).find('recommendations').text(); 
			// Convert the entities to HTML and return a jQuery object
			var newXml = $("<div/>").html(newXmlString);
		
			// NOW we can get at the inner XML
			var ruleseverity=$(newXml).find('severity').text();
			if(ruleseverity=="warning")  {
			  var rulename=$(newXml).find('name').text();
			  var rulecategory=$(newXml).find('category').text();
			  var ruleresult=$(newXml).find('ruleEvalResult').text();
			  var ruleactionresult=$(newXml).find('actionResult').text();
				htmlTable.append('<tr><td>RuleName:'+rulename+'</td><td>RuleResult: '+ruleactionresult+'</td></tr>');
			}           
		  }
		});
		*/
	};

	/****************************************************************
	 **	INIT of wsc (WsClient) package
	 ***************************************************************/
	wsc.init = function(){
	
	
	};

};