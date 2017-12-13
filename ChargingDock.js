//defines how all charging stations work.
function ChargingDock(){
//Instance variables
    this.ports=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]; //finish from instructions
    this.leds=["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
      for(let a=0; a<=this.leds.length; a++){
        if(this.leds[a]=="red"){
          this.ports[a]=dvc;
      }
          if(dvc.juice<0.99){
              this.leds= "yellow";
          }
          else if(dvc.juice >= 0.99){
              this.leds = "green";
          }
        }
      }
      return this.ports[a];
        //type in here
    };

    this.unplug = function(dvcIdx){
        if(!(this.leds == "red" )){
            let temp = this.ports[dvcIdx];
            this.ports[dvcIdx] = undefined;
            this.leds[dvcIdx]= "red";
            return temp;
        }
    };

    this.chargeAll = function(min){
        //type in here
    };


}

//defines the testing code
function main(){}

//runs the main code
main();
