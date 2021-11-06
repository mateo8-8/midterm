window.addEventListener("DOMContentLoaded", updateScore);
window.addEventListener("change", getData);

let av = 0;
let ac = 0;
let pr = 0;
let ui = 0;
let s = 0;
let b = 0;
//let e = 0;


let coll = new Map();
let counter = 0;

function updateScore() {
	 //Your code here
    if (counter < 6) {
       // let e = 0;
        clickHandler(e);
     }
    
    scoreCompute();
    
    function clickHandler(){
       getData();
    }
  
    function scoreCompute(){
        //Your code here

        let av;
        let ac;
        let pr;
        let ui;
        let s;
        let b;
        
        // get the values of av
        switch (coll.get("av")) {
            case "AV_N":
                av = .85;
                break;
            case "AV_A":
                av = .62;
                break;
            case "AV_L":
                av = .55;
                break;
            case "AV_P":
                av = .20;
                break;
            default:
                av = 0;
        }     
        //get the values of ac
        //alert(av);
         switch (coll.get("ac")) {
            case "AC_H":
                ac = .44;
                break;
            case "AC_L":
                ac = .77;
                break;
            default:
                ac = 0;
        }   

        // get the values of PR
        switch (coll.get("pr")) {
            case "PR_N":
                pr = .85;
                break;
            case "PR_L":
                pr = .62;
                break;
            case "PR_H":
                pr = .27;
                break;
            default:
                pr = 0;
        }   
        
        //get the values of ui
         switch (coll.get("ui")) {
            case "UI_N":
                ui = .85;
                break;
            case "UI_R":
                ui = .62;
                break;
            default:
                ui = 0;
        }  
        
        //get the values of scope 
         switch (coll.get("s")) {
            case "scope_U":
                s = 1.0;
                break;
            case "scope_C":
                s = 1.08;
                break;
            default:
                s = 0;
        }   
        
        //get the values of base
        switch (coll.get("b")) {
            case "base0":
                b = 0.00;
                break;
            case "base1":
                b = 1.75;
                break;
            case "base2":
                b = 2.75;
                break;

        }   
        

        let se = av * ac * pr * ui;
        
        let finalScore;
            if (b === 0){
                finalScore = 0;
            } else {
                finalScore = s * (3.326258289 * b) + (1.1 * se);
            }

        


        // Scores and what their values are
        /**  
         * ATTACK VECTOR
         * AV - Networking          :   0.85
         * AV - Adjacent Network    :   0.62
         * AV - Local               :   0.55
         * AV - Physical            :   0.20
         * 
         * ATTACK COMPLEXITY
         * AC - Low                 :   0.77
         * AC - High                :   0.44
         * 
         * PREVILEDGE REQUIRED
         * PR - None                :   0.85
         * PR - Low                 :   0.62
         * PR - High                :   0.27
         * 
         * USER INTERACTION
         * UI - None                :   0.85
         * UI - Required            :   0.62
         * 
         * 
         * 
         * CALCULATIONS/FORMULAS
         * 
         * SCOPE STATUS
         * SS - Unchanged           :   1.00
         * SS - Changed             :   1.08
         * 
         * SCORE BASE
         * 0, 1.75, 2.75
         * 
         * SCOPE EXPLOITABILITY
         * SE = AV * AC * PR * UI
         */
        
        function rounder(n, pos){
            let decimals = Math.pow(10, pos);
            return Math.ceil(n * decimals) / decimals;

        }
        let redux = rounder(finalScore, 1);
        if (redux > 10) {
            redux = 10;
        } else if (redux < 0) {
            redux = 0;
        }
        

        let scr = document.getElementById("score");
        scr.innerHTML = redux;



        
    }
}


function getData(){
    
    if(document.getElementById("AV_N").checked){
        av = document.querySelector('input[name="AV"]:checked').value;
        coll.set("av", av);
    }
    if(document.getElementById("AV_A").checked){
        av = document.querySelector('input[name="AV"]:checked').value;
        coll.set("av", av);
    }
    if(document.getElementById("AV_L").checked){
        av = document.querySelector('input[name="AV"]:checked').value;
        coll.set("av", av);
    }
    if(document.getElementById("AV_P").checked){
        av = document.querySelector('input[name="AV"]:checked').value;
        coll.set("av", av);
    }
    if(document.getElementById("AC_H").checked){
        ac = document.querySelector('input[name="AC"]:checked').value;
        coll.set("ac", ac);
    }
    if(document.getElementById("AC_L").checked){
        ac = document.querySelector('input[name="AC"]:checked').value;
        coll.set("ac", ac);
    }
    if(document.getElementById("PR_N").checked){
        pr = document.querySelector('input[name="PR"]:checked').value;
        coll.set("pr", pr);
    }
    if(document.getElementById("PR_L").checked){
        pr = document.querySelector('input[name="PR"]:checked').value;
        coll.set("pr", pr);
    }
    if(document.getElementById("PR_H").checked){
        pr = document.querySelector('input[name="PR"]:checked').value;
        coll.set("pr", pr);
    }
    if(document.getElementById("UI_N").checked){
        ui = document.querySelector('input[name="UI"]:checked').value;
        coll.set("ui", ui);
    }
    if(document.getElementById("UI_R").checked){
        ui = document.querySelector('input[name="UI"]:checked').value;
        coll.set("ui", ui);
    }
    if(document.getElementById("scope_U").checked){
        s = document.querySelector('input[name="scope"]:checked').value;
        coll.set("s", s);
    }
    if(document.getElementById("scope_C").checked){
        s = document.querySelector('input[name="scope"]:checked').value;
        coll.set("s", s);
    } 

    if(document.getElementById("base0").checked){
        b = document.getElementById("base0").id;
        coll.set("b", b);
    } 
    if(document.getElementById("base1").checked){
        b = document.getElementById("base1").id;
        coll.set("b", b);
    } 
    if(document.getElementById("base2").checked){
        b = document.getElementById("base2").id;
        coll.set("b", b);
    }

    
    counter = coll.size;
   
    if(coll.size == 6){
        let deleter = document.getElementById("warning");
        deleter.style.display = "none";
        updateScore();
    }
    
 }

 












































































