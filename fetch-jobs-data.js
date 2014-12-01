function query1(company, jobtype, title, startDate, endDate) {
	
	/*url = "http://localhost:8983/solr/collection1/select?q=company%3A%22Gestion+Estrategica%22%0Ajobtype%3A%22Tiempo+Completo%22%0Atitle%3A%22Industria%22&fq=postedDate%3A%5B2012-11-01T00%3A00%3A00Z+TO+2012-11-30T00%3A00%3A00Z%5D&rows=0&wt=json&indent=true";
	
	$.ajax({
       type:'GET',
       url: url,
       success: function(data){
           alert('loaded: ' + data);
       },
       error: function(data){
           alert('error: ' + data);        
       }
    });*/

	var arr = new Object();
	arr["abc"] = 1;
	arr["xyz"] = 10;
	var jsonstring = JSON.stringify(arr);
	alert(jsonstring);
	
}

var i = 0;
var timedQuickAccessByCompany;
function query2(which) {
	var timedCountriesCount = [];
	var companiesList = ["Gestion Estrategica", "GB Consultora"];
	var dates = [["2012-01-01T00:00:00Z","2012-01-31T00:00:00Z", "Jan12"],
				["2012-02-01T00:00:00Z","2012-02-28T00:00:00Z", "Feb12"],
				["2012-03-01T00:00:00Z","2012-03-31T00:00:00Z", "Mar12"],
				["2012-04-01T00:00:00Z","2012-04-30T00:00:00Z", "Apr12"],
				["2012-05-01T00:00:00Z","2012-05-31T00:00:00Z", "May12"],
				["2012-06-01T00:00:00Z","2012-06-30T00:00:00Z", "Jun12"],
				["2012-07-01T00:00:00Z","2012-07-31T00:00:00Z", "Jul12"],
				["2012-08-01T00:00:00Z","2012-08-31T00:00:00Z", "Aug12"],
				["2012-09-01T00:00:00Z","2012-09-30T00:00:00Z", "Sep12"],
				["2012-10-01T00:00:00Z","2012-10-31T00:00:00Z", "Oct12"],
				["2012-11-01T00:00:00Z","2012-11-30T00:00:00Z", "Nov12"],
				["2012-12-01T00:00:00Z","2012-12-31T00:00:00Z", "Dec12"],
				["2013-01-01T00:00:00Z","2013-01-31T00:00:00Z", "Jan13"],
				["2013-02-01T00:00:00Z","2013-02-28T00:00:00Z", "Feb13"],
				["2013-03-01T00:00:00Z","2013-03-31T00:00:00Z", "Mar13"],
				["2013-04-01T00:00:00Z","2013-04-30T00:00:00Z", "Apr13"],
				["2013-05-01T00:00:00Z","2013-05-31T00:00:00Z", "May13"],
				["2013-06-01T00:00:00Z","2013-06-30T00:00:00Z", "Jun13"],
				["2013-07-01T00:00:00Z","2013-07-31T00:00:00Z", "Jul13"],
				["2013-08-01T00:00:00Z","2013-08-31T00:00:00Z", "Aug13"],
				["2013-09-01T00:00:00Z","2013-09-30T00:00:00Z", "Sep13"],
				["2013-10-01T00:00:00Z","2013-10-31T00:00:00Z", "Oct13"],
				["2013-11-01T00:00:00Z","2013-11-30T00:00:00Z", "Nov13"],
				["2013-12-01T00:00:00Z","2013-12-31T00:00:00Z", "Dec13"]];
	i = dates.length-1;

	var domains = new Object();
	domains.Technical = "Analista";
	domains.Residential = "Cocinero";
	domains.Business = "Consultor";
	var reverseDomains = new Object();
	reverseDomains.Analista = "Technical";
	reverseDomains.Cocinero = "Residential";
	reverseDomains.Consultor = "Business";
	var timedDomainCount = [];
	timedQuickAccessByCompany = new Object;
	var monthsIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	if( which == 1) {
		getCountriesCountByTime(companiesList, dates, dates[i][0], dates[i][1], timedCountriesCount);
	} else {
		getJobsCountByDomain(companiesList, dates, timedDomainCount, domains, reverseDomains, timedQuickAccessByCompany, monthsIndex);
	}
	

}


function getCountriesCountByTime(companiesList, dates, startDate, endDate, timedCountriesCount) {
	//var companyCountriesCount = [];
	var count = companiesList.length;
	var columnObject = new Object();
	columnObject["time"] = dates[i][2];

	for(var companyKey in companiesList) {
		var url = "http://localhost:8983/solr/collection1/select?q=company%3A%22"+encodeURIComponent(companiesList[companyKey])+"%22&fq=postedDate%3A["+encodeURIComponent(startDate)+"+TO+"+encodeURIComponent(endDate)+"]&wt=json&indent=true&group=true&group.field=country&group.limit=0";
		$.get(url, function(data) {
			var countryCount = $.parseJSON(data).grouped.country.groups.length;
			var company = $.parseJSON(data).responseHeader.params.q;
			company = company.substring(9,company.length-2);
			var dateIndex = $.parseJSON(data).responseHeader.params.fq;
			//alert(company + " : " + countryCount);
			count--;
			//companyCountriesCount.push([company,countryCount]);
			columnObject[company] = countryCount.toString();
			//console.log("companyCountriesCount : " + companyCountriesCount);
			if(count == 0) {
				//timedCountriesCount.push(companyCountriesCount);
				var temp = JSON.parse(JSON.stringify(columnObject));
				timedCountriesCount.push(temp);
				console.log("timedCountriesCount : " + timedCountriesCount);
				i--;
				if(i >= 0) {
					getCountriesCountByTime(companiesList, dates, dates[i][0], dates[i][1], timedCountriesCount);
				} else {
					//Call D3 function to populate/build a stacked column graph by using timedCountriesCount
					processData(timedCountriesCount);
				}
				
			}
		});
	}

	
}


function getJobsCountByDomain(companiesList, dates, timedDomainCount, domains, reverseDomains, timedQuickAccessByCompany, monthsIndex) {
	var count = companiesList.length;
	var companyJobsCount = [];
	var count = companiesList.length;
	timedQuickAccessByCompany[dates[i][2]] = new Object();
	for(var companyKey in companiesList) {
		timedQuickAccessByCompany[dates[i][2]][companiesList[companyKey]] = new Object();
		for(var domain in domains) {
			var url = "http://localhost:8983/solr/collection1/select?q=company%3A%22"+encodeURIComponent(companiesList[companyKey])+"%22%0Atitle%3A%22"+encodeURIComponent(domains[domain])+"%22&fq=postedDate%3A%5B"+encodeURIComponent(dates[i][0])+"+TO+"+encodeURIComponent(dates[i][1])+"%5D&rows=0&wt=json&indent=true";
			$.get(url, function(data) {
				var q = $.parseJSON(data).responseHeader.params.q;
				var companyTemp = q.match(/company:(.*)\"/);
				var company = companyTemp[1].substring(1,companyTemp[1].length);
				var titleTemp = q.match(/title:(.*)\"/);
				var title = titleTemp[1].substring(1,titleTemp[1].length);
				var jobsCount = $.parseJSON(data).response.numFound;
				var fq = $.parseJSON(data).responseHeader.params.fq;
				var year = fq.substring(14,16);
				var month = fq.substring(17,19);
				//console.log(monthsIndex[month-1]+year);
				timedQuickAccessByCompany[monthsIndex[month-1]+year][company][reverseDomains[title]] = jobsCount;
				//console.log(timedQuickAccessByCompany);

				count--;
				if(count == 0) {
					i--;
					if(i >= 0) {
						getJobsCountByDomain(companiesList, dates, timedDomainCount, domains, reverseDomains, timedQuickAccessByCompany, monthsIndex);
					} else {
						//Call D3 function to populate/build a stacked column graph
						console.log(timedQuickAccessByCompany);
						preProcessQuery2bData(timedQuickAccessByCompany, timedDomainCount);
					}
				}
				
			});			
		}
	}
}

function preProcessQuery2bData(data, timedDomainCount) {
	for(t in data) {
		//console.log(t);
		var obj = new Object();
		obj["State"] = t;
		for(c in data[t]) {
			//console.log(c);
			var cnt = 0;
			for(d in data[t][c]) {
				cnt += data[t][c][d];
			}
			obj[c] = cnt.toString();
		}
		timedDomainCount.push(obj);
	}
	console.log(timedDomainCount);
	processData(timedDomainCount);
}


function query4() {
	var seasons = [["2012-01-01T00:00:00Z","2012-02-28T00:00:00Z"],	
				["2012-03-01T00:00:00Z","2012-05-31T00:00:00Z"],
				["2012-06-01T00:00:00Z","2012-08-31T00:00:00Z"],
				["2012-09-01T00:00:00Z","2012-11-30T00:00:00Z"],
				["2012-12-01T00:00:00Z","2013-02-28T00:00:00Z"],
				["2013-03-01T00:00:00Z","2013-05-31T00:00:00Z"],
				["2013-06-01T00:00:00Z","2013-08-31T00:00:00Z"],
				["2013-09-01T00:00:00Z","2013-11-30T00:00:00Z"],
				["2013-12-01T00:00:00Z","2013-12-31T00:00:00Z"]];

	
}

function getJobsCountByJobType() {
	
}