"use strict";const e=require("../common/vendor.js");exports.getToken=function(){return e.index.getStorageSync("token")},exports.removeToken=function(){return e.index.removeStorageSync("token")},exports.setToken=function(n){return e.index.setStorageSync("token",n)};
