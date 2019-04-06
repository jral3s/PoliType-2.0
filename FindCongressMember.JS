function getCongressMembers(zip){
  /*var request = new XMLHttpRequest();

  request.addEventListener("load", function(evt){
      console.log(evt);
  }, false);

  request.open('GET', 'a.html', true),
  request.send();*/
  var ExternalURL = "whoismyrepresentative.com/search/zip/"+zip; // This address must not contain any leading “http://”
   var ContentLocationInDOM = null; // If you’re trying to get sub-content from the page, specify the “CSS style” jQuery syntax here, otherwise set this to “null”

   var rep1 = "";
   var rep2 = "";
   var rep3 = "";
   var sen1 = "";
   var sen2 = "";
   var temp = "";

   $(document).ready(loadContent);
   function loadContent()
   {
      var QueryURL = "http://anyorigin.com/get?url=” + ExternalURL + “&callback=?"";
      $.getJSON(QueryURL, function(data){
         if (data && data != null && typeof data == "object" && data.contents && data.contents != null && typeof data.contents == "string")
         {
            if (data.length > 0)
            {
              while (data.indexOf("Rep.")>-1){
                data = data.substring(data.indexOf("Rep."));
                temp = data.substring(0,data.indexOf(")")+1);
                if (rep1===""){
                  rep1 = temp;
                }
                else if (rep2===""){
                  rep2 = temp;
                }
                else if (rep3===""){
                  rep3 = temp;
                  break;
                }
              }
              while (data.indexOf("Sen.")>-1){
                data = data.substring(data.indexOf("Sen."));
                temp = data.substring(0,data.indexOf(")")+1);
                if (sen1===""){
                  sen1 = temp;
                }
                else if (sen2===""){
                  sen2 = temp;
                }
              }
                $('#member').html("Rep1 is "+rep1+". Rep2 is "+rep2+". Rep3 is "+rep3+". Sen1 is "+sen1+". Sen2 is "+sen2+".");
            }
         }
      });
   }
}
