function query1(company, jobtype, title, startDate, endDate) {
	
	url = "http://localhost:8983/solr/collection1/select?q=company%3A%22Gestion+Estrategica%22%0Ajobtype%3A%22Tiempo+Completo%22%0Atitle%3A%22Industria%22&fq=postedDate%3A%5B2012-11-01T00%3A00%3A00Z+TO+2012-11-30T00%3A00%3A00Z%5D&rows=0&wt=json&indent=true";
	
	$.ajax({
       type:'GET',
       url: url,
       success: function(data){
           alert('loaded: ' + data);
       },
       error: function(data){
           alert('error: ' + data);        
       }
    });
	
}

var i = 0;
var timedCountriesCount = [];

function query2() {

	var companiesList = ["Gestion Estrategica", "GB Consultora"];
	var dates = [["2012-01-01T00:00:00Z","2012-01-31T00:00:00Z"],
				["2012-02-01T00:00:00Z","2012-02-28T00:00:00Z"],
				["2012-03-01T00:00:00Z","2012-03-31T00:00:00Z"],
				["2012-04-01T00:00:00Z","2012-04-30T00:00:00Z"],
				["2012-05-01T00:00:00Z","2012-05-31T00:00:00Z"],
				["2012-06-01T00:00:00Z","2012-06-30T00:00:00Z"],
				["2012-07-01T00:00:00Z","2012-07-31T00:00:00Z"],
				["2012-08-01T00:00:00Z","2012-08-31T00:00:00Z"],
				["2012-09-01T00:00:00Z","2012-09-30T00:00:00Z"],
				["2012-10-01T00:00:00Z","2012-10-31T00:00:00Z"],
				["2012-11-01T00:00:00Z","2012-11-30T00:00:00Z"],
				["2012-12-01T00:00:00Z","2012-12-31T00:00:00Z"],
				["2013-01-01T00:00:00Z","2013-01-31T00:00:00Z"],
				["2013-02-01T00:00:00Z","2013-02-28T00:00:00Z"],
				["2013-03-01T00:00:00Z","2013-03-31T00:00:00Z"],
				["2013-04-01T00:00:00Z","2013-04-30T00:00:00Z"],
				["2013-05-01T00:00:00Z","2013-05-31T00:00:00Z"],
				["2013-06-01T00:00:00Z","2013-06-30T00:00:00Z"],
				["2013-07-01T00:00:00Z","2013-07-31T00:00:00Z"],
				["2013-08-01T00:00:00Z","2013-08-31T00:00:00Z"],
				["2013-09-01T00:00:00Z","2013-09-30T00:00:00Z"],
				["2013-10-01T00:00:00Z","2013-10-31T00:00:00Z"],
				["2013-11-01T00:00:00Z","2013-11-30T00:00:00Z"],
				["2013-12-01T00:00:00Z","2013-12-31T00:00:00Z"]];
	i = dates.length-1;
	getCountriesCountByTime(companiesList, dates, dates[i][0], dates[i][1]);

}


function getCountriesCountByTime(companiesList, dates, startDate, endDate) {
	var companyCountriesCount = [];
	var count = companiesList.length;

	for(var companyKey in companiesList) {
		var url = "http://localhost:8983/solr/collection1/select?q=company%3A%22"+encodeURIComponent(companiesList[companyKey])+"%22&fq=postedDate%3A["+encodeURIComponent(startDate)+"+TO+"+encodeURIComponent(endDate)+"]&wt=json&indent=true&group=true&group.field=country&group.limit=0";
		$.get(url, function(data) {
			var countryCount = $.parseJSON(data).grouped.country.groups.length;
			var company = $.parseJSON(data).responseHeader.params.q;
			var dateIndex = $.parseJSON(data).responseHeader.params.fq;
			//alert(company + " : " + countryCount);
			count--;
			companyCountriesCount.push([company,countryCount]);
			//console.log("companyCountriesCount : " + companyCountriesCount);
			if(count == 0) {
				timedCountriesCount.push(companyCountriesCount);
				console.log("timedCountriesCount : " + timedCountriesCount);
				i--;
				if(i >= 0) {
					getCountriesCountByTime(companiesList, dates, dates[i][0], dates[i][1]);
				} else {
					//Call D3 function to populate/build a stacked column graph by using timedCountriesCount

				}
				
			}
		});
	}

	
}


function getJobsCountByDomain(companiesList, dates, startDate, endDate) {
	var companyJobsCount = [];
	var count = companiesList.length;

	for(var companyKey in companiesList) {
		var url = "";
	}	
}


function query4() {
	var seasons = [["2012-01-01T00:00:00Z","2012-02-28T00:00:00Z"],	
				["2012-03-01T00:00:00Z","2012-05-31T00:00:00Z"],
				["2012-06-01T00:00:00Z","2012-08-31T00:00:00Z"],
				["2012-09-01T00:00:00Z""2012-11-30T00:00:00Z"],
				["2012-12-01T00:00:00Z","2013-02-28T00:00:00Z"],
				["2013-03-01T00:00:00Z","2013-05-31T00:00:00Z"],
				["2013-06-01T00:00:00Z","2013-08-31T00:00:00Z"],
				["2013-09-01T00:00:00Z","2013-11-30T00:00:00Z"],
				["2013-12-01T00:00:00Z","2013-12-31T00:00:00Z"]];

	
}

function getJobsCountByJobType() {
	
}