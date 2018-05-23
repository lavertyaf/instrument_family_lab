const PubSub = require("../helpers/pub_sub.js");

const InstrumentFamilyInfoView = function(){

}

InstrumentFamilyInfoView.prototype.setupListenerForSelectedObject = function(){
  PubSub.subscribe("instrumentFamilies:send-family",(event) => {
    const familyObject = event.detail;
    this.displayObject(familyObject);
  });
}

InstrumentFamilyInfoView.prototype.displayObject = function (object){
  const infoContainer = document.querySelector("#instrumentFamilyInfo");
  const paragraph = document.createElement('p');
  paragraph.textContent = object.name;
  infoContainer.appendChild(paragraph);
}

module.exports = InstrumentFamilyInfoView;
