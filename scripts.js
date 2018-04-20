$.getJSON( "https://api.airtable.com/v0/appRR3zlzv9J5xOPF/Recent%20Movies?api_key=keydcKyhunzJJrYwG", function( data ) {
  // console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {
    console.log(val.fields["Story Name"])
    items.push( "<li id='" + val.id + "'>" + val.fields["Story Name"] + " -" + val.fields["My Opinion"]+ "</li>" );
  });

  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
