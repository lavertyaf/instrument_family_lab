const PubSub = require("../helpers/pub_sub.js")

const SelectView = function(){

}

SelectView.prototype.receiveData = function(){
  PubSub.subscribe("InstrumentFamilies:Data-Ready", (event) => {
    const data = event.detail;
    console.log(data);
    this.populateSelect(data);
  });
};

SelectView.prototype.populateSelect = function (data) {
  const select = document.querySelector("select#instrument-families");

  data.forEach((family, index) => {
    const option = document.createElement("option");
    option.textContent = family.name;
    option.value = index;
    select.appendChild(option);
  });
};

SelectView.prototype.setupListenerForUserChoice = function(){
  const select = document.querySelector("select#instrument-families");
  console.log("select", select);
  select.addEventListener("change",(event) => {

    const index = event.target.value;
    PubSub.publish("selectview:user-choice",index);
  });
};

module.exports = SelectView;
