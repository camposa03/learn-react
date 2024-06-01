
function validateForm(formValues) {

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
  const currentAgeNum = isNaN(parseInt(formValues.currentAge, 10));
  console.log(currentAgeNum)
  if (currentAgeNum) {
    return false;
  }
  const currentWeightNum = isNaN(parseInt(formValues.currentWeightNum, 10));
  console.log(currentWeightNum)
  if (currentWeightNum) {
    return false;
  }
  const currentGoalNum = isNaN(parseInt(formValues.currentGoalNum, 10));
  console.log(currentGoalNum)
  if (currentGoalNum) {
    return false;
  }
  const preferedDaysNum = isNaN(parseInt(formValues.preferedDaysNum, 10));
  console.log(preferedDaysNum)
  if (preferedDaysNum) {
    return false;
  }
  const contactNum = isNaN(parseInt(formValues.contactNum, 10));
  console.log(contacttNum)
  if (contactNum) {
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