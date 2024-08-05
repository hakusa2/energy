<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      markers: [],
      customOverlay: [],
      imageSrc: "",
      markerImage: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);

      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c4ab2a8dcaa10356701dc3e6306c1563";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      var imageSrc = require("@/assets/icon_marker.png");
      var imageSize = new kakao.maps.Size(32, 31);
      var imageOption = { };

      this.markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
      this.$emit("map-ready");
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
    displayCustomOverlay(markerPositions) {
      if (this.customOverlay.length > 0) {
        this.customOverlay.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map((position) => ({
        desc: position.desc,
        latLng: new kakao.maps.LatLng(position.latitude, position.longitude),
      }));

      if (positions.length > 0) {
        positions.forEach((position) => {
          var iwContent = position.desc;
          var customOverlay = new kakao.maps.CustomOverlay({
            map: this.map,
            position: position.latLng,
            content: iwContent,
            yAnchor: 1,
          });
          this.customOverlay.push(customOverlay);

          //this.map.setLevel(3);
          this.map.panTo(position.latLng);
        });
      } else {
        this.customOverlay = [];
      }
    },
    displayMarker(markerPositions) {
      var maxMarkerCnt=150;

      //기존 마커를 지운다
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => {
          kakao.maps.event.removeListener(
            marker,
            "click",
            this.displayCustomOverlay
          );
          marker.setMap(null);
        });
      }
      if (this.customOverlay.length > 0) {
        this.customOverlay.forEach((marker) => marker.setMap(null));
      }
      var mapMarkerPositions = markerPositions.slice(0, maxMarkerCnt);
      const positions = mapMarkerPositions.map((position) => ({
        desc: position.desc,
        latitude: position.latitude,
        longitude: position.longitude,
        latLng: new kakao.maps.LatLng(position.latitude, position.longitude),
      }));

      if (positions.length > 0) {
        positions.forEach((position) => {
          var marker = new kakao.maps.Marker({
            position: position.latLng,
            image: this.markerImage, // 마커이미지 설정
          });
          marker.setMap(this.map);
          kakao.maps.event.addListener(marker, "click", () => {
            this.displayCustomOverlay([position]);
          });
          this.markers.push(marker);
        });

        const bounds = positions.reduce(
          (bounds, pos) => bounds.extend(pos.latLng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);

        if (markerPositions.length != 0){
          this.displayCustomOverlay([markerPositions[0]]);
        } 
      } else {
        this.markers = [];
      }
    },
  },
  beforeDestroy() {
    if (this.marker) {
      this.marker.setMap(null);
    }

    if (this.markers.length > 0) {
      this.markers.forEach((marker) => {
        kakao.maps.event.removeListener(
          marker,
          "click",
          this.displayCustomOverlay
        );
        marker.setMap(null);
      });
    }
  },
};
</script>

<style scoped>
#map {
  width: 100%;
}
@media screen and (min-width: 960px) {
  #map {
    height: 732px;
  }
}
@media (min-width: 600px) and (max-width: 960px) {
  #map {
    height: 552px;
  }
}
@media screen and (max-width: 600px) {
  #map {
    height: 500px;
  }
}
</style>
<style lang="scss">
.banselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
}
</style>
