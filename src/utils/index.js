export default {
  userEmail:{
    presence: true,
    format: {
      pattern : /^[A-Za-z\d@.]+$/,
      message:'Please fill out this field.'
    },
    length: {
      maximum: 25,
      minimum:4,
      message: 'Please include an "@" in the email address'
    }
  },
  name:{
    presence: true,
    format: {
      pattern: /^[A-Za-zА-Яа-я\s]+$/,
      message:'Enter your name'
    }
  },
  password:{
    presence: true,
    format:{
      pattern: /^[a-z\d!_]+$/,
      message:'Please fill out this field.'
    },
    length: {
      maximum: 12,
      minimum: 6,
      message:'please check your password must be more then 6 symbols min 12 symbol'
    }
  }
}
