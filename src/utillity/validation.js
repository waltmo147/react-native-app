const validate = (val, rules, connctedValue) => {
  let isValid = true;
  for (let rule in rules) {

    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(val);
        break;
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case 'equalTo':
        isValid = isValid && equalToValidator(val, connctedValue[rule]);
        break;
      case 'notEmtpy':
        isValid = isValid && notEmptyValidator(val);
      default:
        isValid = true;
    }
  }
  return isValid;
}

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
}

const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
}

const equalToValidator = (val, check) => {
  return val === check
}

const notEmptyValidator = val => {
  return val.trim() !== "";
}

export default validate;
