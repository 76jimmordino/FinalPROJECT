//defines how all charging stations work.
function ChargingDock(){
//Instance variables
    this.ports=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]; //finish from instructions
    this.leds=["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
      for(let a=0; a<=this.leds.length; a++){
        if(this.led[a]=="red"){
          this.ports[a]=dvc;
          if(this.juice<0.99)

        }
      )
      }

        //type in here
    };

    this.unplug = function(dvcIdx){
        //type in here
    };

    this.chargeAll = function(min){
        //type in here
    };


}

//defines the testing code
function main(){}

//runs the main code
main();
