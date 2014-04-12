
      $('#queue').disableSelection();
    	var numdrinks=0;
      var downX=1000000;
      var downY=1000000;
      var startswipe=null;
    	function addDrink(name, ingredients){
    		numdrinks+=1;
			$("#queue").append("<div class=\"panel-heading span12 activeDrink\"  id=drink"+numdrinks+"><div class='row'><div class='col-xs-2'><a class='btn-xs' href='./order_queue.html' role='button' id='btn"+numdrinks+"'><img style='width:60px;vertical-align:middle' src='../css/Kitchen-List-ingredients-icon.png'></img></a></div><div class='col-xs-10' align='left'><h2>"+name+"</h2></div></div><div id='collapse"+numdrinks+"' class='panel-collapse collapse in rectangle span12'><div class='panel-body'>"+ingredients+"</div></div></div>"
    		);
    		var drinkname="#drink"+numdrinks;
    		var collapsename="#collapse"+numdrinks;
    		var spacername="#spacer"+numdrinks;
        var buttonname="#btn"+numdrinks;
    		$(collapsename).toggle();
    		//$(drinkname).dblclick(function(event){
    		//	event.preventDefault;
    		//	$(collapsename).toggle();
    		//});
    		
    		$("#queue").append("<div class='panel-heading span12' id='spacer"+numdrinks+"'></div>");
        $(drinkname).mousedown(function(event){
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
       });



    		$(drinkname).on("swipe",function(){
    			 goForIt=false;
           if ($(drinkname).hasClass("mine")){
              this.remove();
   				   $(spacername).remove();
           }
  			});
  			var goForIt=true;
  			$(buttonname).click(function(event){
  				goForIt=false;
   				 $(collapsename).toggle();

  			});
  			$(drinkname).click(function(event){
          console.lo
    			event.preventDefault;
    			if (goForIt){
            if ($(drinkname).hasClass("activeDrink")&&!$(drinkname).hasClass("notMineDrink")){
    				  $(drinkname).toggleClass('activeDrink mine');
            }
            else if ($(drinkname).hasClass("mine")){
              $(drinkname).toggleClass('activeDrink mine');
            }
    			}
    			goForIt=true;
    		});

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
