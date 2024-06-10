const validator = require("validatorjs");
const z = require("zod");

const data = {
    name:"a",
    email:"a@gmail.com",
    password:"abbbbbccccc"
  };
  const rules = {
    name:'min:2',
    email:'required|email',
    password:'min:6'
  }
  let validation = new validator(data,rules,{min:':attribute should be atleast :min characters long'})
validation.passes();
// console.log(z.string("abcdefg").min(5, { message: "Must be 5 or more characters long" }));
// console.log(validation.errors.all());   