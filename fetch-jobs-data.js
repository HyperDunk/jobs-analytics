var countriesDataList = [
  {
    "latitude":4.570868,
    "longitude":-74.297333,
    "name":"Colombia"
  },
  {
    "latitude":23.634501,
    "longitude":-102.552784,
    "name":"Mexico"
  },
  {
    "latitude":-35.675147,
    "longitude":-71.542969,
    "name":"Chile"
  },
  {
    "latitude":-1.831239,
    "longitude":-78.183406,
    "name":"Ecuador"
  },
  {
    "latitude":46.227638,
    "longitude":2.213749,
    "name":"France"
  },
  {
    "latitude":40.463667,
    "longitude":-3.74922,
    "name":"Spain"
  },
  {
    "latitude":6.42375,
    "longitude":-66.58973,
    "name":"Venezuela"
  },
  {
    "latitude":-9.189967,
    "longitude":-75.015152,
    "name":"Peru"
  },
  {
    "latitude":-16.290154,
    "longitude":-63.588653,
    "name":"Bolivia"
  },
  {
    "latitude":61.52401,
    "longitude":105.318756,
    "name":"Russia"
  },
  {
    "latitude":-11.202692,
    "longitude":17.873887,
    "name":"Angola"
  },
  {
    "latitude":41.87194,
    "longitude":12.56738,
    "name":"Italy"
  },
  {
    "latitude":37.09024,
    "longitude":-95.712891,
    "name":"United States"
  },
  {
    "latitude":-14.235004,
    "longitude":-51.92528,
    "name":"Brazil"
  },
  {
    "latitude":8.537981,
    "longitude":-80.782127,
    "name":"Panama"
  },
  {
    "latitude":-38.416097,
    "longitude":-63.616672,
    "name":"Argentina"
  },
  {
    "latitude":15.199999,
    "longitude":-86.241905,
    "name":"Honduras"
  },
  {
    "latitude":21.521757,
    "longitude":-77.781167,
    "name":"Cuba"
  },
  {
    "latitude":56.130366,
    "longitude":-106.346771,
    "name":"Canada"
  },
  {
    "latitude":13.794185,
    "longitude":-88.89653,
    "name":"El Salvador"
  },
  {
    "latitude":18.971187,
    "longitude":-72.285215,
    "name":"Haiti"
  },
  {
    "latitude":15.783471,
    "longitude":-90.230759,
    "name":"Guatemala"
  },
  {
    "latitude":39.399872,
    "longitude":-8.224454,
    "name":"Portugal"
  },
  {
    "latitude":60.472024,
    "longitude":8.468946,
    "name":"Norway"
  },
  {
    "latitude":-32.522779,
    "longitude":-55.765835,
    "name":"Uruguay"
  },
  {
    "latitude":56.26392,
    "longitude":9.501785,
    "name":"Denmark"
  },
  {
    "latitude":46.818188,
    "longitude":8.227512,
    "name":"Switzerland"
  },
  {
    "latitude":12.865416,
    "longitude":-85.207229,
    "name":"Nicaragua"
  },
  {
    "latitude":50.503887,
    "longitude":4.469936,
    "name":"Belgium"
  },
  {
    "latitude":14.058324,
    "longitude":108.277199,
    "name":"Vietnam"
  },
  {
    "latitude":12.879721,
    "longitude":121.774017,
    "name":"Philippines"
  },
  {
    "latitude":51.165691,
    "longitude":10.451526,
    "name":"Germany"
  },
  {
    "latitude":21.913965,
    "longitude":95.956223,
    "name":"Myanmar"
  },
  {
    "latitude":25.354826,
    "longitude":51.183884,
    "name":"Qatar"
  },
  {
    "latitude":-25.274398,
    "longitude":133.775136,
    "name":"Australia"
  },
  {
    "latitude":55.378051,
    "longitude":-3.435973,
    "name":"United Kingdom"
  },
  {
    "latitude":45.943161,
    "longitude":24.96676,
    "name":"Romania"
  },
  {
    "latitude":35.86166,
    "longitude":104.195397,
    "name":"China"
  },
  {
    "latitude":4.210484,
    "longitude":101.975766,
    "name":"Malaysia"
  },
  {
    "latitude":-23.442503,
    "longitude":-58.443832,
    "name":"Paraguay"
  },
  {
    "latitude":13.193887,
    "longitude":-59.543198,
    "name":"Barbados"
  },
  {
    "latitude":7.369722,
    "longitude":12.354722,
    "name":"Cameroon"
  },
  {
    "latitude":1.352083,
    "longitude":103.819836,
    "name":"Singapore"
  },
  {
    "latitude":20.593684,
    "longitude":78.96288,
    "name":"India"
  },
  {
    "latitude":-0.789275,
    "longitude":113.921327,
    "name":"Indonesia"
  },
  {
    "latitude":1.373333,
    "longitude":32.290275,
    "name":"Uganda"
  },
  {
    "latitude":-13.254308,
    "longitude":34.301525,
    "name":"Malawi"
  }
];
var query1CallBack = null;

function query1(company, jobtype, callBack) {
	query1CallBack = callBack;
	var countriesGeoMap = processCountriesGeoMap(countriesDataList);
	var monthsIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
	i = 0;

	var dataListQuery1 = [];

	getJobsToMap(company, jobtype, dates, countriesGeoMap, dataListQuery1, monthsIndex, callBack);
	
}

function getJobsToMap(company, jobtype, dates, countriesGeoMap, dataListQuery1, monthsIndex, callBack) {

	var count = dates.length;
	var jObject = new Object();
	jObject["country"] = countriesDataList[i].name;
	jObject["latitude"] = countriesGeoMap[countriesDataList[i].name].latitude;
	jObject["longitude"] = countriesGeoMap[countriesDataList[i].name].longitude;
	//console.log(jObject);
	for(var date in dates) {
		var url = "http://localhost:8983/solr/collection1/select?q=company%3A%22"+encodeURIComponent(company)+"%22%0Ajobtype%3A%22"+encodeURIComponent(jobtype)+"%22%0Acountry%3A%22"+encodeURIComponent(countriesDataList[i].name)+"%22&fq=postedDate%3A%5B"+encodeURIComponent(dates[date][0])+"+TO+"+encodeURIComponent(dates[date][1])+"%5D&rows=0&wt=json&indent=true";
		//var url = "http://localhost:8983/solr/collection1/select?q=company%3A%22Gestion+Estrategica%22%0Ajobtype%3A%22Tiempo+Completo%22%0Atitle%3A%22Industria%22&fq=postedDate%3A%5B2012-11-01T00%3A00%3A00Z+TO+2012-11-30T00%3A00%3A00Z%5D&rows=0&wt=json&indent=true";
		$.get(url, function(data) {
			//console.log(data);
			var jobsCount = $.parseJSON(data).response.numFound;
			var fq = $.parseJSON(data).responseHeader.params.fq;
			var year = fq.substring(14,16);
			var month = fq.substring(17,19);
			jObject[monthsIndex[month-1]+year] = jobsCount;
			
			count--;

			if(count == 0) {
				dataListQuery1.push(jObject);
				if(i < dates.length) {
					i++;
					getJobsToMap(company, jobtype, dates, countriesGeoMap, dataListQuery1, monthsIndex);
				} else {
					//Done. Call d3 here
					console.log(dataListQuery1);
					query1CallBack(dataListQuery1);
				}
			}
		});
	}

}

function processCountriesGeoMap(data) {
	var countries = new Object();

    for(var k = 0; k< data.length; k++) {
        var country = data[k].name;
        var longitude = data[k].longitude;
        var latitude = data[k].latitude;
        countries[country] = {"latitude": latitude, "longitude":longitude};
    }
    return countries;
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


function query3(callBack) {
	var southAmericanCountriesList = ["Colombia", "Chile", "Venezuela", "Peru", "Bolivia", "Brazil", "Ecuador", "Argentina", "Uruguay", "Paraguay"];
	var query3DataList = [];
	var count = southAmericanCountriesList.length;
	var lati, longi;
	for(var countryKey in southAmericanCountriesList) {
		var url = "http://localhost:8983/solr/collection1/select?q=country%3A%22"+southAmericanCountriesList[countryKey]+"%22&rows=10&fl=latitude%2Clongitude%2Ccountry&wt=json&indent=true";
		$.get(url, function(data) {
			var docs = $.parseJSON(data).response.docs;
			for(doc in docs) {
				//console.log(docs[doc]);
				docs[doc].latitude = Number(docs[doc].latitude);
				docs[doc].longitude = Number(docs[doc].longitude);
				query3DataList.push(docs[doc]);
				
				count--;
				if(count == 0) {
					console.log(query3DataList);
					callBack(query3DataList);					
				}
			}		
		});
	}
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