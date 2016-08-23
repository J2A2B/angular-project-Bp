myApp.factory('ApiFactory', function() {
  var obj = {};

  console.log(location.hostname);
  var usedApi = '';

  if (location.hostname === 'localhost') {
    usedApi = "http://bplink-preprod.simplon.space/api/";
  }
  else {
    usedApi = "http://" + location.hostname + '/api/';
  }
  obj.api = usedApi;

  obj.media = "http://bplink-preprod.simplon.space/media/";

  obj.buttonSearchClicked = false;
  return obj;
  // {
  //   api: usedApi,
  //   buttonSearchClicked: false
  //   // http://bplink.simplon.space/api/
  // };
});
