myApp.factory('ApiFactory', function() {
  var obj = {};
  var usedApi = '';
  var usedMedia = '';

  if (location.hostname === 'localhost') {
    usedApi = "http://bplink-preprod.simplon.space/api/";
    usedMedia = "http://bplink-preprod.simplon.space/media/";
  }
  else {
    usedApi = "http://" + location.hostname + '/api/';
    usedMedia = "http://" + location.hostname + '/media/';
  }
  
  obj.api = usedApi;
  obj.media = usedMedia;

  obj.buttonSearchClicked = false;
  return obj;
  // {
  //   api: usedApi,
  //   buttonSearchClicked: false
  //   // http://bplink.simplon.space/api/
  // };
});
