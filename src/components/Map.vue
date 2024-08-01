<template>
    <div>
        <div id="map"></div>
    </div>
</template>
  
  <script>
  export default {
    name: 'Map',
    data() {
        return {
            markers: [],
        }
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap()
        } else {
            const script = document.createElement('script')
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap)
    
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c4ab2a8dcaa10356701dc3e6306c1563'
            document.head.appendChild(script)
        }
    },
    methods: {
        initMap() {
            const container = document.getElementById('map')
            const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 5,
            }
            this.map = new kakao.maps.Map(container, options)
            this.$emit('map-ready');
        },
        changeSize(size) {
            const container = document.getElementById('map')
            container.style.width = `${size}px`
            container.style.height = `${size}px`
            this.map.relayout()
        },
        displayMarker(markerPositions) {
            //기존 마커를 지운다
            if (this.markers.length > 0) {
                this.markers.forEach((marker) => marker.setMap(null))
            }
            

            
            const positions = markerPositions.map((position) => ({
                desc: position.desc,
                latLng: new kakao.maps.LatLng(position.latitude, position.longitude),
            }))

            if (positions.length > 0) {
                positions.forEach(
                    (position) =>{


                        var iwContent = `
                            <div style="
                            padding: 10px;
                            border-radius: 4px;
                            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
                            background-color: #fff;
                            border: 1px solid #ddd;
                            font-size: 14px;
                            color: #333;
                            ">
                            ${position.desc}
                        </div>`;

                        var customOverlay= new kakao.maps.CustomOverlay({
                            map: this.map,
                            position: position.latLng,
                            content: iwContent,
                        });
                        this.markers.push(customOverlay);
                    }
                )
        
                const bounds = positions.reduce((bounds, pos) => bounds.extend(pos.latLng), new kakao.maps.LatLngBounds());
    
                this.map.setBounds(bounds)
            }
            else{
                this.markers =[]
            }
        },
        },
    }
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 550px;
    position: absolute; 
    top: 0;
    left: 0;
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
  
  