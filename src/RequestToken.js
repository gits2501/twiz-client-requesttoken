var OAuth  = require('twiz-client-oauth');

   function RequestToken(){
      OAuth.call(this);
      this.name = this.leg[0];
   }

   RequestToken.prototype = Object.create(OAuth.prototype);

   module.exports = RequestToken;
