const InstrumentFamilies = require("./models/instrument_families.js");
const InstrumentFamilyInfoView = require("./views/instrument_families_info_view.js");
const SelectView = require("./views/select_view.js");

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const selectView = new SelectView();
  selectView.setupListenerForUserChoice();
  selectView.receiveData();

  const instrumentFamilyInfoView = new InstrumentFamilyInfoView();
  instrumentFamilyInfoView.setupListenerForSelectedObject();

  const instrumentFamiliesModel = new InstrumentFamilies();
  instrumentFamiliesModel.setupListenerForUserChoice();
  instrumentFamiliesModel.sendOutData();
});
