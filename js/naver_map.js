var HOME_PATH = window.HOME_PATH || '.';
var dressgarden = new naver.maps.LatLng(37.5206521, 127.0558808),
    map = new naver.maps.Map('map', {
        center: dressgarden.destinationPoint(0, 30),
        zoom: 17
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: dressgarden
    });

var greenMarker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.5206521, 127.0558808),
  map: map,
  title: 'Green',
  icon: {
      content: [
                  '<div class="cs_mapbridge">',
                      '<div class="map_group _map_group crs">',
                          '<div class="map_marker _marker num1 num1_big"> ',
                              '<span class="ico _icon"></span>',
                              '<span class="shd"></span>',
                          '</div>',
                      '</div>',
                  '</div>'
              ].join(''),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
  }});

var contentString = [
    '<div class="iw_inner">',
    '   <h5 class="iw_inner_row">드레스가든</h5>',
    '   <p class="iw_inner_row">서울특별시 강남구 청담동 영동대로 707<br />',
'       <a href="http://www.dressgarden.co.kr" class="iw_inner_row" target="_blank">www.dressgarden.co.kr</a>',
    '   </p>',
    '</div>'
].join('');

var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  backgroundColor: "#eee",
  anchorSize: new naver.maps.Size(0, 0),
  anchorSkew: true,
  anchorColor: "#eee",
  pixelOffset: new naver.maps.Point(0, 0)
});

naver.maps.Event.addListener(marker, "click", function(e) {
if (infowindow.getMap()) {
    infowindow.close();
} else {
    infowindow.open(map, marker);
}
});

infowindow.open(map, marker);