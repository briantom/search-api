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
}
$(document).ready(function(){
	$.ajax({
		    type: "GET",
		    url: "http://www.w3schools.com/xml/cd_catalog.xml",
		    dataType: "xml",
		    success: function(xml, status, error){
		        alert('hello');
		        // Parse the xml file and get data
		        $("#result-container").append("Hello world");
		        // var xmlDoc = $.parseXML(xml),
		        //     $xml = $(xmlDoc);
		        
		    },
		    error: function(jqXhr, status, error){
		    	alert(status + ':' + error + ':' + jqXhr.responseText);
		    }
		}) ;
	$("button").click(function(){
		var base_url = "localhost:8080"
		var query = $("#search-input").val();
		var search_url = base_url + "/solr/select/?q=-Body:{0}+BodyBlurred:{1}".format(query,query);
		alert('hello world');
	});
});
