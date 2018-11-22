console.log(">>> Hello requirejs!");
require(["lib/jquery"], function ($) {
    console.log($);
});