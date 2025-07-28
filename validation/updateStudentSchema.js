const updateStudentSchema = {
  id: {
    in: ["params"],
    isNumeric: true,
  },
  username: {
    in: ["body"],
    optional: true,
    isLength: {
      options: { min: 3, max: 15 },
      errorMessage: "Username must be between 3 to 15 characters",
    },
  },
  password: {
    in: ["body"],
    optional: true,
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters",
    },
  },
  course: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "Course must be a string",
    },
  },
};

module.exports = updateStudentSchema;
