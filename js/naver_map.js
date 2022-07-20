var HOME_PATH = window.HOME_PATH || '.';
var dressgarden = new naver.maps.LatLng(37.5207073, 127.0559457)

var mapOptions = {
    center: dressgarden.destinationPoint(0, -10),
        zoom: 16,
        maxZoom:19,
        minZoom: 11,
        mapDataControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.LARGE,
            position: naver.maps.Position.LEFT_BOTTOM,
        },
        logoControl: true,
        logoControlOptions: {
            position: naver.maps.Position.LEFT_BOTTOM},
        scaleControl: false,
}

var map = new naver.maps.Map(document.getElementById('map'), mapOptions);

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5207073, 127.0559457),
    map: map,
    icon: {
        url: HOME_PATH +'/img/marker.png',
        size: new naver.maps.Size(50, 50),
        scaledSize: new naver.maps.Size(50, 50),
        origin: new naver.maps.Point(0, 0),
    },
    animation: naver.maps.Animation.BOUNCE
});

var contentString = [
    '<div class="iw_inner" ' + 'style="width: 280px; height: 110px;" id="focus-in-expand">',
    '   <h5 class="info_head">[ 드레스가든 ]</h5>',
    '   <p class="iw_inner_row"">서울특별시 강남구 청담동 영동대로 707 </p>',
    '   <div class="info_btn_wrapper">',
    '       <button class="info_btn" onclick="windowopen_dress()" class="iw_inner_row">💻 웹사이트</button>',
    '       <button class="info_btn" onclick="windowopen_road()">🚌 길찾기</button>',
    '   </div>',
    '</div>'
].join('');

var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  backgroundColor: "white",
  borderWidth: 0,
  disableAnchor: true,
  pixelOffset: new naver.maps.Point(0, -35),
});

naver.maps.Event.addListener(marker, "click", function(e) {
if (infowindow.getMap()) {
    infowindow.close();
} else {
    infowindow.open(map, marker);
}
});

infowindow.open(map, marker);


// 교통상황 레이어
var trafficLayer = new naver.maps.TrafficLayer({
    interval: 300000 // 5분마다 새로고침 (최소값 5분)
});

var btn = document.getElementById('traffic');

naver.maps.Event.addListener(map, 'trafficLayer_changed', function(trafficLayer) {
    if (trafficLayer) {
        btn.classList.add('control-on');
    } else {
        btn.classList.remove('control-on');
    }
});

btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (trafficLayer.getMap()) {
        trafficLayer.setMap(null);
        btn.style.color="black"
    } else {
        trafficLayer.setMap(map);
        btn.style.color="#2F87EC"
    }
});

naver.maps.Event.once(map, 'init', function() {
    trafficLayer.setMap(map);
});


// 새창 열기

function windowopen_dress() {
    window.open("http://www.dressgarden.co.kr");
}

function windowopen_road() {
    window.open("https://map.naver.com/v5/directions/-/14143807.775076758,4511938.845735963,%EB%93%9C%EB%A0%88%EC%8A%A4%EA%B0%80%EB%93%A0,35296468,PLACE_POI/-/transit?c=14143778.6650299,4511938.8457360,19,0,0,0,dh");
}