export default {
  userEmail:{
    presence: true,
    format: {
      pattern : /^[A-Za-z\d@.]+$/,
      message:'invalid email'
    },
    length: {
      maximum: 25,
      minimum:4,
      message: 'more then 4 symbols minimum then 20 symbols'
    }
  },
  name:{
    presence: true,
    format: {
      pattern: /^[A-Za-zА-Яа-я\s]+$/,
      message:'Enter your correct name'
    }
  },
  password:{
    presence: true,
    format:{
      pattern: /^[a-z\d!_]+$/,
      message:'wrong password!'
    },
    length: {
      maximum: 12,
      minimum: 6,
      message:'PASSWORD then 6 symbols minimum 10 symbol'
    }
  }
}
