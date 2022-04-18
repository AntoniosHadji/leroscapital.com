(() => {
  "use strict";
  var e = {
      d: (o, t) => {
        for (var r in t)
          e.o(t, r) &&
            !e.o(o, r) &&
            Object.defineProperty(o, r, { enumerable: !0, get: t[r] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    o = {};
  e.r(o), e.d(o, { initMap: () => r });
  const t = {
    sis: { center: { lat: 38.8712041, lng: -77.1143355 } },
    antonios: { center: { lat: 40.0005234, lng: -75.2943201 } },
  };
  function r() {
    const e = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: { lat: 39.2903848, lng: -76.6121893 },
      mapTypeId: "terrain",
    });
    for (const o in t) {
      new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: e,
        center: t[o].center,
        radius: 1e5, // 100km
      });

      new google.maps.Marker({
        position: t[o].center,
        map: e,
      });
    }
  }
  var n = window;
  for (var l in o) n[l] = o[l];
  o.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
})();
