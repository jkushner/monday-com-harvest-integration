window._harvestPlatformConfig = {
    "applicationName": "MondayCustom",
    "skipStyling": false
};

function urlchanged(){  
  var path = window.location.pathname;
  
  // Check if we are viewing pulse details panel
  if ( path.includes("/pulses/") ) {
    
    // remove any existing timer buttons
   $('.harvest-timer').remove();
    
    var tasktitle = $(".title-wrapper").find(".multiline-ellipsis-component").text();
    var taskurl = "https://jakelouis.monday.com/"+path;
    var taskid = path.substring(path.lastIndexOf('/')+1);
    var projectid = location.pathname.split('/')[2];
    var projectname = $("#board-header .board-name").find(".ds-text-component").text();
  
    
    $(".pulse_actions_wrapper").append("<div class='harvest-timer' id='harvest-timer-obj' style='height: 28px; width: 30px; text-align: center; padding-top: 6px; margin-left: 8px; color: #fff; background: #fff; border-radius: 4px; border: 2px solid #f58933;' data-item='{\"id\":\""+taskid+"\", \"name\": \""+tasktitle+"\"}' data-permalink='"+taskurl+"' data-group='{\"id\": \""+projectid+"\", \"name\": \""+projectname+"\" }' >");
    
    $("#harvest-messaging").trigger({
      type: "harvest-event:timers:add",
      element: $("#harvest-timer-obj")
    });
      
  }
  
}

$(document).ready(function(){

  var currentpage = window.location.href;
  
  setInterval(function(){
    if (currentpage != window.location.href) {
      currentpage = window.location.href;
      urlchanged();
    }
  }, 1000);
});

