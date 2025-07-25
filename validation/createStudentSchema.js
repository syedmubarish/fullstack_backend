const createStudentSchema = {
  username: {
    isLength: {
      options: { min: 3, max: 15 },
      errorMessage: "Username must be inbetween 3 to 15 characters",
    },
    notEmpty : {
        errorMessage : "Username must not be empty"
    }
  },
  password:{
    isLength: {
      options: { min: 8},
      errorMessage: "Password must be atleast 8 characters",
    },
    notEmpty : {
        errorMessage : "Password must not be empty"
    }
  },
  course:{
    optional: true,
    isString :{
        errorMessage : "Course must be string"
    }
  }
};



module.exports = createStudentSchema