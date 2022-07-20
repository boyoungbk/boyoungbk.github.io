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
    map: map,
    icon: {
        content: '<img src="'+ HOME_PATH +'/img/marker.png" alt="" ' +
                 'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; filter: drop-shadow(0 0 0.75rem #FF2C2C);' +
                 '-webkit-user-select: none; position: absolute; width: 50px; height: 50px; left: 0px; top: 0px; filter: drop-shadow(0 0 0.75rem #FF2C2C);">',
        anchor: new naver.maps.Point(25, 44)
    },
    animation: naver.maps.Animation.BOUNCE
});

var contentString = [
    '<div class="iw_inner" ' + 'style="width: 280px; height: 120px;" id="focus-in-expand">',
    '   <h5 class="iw_inner_row">💍 드레스가든</h5>',
    '   <p class="iw_inner_row"">서울특별시 강남구 청담동 영동대로 707 </p>',
    '   <div>',
    '   <button class="info_btn" onclick="windowopen_dress()" class="iw_inner_row">웹사이트</button>',
    '   <button class="info_btn" onclick="windowopen_road()">길찾기</button>',
    '</div>',
    '</div>'
].join('');

var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  backgroundColor: "white",
  borderWidth: 0,
  disableAnchor: true,
  pixelOffset: new naver.maps.Point(0, -50),
});

naver.maps.Event.addListener(marker, "click", function(e) {
if (infowindow.getMap()) {
    infowindow.close();
} else {
    infowindow.open(map, marker);
}
});

infowindow.open(map, marker);

function windowopen_dress() {
    window.open("http://www.dressgarden.co.kr");
}

function windowopen_road() {
    window.open("https://map.naver.com/v5/directions/-/14143807.775076758,4511938.845735963,%EB%93%9C%EB%A0%88%EC%8A%A4%EA%B0%80%EB%93%A0,35296468,PLACE_POI/-/transit?c=14143778.6650299,4511938.8457360,19,0,0,0,dh");
}