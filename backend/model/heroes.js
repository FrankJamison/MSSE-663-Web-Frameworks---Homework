//FILENAME : Hero.js

const { Int32 } = require("bson");
const { truncate } = require("fs");
const mongoose = require("mongoose");

const HeroesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  build: {
    type: String,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("heroes", HeroesSchema);
