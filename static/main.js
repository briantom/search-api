if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
};
var loadData = function(){
	var base_url = "http://ec2-52-10-79-212.us-west-2.compute.amazonaws.com:8080";
	var query = $("#search-input").val();
	var search_url = base_url + "/solr/select/?q=-Body:{0}+BodyBlurred:{1}&wt=json&json.rwf=callback".format(query,query);
	$.ajax({
	  'url': search_url,
	  'success': function(data) { 
	  		alert("I got the data");
	  		$("#result-container").html(JSON.stringify(data["response"]["docs"]));
	   },
	  'dataType': 'jsonp',
	  'jsonp': 'json.wrf'
	});
};
$(document).ready(function(){
	$("#search-button").click(function(){
		alert("I heard the click");
		loadData();		
	});
	$("#search-input").keypress(function(e) {
	    if(e.which == 13) {
	    	loadData();
	    }
	});
});
