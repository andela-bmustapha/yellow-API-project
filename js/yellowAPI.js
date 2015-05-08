var yellowApi = {

  result: $("#result-container"),  // defines the result container

  // define method
  showContent: function() {
    var userSearch = document.getElementById('search-input').value;
    var yellowUrl = 'http://api.sandbox.yellowapi.com/FindBusiness/?what=' + userSearch + '&where=Canada&fmt=JSON&pgLen=5&apikey=ttnecms7z552km87egfshs2e&UID=127.0.0.1'

    yellowApi.result.fadeToggle('slow');
    yellowApi.result.empty();

    $.getJSON( yellowUrl, function(data) {
      yellowApi.result.append("<ol>");
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

        yellowApi.result.append(busName);
        yellowApi.result.append(busAdd);
        yellowApi.result.append("<br />");
        yellowApi.result.append("<br />");
        yellowApi.result.append("<hr />");    
      });
    });
    yellowApi.result.append("</ol>"); 
    yellowApi.result.fadeIn('slow');
  }
};

// attach an event hadler to the button
document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();
  yellowApi.showContent();
});

