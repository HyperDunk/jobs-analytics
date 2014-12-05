jobs-analytics
==============

Each query/challenge has a separate HTML file which renders maps/charts (using D3) to visualize the challenges.
- query1.html
- query2a.html
- query2b.html
- query3.html
- query4.html

A common javascript "fetch-jobs-data.js" to fetch data required for all the challenges.
This uses a jquery ajax/get method to retrive information from solr via rest call.
Once the data is fetched for different parameters each function transforms data as required for D3.
