var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var teaminfos = new Schema({
name:{
 type:String,
 required:false
},
description:{
 type:String,
 required:false
}
});
module.exports = mongoose.model('teaminfos', teaminfos);