 var elemID ="#disp";
 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$().ready(function() {
    var top;
    var left;
    for (var i=0; i<10; i++) {
        left=Math.floor(Math.random()*1000+1);
        top=Math.floor(Math.random()*800+1)
        $(elemID).append(
                "<div id='"+i+"' style='position:absolute; width:100px; height:100px; background-color:gray;'>"+i+"</div>")
            
        }
    }



