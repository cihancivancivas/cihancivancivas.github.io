/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Students = {
    "ID": "",
    "fName" : "",
    "lname" : "",
    "courses" : [
        {"courseID" : "",
         "grade" : "" }
    ],
    calcGPA : function() {
        var gpa = 0;
        for(var i=0; i<this.courses.length; i++){
            gpa /=this.courses[i].grade;
            return gpa;
        }
        
    }
};

      var s1 =  Students();
      s1["ID"] = "10158664";
      s1["fName"] = "Ahmet";
      s1["lsame"] = "Birey";
      for (var i=0; i<5; i++) {
          s1["courses"][i] = {"courseID" : "c"+1, "grade":Math.random()*100+1};
      }
      var gpa = s1.calcGPA();
      
        

