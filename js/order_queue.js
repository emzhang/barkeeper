
      $('#queue').disableSelection();
      localStorage.setItem("name","Robert Miller")
    	var numdrinks=0;
      var downX=1000000;
      var downY=1000000;
      var startswipe=null;
    	function addDrink(name, ingredients){
    		numdrinks+=1;
			$("#queue").append("<div><div class='row under' id='under"+numdrinks+"'><div class='col-xs-2'><h2>Done</h2></div><div class='col-xs-10'></div></div><div class='row activeDrink' id=drink"+numdrinks+"><div><div class='col-xs-2'><a class='btn-xs' href='./order_queue.html' role='button' id='btn"+numdrinks+"'><img style='width:60px;vertical-align:middle' src='../css/Kitchen-List-ingredients-icon.png'></img></a></div><div class='col-xs-10' align='left'><h2>"+name+"</h2></div></div><div id='collapse"+numdrinks+"' class='panel-collapse collapse in rectangle span12'><div class='panel-body'>"+ingredients+"</div></div></div></div>"
    		);
    		var drinkname="#drink"+numdrinks;
    		var collapsename="#collapse"+numdrinks;
        var undername="#under"+numdrinks
    		var spacername="#spacer"+numdrinks;
        var buttonname="#btn"+numdrinks;
    		$(collapsename).toggle();
    		//$(drinkname).dblclick(function(event){
    		//	event.preventDefault;
    		//	$(collapsename).toggle();
    		//});
    		
    		//$("#queue").append("<div class='panel-heading span12' id='spacer"+numdrinks+"'></div>");
        /*$(drinkname).mousedown(function(event){
          downX=event.clientX;
          downY=event.clientY;
          startswipe=this;
        });
        $(drinkname).mouseup(function(event){
          var upX=event.clientX;
          var upY=event.clientY;
          console.log(upX-downX);
          if ((upX-downX>30)&&(startswipe=this)){
            if ($(drinkname).hasClass("mine")){
              this.remove();
             $(spacername).remove();
           }
         }
       });*/



    	// 	$(drinkname).on("swipe",function(){
    	// 		 goForIt=false;
     //       if ($(drinkname).hasClass("mine")){
     //          this.remove();
   		// 		   $(spacername).remove();
     //       }
  			// });
  			var goForIt=true;
        var kill=false
  			$(drinkname).click(function(event){
    			event.preventDefault;
    			if (goForIt){
            if ($(drinkname).hasClass("activeDrink")&&!$(drinkname).hasClass("notMineDrink")){
    				  $(drinkname).toggleClass('activeDrink mine');
              $(drinkname).draggable(
                  {
                    axis: "x",
                    //containment:[$(drinkname).parent.position.left,0,0,0],
                    start: function( event, ui ) {goForIt=false;},
                    drag: function( event, ui ) {if (ui.position.left>95){
                    if ($(drinkname).hasClass("mine")){$(drinkname).toggleClass('mine done').draggable("disable");}}},
                    stop: function(){if (kill){$(drinkname).remove(); $(undername).remove();}},
                    revert: function(event,ui){if ($(drinkname).hasClass("done")){kill=true;}return true;}
                  });
            }
            else if ($(drinkname).hasClass("mine")){
              $(drinkname).toggleClass('activeDrink mine');
              $(drinkname).draggable('destroy');
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
        jQuery.each( drinks, function( i, val ) {addDrink(i,val);});;
    	});
