import * as yup from 'yup';

// function noWhiteSpace(){
//   return this.transform((value, originalValue)=>(/\s/.test(originalValue) ? NaN : value))

// }

// yup.addMethod(yup.string, 'noWhiteSpace',noWhiteSpace);
const adminValidator = yup.object().shape({
  adminName: yup.string().required().trim().matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'adminName must be valid'),
  email: yup.string().email().required().trim(),
  password: yup.string().min(8).required(),
});

export default adminValidator;
