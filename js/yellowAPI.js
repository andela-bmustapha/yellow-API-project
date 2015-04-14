$(document).ready(function() {
	$("#search-button").click(function() {
    
    var result = $("#result-container");
    result.fadeToggle('slow');
    result.empty();
		var userSearch = $(".search-input").val();
		var yellowUrl = 'http://api.sandbox.yellowapi.com/FindBusiness/?what=' + userSearch + '&where=Canada&fmt=JSON&pgLen=5&apikey=ttnecms7z552km87egfshs2e&UID=127.0.0.1';
		
    $.getJSON( yellowUrl, function( data ) {
			result.append("<ol>");
			$.each(data.listings, function(index, element) {
				var addressArray = [];
				var busName = "<li>Business Name: ";
				var busAdd = "<li>Business Address: ";
				busName += element.name + '</li>';
				if (typeof element.address == 'object') {
					$.each(element.address, function(ind, addressField) {
						addressArray.push(addressField);
					});
				busAdd += addressArray + '</li>';
				}

			result.append(busName);
			result.append(busAdd);
			result.append("<br />");
			result.append("<br />");
      result.append("<hr />");		
			});
  	});

  		result.append("</ol>");	
      result.fadeIn('slow');
	});
});