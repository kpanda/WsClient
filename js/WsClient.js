/**
 * 
 * This is a self-invoking function.
 *
 */

( function () { 
	//code goes here
	
	var productServiceUrl = 'http://localhost:57299/ProductService.asmx?op=SaveProduct'; // Preferably write this out from server side

	var coherenceReq = '';
	coherenceReq = '<Search xmlns="http://model.businessobjects.domain.gcrm.ist.apple.com"> \
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

	WsClient = wsc = function () {
	
		alert('Welcome... ');
	};
	
	wsc.beginSaveProduct = function (productServiceUrl , coherenceReq) { 

		//now call the AJAX services
		$.ajax({
			url: productServiceUrl,
			type: "POST",
			dataType: "xml",
			data: coherenceReq,
			complete: function(xml, status)
			{
				console.info('status is', status); 
				console.info('XML result is',xml.responseText); 
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
	
  } 
) ();