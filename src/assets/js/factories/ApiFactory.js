myApp.factory('ApiFactory', function() {
  var obj = {};

  console.log(location.hostname);
  var usedApi = '';

  if (location.hostname === 'localhost') {
    // console.log('Are we in localhost ? ' + location.hostname === "localhost");
    usedApi = "http://bplink-preprod.simplon.space/api/";
  }
  else {
    // console.log('Are we somewhere else ? ' + location.hostname === "localhost");
    usedApi = "http://" + location.hostname + '/api/';
  }
  console.log('usedApi: ' + usedApi);
  obj.api = usedApi;
  console.log(obj.api);
  obj.buttonSearchClicked = false;
  return obj;
  // {
  //   api: usedApi,
  //   buttonSearchClicked: false
  //   // http://bplink.simplon.space/api/
  // };
});
