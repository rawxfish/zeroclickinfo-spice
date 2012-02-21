function nrmov(imov) {
    var snippet = '';


    // Validity check.
    if (imov['movies']) {

        // Snippet that gets shown in the 0-click box.
	var movies = imov['movies'];


	snippet = "<table cellpadding=5>";
	snippet += "<th align=left>Title</th>" 
	    + "<th align=left>MPAA</th>"
	    + "<th align=left>Runtime</th>" 
	    + "<th align=left>Rating</th>" 
	    + "<th align=left>Cast</th>";

	for (var i = 0; i < 5; i++) {
	    var m = movies[i];
	    snippet += "<tr>"
		+"<td>" + m.title + "</td>" 
		+"<td>" + m.mpaa_rating + "</td>"
		+"<td>" + Math.floor(m.runtime/60) + "hr " 
		+ (m.runtime - Math.floor(m.runtime/60)*60) +  "min" + "</td>"
		+"<td>" + m.ratings.audience_score + "/100" +  "</td>";

	    var cast = m.abridged_cast;
	    snippet+= "<td>";
	    for (var j = 0; j < 3; j++) {
		snippet += cast[j].name;
		if (j < 2) snippet += ", ";
	    }	    
	    snippet+= "</td></tr>";
	}
	snippet += "</table>";


	items = new Array();
	items[0] = new Array();

	items[0]['a'] = snippet;

	items[0]['h'] = "Weekend Box Office Chart";

	// Source name and url for the More at X link.
	items[0]['s'] = '';
	items[0]['u'] = '';

	nra(items);
    }
}
