import validator from 'validator';

export const emailValidation = (email) => {
  if (!email) return true;
  return validator.isEmail(email);
}

export const nameValidation = (name) => {
  if (!name) return true;
  return new RegExp(/^[a-zA-Z0-9. ]{4,30}$/).test(name);
}