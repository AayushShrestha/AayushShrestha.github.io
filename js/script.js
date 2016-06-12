'use strict'

function generateMenuItems(data) {
	var container = $("#menu-accordion");

	for(var key in data) {

		var panel = "<div class='panel panel-default'>";
		panel += "<div class='panel-heading' role='tab' id='" + key + "'>";

		var headTitle = "<h2 class='panel-title accent heading'>";
		headTitle += data[key].title;
		headTitle += "<a role='button' class='pull-right' data-toggle='collapse' href='#collapse-"+key+"' aria-expanded='true' aria-controls='collapse"+key+"'><small>Show/Hide</small></a>";
		headTitle += "</h2>";

		var panelBody = "</div>";
		panelBody += "<div id='collapse-"+key+"' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='heading-"+key+"'>";


		var headDescription = "";
		if(data[key].description) {
			headDescription = "<p class='panel-body'><b>"+data[key].description+"</b></p>";
		}
		

		var content = panel + headTitle + panelBody + headDescription;

		var menuHTML = "<div class='menu list-group'>";
		for(var i = 0 ; i < data[key].items.length; i ++) {
			menuHTML += "<div class='list-group-item'>";
			menuHTML += "<h4 class='list-group-item-heading text-primary'>";
			menuHTML +=  data[key].items[i].title;
			if(data[key].items[i].price) {
				menuHTML += "<span class='pull-right'>$ " + data[key].items[i].price + "</span>";
			}
			menuHTML += '</h4>';
			if(data[key].items[i].description) {
				menuHTML += "<p>" + data[key].items[i].description + "</p>";
			}
			
			menuHTML += "</div>";
		}
		menuHTML += "</div>";
		menuHTML += "</div>";
		menuHTML += "</div>";

		var finalContent = content + menuHTML;

		container.append(finalContent);
		
	}

}

generateMenuItems(menu);