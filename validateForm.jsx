
function validateForm(formValues) {
  console.log("inside validate form");
  const currentAgeNum = isNaN(parseInt(formValues.currentAge, 10));
  console.log(currentAgeNum)
  if (currentAgeNum) {
    console.log("age invalid")
    return false;
  }
  console.log(formValues.currentWeight);
  const currentWeightNum = isNaN(parseInt(formValues.currentWeight, 10));
  console.log("what is currentWeightNum ", currentWeightNum);
  if (currentWeightNum) {
    console.log("current weight invalid")
    return false;
  }
  const currentGoalNum = isNaN(parseInt(formValues.goalWeight, 10));
  console.log(currentGoalNum)
  if (currentGoalNum) {
    console.log("currentGoalNum invalid")
    return false;
  }
  const preferedDaysNum = isNaN(parseInt(formValues.preferedDays, 10));
  console.log(preferedDaysNum)
  if (preferedDaysNum) {
    console.log("Prefered days invalid")
    return false;
  }
  const contactNum = isNaN(parseInt(formValues.contactNumber, 10));
  console.log(contactNum)
  if (contactNum) {
    console.log("contact invalid")
    return false;
  }
  if (formValues.firstName.trim() === "" ||
    formValues.lastName.trim() === "" ||
    formValues.currentAge.trim() === "" ||
    formValues.currentWeight.trim() === "" ||
    formValues.goalWeight.trim() === "" ||
    formValues.preferedDays.trim() === "" ||
    formValues.conditions.trim() === "" ||
    formValues.contactNumber.trim() === ""
  ) {
    return false;
  }
  return true;

}

export default validateForm;