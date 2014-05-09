      var drinks=drinkList;
      var loading=true;
      $('#queue').disableSelection();
    	var numdrinks=0;
      var downX=1000000;
      var downY=1000000;
      var startswipe=null;
    	function addDrink(index, name, ingredients, type){
			$("#queue").append("<div><div class='row under' id='under"+index+"'><div class='col-xs-2'><h2>Done</h2></div><div class='col-xs-10'></div></div><div class='row "+type+"' id=drink"+index+"><div><div class='col-xs-2'><a class='btn-xs' href='./order_queue.html' role='button' id='btn"+index+"'><img style='width:60px;vertical-align:middle' src='../css/Kitchen-List-ingredients-icon.png'></img></a></div><div class='col-xs-10' align='left'><h2>"+name+"</h2></div></div><div id='collapse"+index+"' class='panel-collapse collapse in rectangle span12'><div class='panel-body'>"+ingredients+"</div></div></div></div>");
        var index=index;
    		var drinkname="#drink"+index;
    		var collapsename="#collapse"+index;
        var undername="#under"+index;
    		var spacername="#spacer"+index;
        var buttonname="#btn"+index;
    		$(collapsename).toggle();
    		
  			var goForIt=true;
        var kill=false
  			$(drinkname).click(function(event){
    			event.preventDefault;
    			if (goForIt){
            if ($(drinkname).hasClass("activeDrink")&&!$(drinkname).hasClass("notMineDrink")){
              if (!loading){
                beingMade[index]=notStarted[index];
                delete notStarted[index];
                writeOut();
              }
    				  $(drinkname).toggleClass('activeDrink mine');

              $(drinkname).draggable(
                  {
                    axis: "x",
                    //containment:[$(drinkname).parent.position.left,0,0,0],
                    start: function( event, ui ) {goForIt=false;},
                    drag: function( event, ui ) {if (ui.position.left>95){
                    if ($(drinkname).hasClass("mine")){$(drinkname).toggleClass('mine done').draggable("disable");}}},
                    stop: function(){if (kill){
                      $(drinkname).remove();
                       $(undername).remove();
                      if (!loading){
                          if (beingMade[index]!=null){madeDrinks[index]=beingMade[index];}
                          if (notStarted[index]!=null){madeDrinks[index]=notStarted[index];}
                          delete beingMade[index];
                          delete notStarted[index];
                          writeOut();
                        }
                    }},
                    revert: function(event,ui){if ($(drinkname).hasClass("done")){kill=true;}return true;}
                  });
            }
            else if ($(drinkname).hasClass("mine")){
              $(drinkname).toggleClass('activeDrink mine');
              $(drinkname).draggable('destroy');
              if (!loading){
                notStarted[index]=beingMade[index];
                delete beingMade[index];
                writeOut();
              }
            }
    			}
    			goForIt=true;
    		});

        $(buttonname).click(function(event){
          goForIt=false;
           $(collapsename).toggle();
           sizing(undername,drinkname)

        });
        
        
        $(drinkname).click();$(drinkname).click();
        function sizing(undername,drinkname){
          $(undername).css("width",$(drinkname).css("width"));
          $(undername).css("height",$(drinkname).css("height"));

        }
        sizing(undername,drinkname);
    	}

    	function notmine(drinkNum){
    		$("#drink"+drinkNum).toggleClass('activeDrink notMineDrink');
    	}
    	function removeDrink(drinkNum){
    		$("#drink"+drinkNum).remove();
    		$("#spacer"+drinkNum).remove();
      }
      $(document).ready(function() {
        jQuery.each( notStarted, function( i, val ) {addDrink(i,val[0],val[1],"activeDrink");});;
    	});
      $(document).ready(function() {
        jQuery.each( beingMade, function( i, val ) {
          addDrink(i,val[0],val[1],"activeDrink");
          $("#drink"+i).click();
        });
        loading=false;
      });
