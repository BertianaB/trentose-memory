/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

tmpl = "<li id='0' class='hidden'>" + "<h3>1</h3>";

$(document).ready(function(){
  for (var i =0; i<data.length; i++){
        item = tmpl.replace(/1/g, data[i]);
        item = item.replace('hidden', 'done');
        $(".cards").append(item);
    }
    
    $(".opt-start").click(function(){
        $(".cards").children().removeClass('done');
        $(".cards").children().addClass('hidden');
        $('h3').hide();
    
    });
    
    
});
var previous = 0;
    $(document).on("click", "li", function(event){
        previous++;
        
        var number = $(event.currentTarget).find("h3").html();
        if(parseInt(number)!==previous){
                        alert("you lost");
        } else{ 
                $(event.currentTarget).removeClass("hidden");
                $(event.currentTarget).addClass("done");
                $(event.currentTarget).find("h3").show();
            if(parseInt(number)===9){
                alert("cooool you're almost done");
            }
            if(parseInt(number)===10){
                alert("you won!");
            }
        }
    
});

