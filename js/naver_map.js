var HOME_PATH = window.HOME_PATH || '.';
var dressgarden = new naver.maps.LatLng(37.5207073, 127.0559457)

var mapOptions = {
    center: dressgarden.destinationPoint(0, 30),
        zoom: 17,
        maxZoom:19,
        minZoom: 11,
        zoomControl: true,
        zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.MEDIUM,
            position: naver.maps.Position.TOP_RIGHT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: naver.maps.MapTypeControlStyle.BUTTON,
            position: naver.maps.Position.TOP_LEFT
        }
}

var map = new naver.maps.Map(document.getElementById('map'), mapOptions);

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5207073, 127.0559457),
    map: map
});

var contentString = [
    '<div class="iw_inner">',
    '   <h5 class="iw_inner_row">💍 드레스가든</h5>',
    '   <p class="iw_inner_row">서울특별시 강남구 청담동 영동대로 707 <br />',
    '   <a href="http://www.dressgarden.co.kr" class="iw_inner_row" target="_blank">www.dressgarden.co.kr</a>',
    '   <a class="bubbly-button" href="https://map.naver.com/v5/directions/-/14143807.775076758,4511938.845735963,%EB%93%9C%EB%A0%88%EC%8A%A4%EA%B0%80%EB%93%A0,35296468,PLACE_POI/-/transit?c=14143778.6650299,4511938.8457360,19,0,0,0,dh"; target="_blank" style="padding: 5px; background-color: #666; border-radius: 4px; color: white; font-family: S-CoreDream-3Light; text-decoration: none;">길찾기</a>',
    '   </p>',
    '</div>'
].join('');

var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  backgroundColor: "white",
  borderWidth: 0,
  borderRadius: "4px",
  anchorSize: new naver.maps.Size(0, 20),
  anchorSkew: true,
  anchorColor: "#eee",
  pixelOffset: new naver.maps.Point(0, 20)
});

naver.maps.Event.addListener(marker, "click", function(e) {
if (infowindow.getMap()) {
    infowindow.close();
} else {
    infowindow.open(map, marker);
}
});

infowindow.open(map, marker);