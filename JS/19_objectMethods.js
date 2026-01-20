let mySmartPhone = {

  //properties
  brand: "Apple",
  model: "iPhone 17",
  color: "black",
  batteryLevel: 85,

  //methods
  //one way to create method
  makeCall: function(number){
    console.log(`Calling ${number}...`);
  },

  //another way to create method. most popular
  takephoto(){
    console.log("Click! Click!!...Taking a photo...");
  },

  checkBatteryLevel(){
    console.log(`Battery level is ${this.batteryLevel}%`);
  },

  describe(){
    return `My phone brand is ${this.brand}, the model is ${this.model}, color is ${this.color} and the battery level is ${this.batteryLevel}%`;
  }
}


// mySmartPhone.makeCall(123456789);
// mySmartPhone.takephoto();
// mySmartPhone.checkBatteryLevel();
let describePhone = mySmartPhone.describe();
console.log(describePhone);
