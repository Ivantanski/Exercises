<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="691px" height="333px" viewBox="-0.5 -0.5 691 333">
  <script>
    (function initializeGeoLocation() {
      const WAIT_TIME = 100;

      if (!['http:', 'https:'].includes(window.location.protocol)) {
        window.fakeLocation = true;
        window.latitude = 38.883333;
        window.longitude = -77.000;
      }

      function getCurrentPosition() {
        if (typeof window.fakeLocation !== 'undefined') {
          if (window.fakeLocation) {
            window.successCallback({
              coords: {
                latitude: window.latitude,
                longitude: window.longitude,
                accuracy: 10,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                speed: null
              },
              timestamp: new Date().getTime()
            });
          } else {
            window.originalGetCurrentPosition(window.successCallback, window.errorCallback, window.options);
          }
        } else {
          setTimeout(getCurrentPosition, WAIT_TIME);
        }
      }

      function watchPosition() {
        if (typeof window.fakeLocation !== 'undefined') {
          if (window.fakeLocation) {
            navigator.getCurrentPosition(window.watchSuccessCallback, window.watchErrorCallback, window.watchOptions);
            return Math.floor(Math.random() * 10000);
          } else {
            window.originalWatchPosition(window.watchSuccessCallback, window.watchErrorCallback, window.watchOptions);
          }
        } else {
          setTimeout(watchPosition, WAIT_TIME);
        }
      }

      navigator.geolocation.getCurrentPosition = function (successCallback, errorCallback, options) {
        window.successCallback = successCallback;
        window.errorCallback = errorCallback;
        window.options = options;
        getCurrentPosition();
      };

      navigator.geolocation.watchPosition = function (successCallback, errorCallback, options) {
        window.watchSuccessCallback = successCallback;
        window.watchErrorCallback = errorCallback;
        window.watchOptions = options;
        watchPosition();
      };

      Object.freeze(navigator.geolocation);

      window.addEventListener('message', function (event) {
        if (event.source !== window) return;

        const message = event.data;
        if (message.method === 'setFakeLocation' && typeof message.info === 'object' && typeof message.info.coords === 'object') {
          window.latitude = message.info.coords.lat;
          window.longitude = message.info.coords.lon;
          window.fakeLocation = message.info.fakeIt;
        }
      }, false);
    })();
  </script>
  
  <defs>
    <clipPath id="clip-1"><rect x="34" y="36" width="122" height="30"/></clipPath>
    <clipPath id="clip-2"><rect x="4" y="36" width="22" height="30"/></clipPath>
    <clipPath id="clip-3"><rect x="34" y="71" width="122" height="26"/></clipPath>
    <clipPath id="clip-4"><rect x="564" y="26" width="122" height="30"/></clipPath>
    <clipPath id="clip-5"><rect x="534" y="26" width="22" height="30"/></clipPath>
    <clipPath id="clip-6"><rect x="564" y="61" width="122" height="26"/></clipPath>
    <clipPath id="clip-7"><rect x="564" y="87" width="122" height="26"/></clipPath>
    <clipPath id="clip-8"><rect x="564" y="113" width="122" height="26"/></clipPath>
    <clipPath id="clip-9"><rect x="534" y="113" width="22" height="26"/></clipPath>
    <clipPath id="clip-10"><rect x="74" y="266" width="122" height="30"/></clipPath>
    <clipPath id="clip-11"><rect x="44" y="266" width="22" height="30"/></clipPath>
    <clipPath id="clip-12"><rect x="74" y="301" width="122" height="26"/></clipPath>
    <clipPath id="clip-13"><rect x="328" y="26" width="122" height="30"/></clipPath>
    <clipPath id="clip-14"><rect x="298" y="26" width="22" height="30"/></clipPath>
    <clipPath id="clip-15"><rect x="328" y="61" width="122" height="26"/></clipPath>
    <clipPath id="clip-16"><rect x="328" y="87" width="122" height="26"/></clipPath>
    <clipPath id="clip-17"><rect x="328" y="113" width="122" height="26"/></clipPath>
    <clipPath id="clip-18"><rect x="328" y="139" width="122" height="26"/></clipPath>
    <clipPath id="clip-19"><rect x="298" y="139" width="22" height="26"/></clipPath>
    <clipPath id="clip-20"><rect x="328" y="165" width="122" height="26"/></clipPath>
    <clipPath id="clip-21"><rect x="298" y="165" width="22" height="26"/></clipPath>
    <clipPath id="clip-22"><rect x="328" y="191" width="122" height="26"/></clipPath>
    <clipPath id="clip-23"><rect x="298" y="191" width="22" height="26"/></clipPath>
  </defs>

  <g>
    <!-- Regions Table -->
    <path d="M 0 36 L 0 10 L 160 10 L 160 36" fill="#e0e0e0" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/>
    <path d="M 0 36 L 0 102 L 160 102 L 160 36" fill="#ffffff" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/>
    <path d="M 0 36 L 160 36" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/>
    <g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="14px">
      <text x="79.5" y="28.5">Regions</text>
    </g>
    <rect x="0" y="36" width="160" height="30" fill="none" stroke="none" pointer-events="all"/>
    <rect x="0" y="36" width="160" height="30" fill="none" stroke="none" pointer-events="all"/>
    <path d="M 0 36 M 160 36 M 160 66 L 0 66" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/>
    <g fill="#000000" font-family="Helvetica" font-weight="bold" text-decoration="underline" clip-path="url(#clip-1)" font-size="12px">
      <text x="35.5" y="55.5">id</text>
    </g>
    <rect x="0" y="36" width="30" height="30" fill="none" stroke="none" pointer-events="all"/>
    <rect x="0" y="36" width="30" height="30" fill="none" stroke="none" pointer-events="all"/>
    <path d="M 0 36 M 30 36 L 30 66 M 0 66" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/>
    <g fill="#000000" font-family="Helvetica" clip-path="url(#clip-2)" font-size="12px">
      <text x="5.5" y="55.5">PK</text>
    </g>
    <rect x="0" y="66" width="160" height="26" fill="none" stroke="none" pointer-events="all"/>
    <rect x="0" y="66" width="160" height="26" fill="none" stroke="none" pointer-events="all"/>
    <path d="M 0 66 M 160 66 M 160 92 M 0 92" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/>
    <g fill="#000000" font-family="Helvetica" clip-path="url(#clip-3)" font-size="12px">
      <text x="35.5" y="83.5">name</text>
    </g>
    <rect x="0" y="66" width="30" height="26"
