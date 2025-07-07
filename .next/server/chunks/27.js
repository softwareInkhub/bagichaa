"use strict";exports.id=27,exports.ids=[27],exports.modules={37027:(e,t,s)=>{s.d(t,{Z:()=>m});var r=s(95344),a=s(3729),l=s(91917),n=s(16278),i=s(27860),o=s(7060),c=s(25545),d=s(80508),u=s(42739),g=s(40626);let m=({orderId:e,trackingData:t,mode:s,height:m="400px",showControls:p=!0,showRoute:h=!0,onLocationUpdate:x,onDirectionsClick:w,riderInfo:f})=>{let v=(0,a.useRef)(null),y=(0,a.useRef)(null),b=(0,a.useRef)(null),j=(0,a.useRef)(null),k=(0,a.useRef)(null),N=(0,a.useRef)(null),Z=(0,a.useRef)(null),[L,M]=(0,a.useState)(!0),[C,z]=(0,a.useState)(null),[S,A]=(0,a.useState)(null),[R,D]=(0,a.useState)(!1),P=(0,a.useCallback)(()=>{if(window.google&&window.google.maps){T();return}if(!document.querySelector('script[src*="maps.googleapis.com"]')){let e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIHawXZZfiYMhBUznsnbXS0LOId9u5FLA&libraries=geometry,places",e.async=!0,e.defer=!0,e.onload=T,e.onerror=()=>z("Failed to load Google Maps"),document.head.appendChild(e)}},[]),T=(0,a.useCallback)(()=>{if(!v.current||!window.google){z("Map container not available");return}try{y.current=new window.google.maps.Map(v.current,{zoom:14,center:{lat:28.6139,lng:77.209},mapTypeControl:!1,streetViewControl:!1,fullscreenControl:"admin"===s,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}),k.current=new window.google.maps.DirectionsService,N.current=new window.google.maps.DirectionsRenderer({suppressMarkers:!0,polylineOptions:{strokeColor:"#10B981",strokeWeight:4,strokeOpacity:.8}}),N.current.setMap(y.current),M(!1),"rider"===s&&q(),t&&B(t)}catch(e){z("Failed to initialize map"),M(!1)}},[s,t]),q=(0,a.useCallback)(()=>{navigator.geolocation&&(D(!0),Z.current=navigator.geolocation.watchPosition(e=>{let t={lat:e.coords.latitude,lng:e.coords.longitude};A(t),x&&x(t),b.current?b.current.setPosition(t):F(t),y.current&&y.current.setCenter(t)},e=>{D(!1)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:3e4}))},[x]);(0,a.useCallback)(()=>{Z.current&&(navigator.geolocation.clearWatch(Z.current),Z.current=null),D(!1)},[]);let F=(0,a.useCallback)(e=>{if(y.current&&window.google&&(b.current&&b.current.setMap(null),b.current=new window.google.maps.Marker({position:e,map:y.current,title:"Delivery Partner",icon:{url:"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(`
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="#10B981" stroke="#ffffff" stroke-width="3"/>
            <path d="M10 16L14 20L22 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `),scaledSize:new window.google.maps.Size(32,32),anchor:new window.google.maps.Point(16,16)},animation:window.google.maps.Animation.DROP}),f&&"rider"!==s)){let e=new window.google.maps.InfoWindow({content:`
          <div class="p-3 min-w-[200px]">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="currentColor" class="text-green-600">
                  <path d="M8 16l2.879-2.879a3 3 0 114.242 4.242L8 24l-7.121-7.121a3 3 0 114.242-4.242L8 16z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">${f.name}</h4>
                <p class="text-sm text-gray-600">${f.vehicle}</p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span class="text-yellow-400">⭐</span>
                <span class="text-sm font-medium">${f.rating}</span>
              </div>
              <button onclick="window.open('tel:${f.phone}')" 
                class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                <svg width="14" height="14" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call
              </button>
            </div>
          </div>
        `});b.current.addListener("click",()=>{e.open(y.current,b.current)})}},[f,s]),I=(0,a.useCallback)(e=>{y.current&&window.google&&(j.current&&j.current.setMap(null),j.current=new window.google.maps.Marker({position:e,map:y.current,title:"Delivery Address",icon:{url:"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(`
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="#EF4444" stroke="#ffffff" stroke-width="3"/>
            <path d="M16 8v8l4 4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `),scaledSize:new window.google.maps.Size(32,32),anchor:new window.google.maps.Point(16,16)}}))},[]),_=(0,a.useCallback)((e,t)=>{k.current&&N.current&&k.current.route({origin:e,destination:t,travelMode:window.google.maps.TravelMode.DRIVING,optimizeWaypoints:!0},(e,t)=>{"OK"===t&&N.current.setDirections(e)})},[]),B=(0,a.useCallback)(e=>{if(y.current&&(e.riderLocation&&F(e.riderLocation),e.customerLocation&&I(e.customerLocation),e.riderLocation&&e.customerLocation&&h&&_(e.riderLocation,e.customerLocation),e.riderLocation||e.customerLocation)){let t=new window.google.maps.LatLngBounds;e.riderLocation&&t.extend(e.riderLocation),e.customerLocation&&t.extend(e.customerLocation),y.current.fitBounds(t),window.google.maps.event.addListenerOnce(y.current,"bounds_changed",()=>{y.current.getZoom()>16&&y.current.setZoom(16)})}},[h,F,I,_]);return((0,a.useEffect)(()=>(P(),()=>{Z.current&&navigator.geolocation.clearWatch(Z.current)}),[P]),(0,a.useEffect)(()=>{t&&y.current&&B(t)},[t,B]),C)?(0,r.jsxs)("div",{className:"bg-red-50 border border-red-200 rounded-lg p-8 text-center",style:{height:m},children:[r.jsx("div",{className:"text-red-600 mb-2",children:r.jsx(d.Z,{className:"w-8 h-8 mx-auto"})}),r.jsx("p",{className:"text-red-700 font-medium",children:"Map Error"}),r.jsx("p",{className:"text-red-600 text-sm mt-1",children:C})]}):(0,r.jsxs)("div",{className:"relative",children:[r.jsx("div",{ref:v,className:"w-full rounded-lg border border-gray-200",style:{height:m}}),L&&r.jsx("div",{className:"absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-lg",children:(0,r.jsxs)("div",{className:"text-center",children:[r.jsx(u.Z,{className:"w-8 h-8 animate-spin text-green-600 mx-auto mb-2"}),r.jsx("p",{className:"text-gray-600",children:"Loading map..."})]})}),p&&t&&r.jsx("div",{className:"absolute top-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`p-2 rounded-full ${(e=>{switch(e){case"assigned":return"text-blue-600 bg-blue-100";case"picked_up":return"text-orange-600 bg-orange-100";case"out_for_delivery":return"text-green-600 bg-green-100";case"delivered":return"text-purple-600 bg-purple-100";default:return"text-gray-600 bg-gray-100"}})(t.status)}`,children:(e=>{switch(e){case"assigned":return r.jsx(l.Z,{className:"w-4 h-4"});case"picked_up":return r.jsx(n.Z,{className:"w-4 h-4"});case"out_for_delivery":return r.jsx(i.Z,{className:"w-4 h-4"});case"delivered":return r.jsx(o.Z,{className:"w-4 h-4"});default:return r.jsx(c.Z,{className:"w-4 h-4"})}})(t.status)}),(0,r.jsxs)("div",{children:[r.jsx("p",{className:"font-semibold text-gray-900 capitalize",children:t.status.replace("_"," ")}),t.estimatedArrival&&(0,r.jsxs)("p",{className:"text-sm text-gray-600",children:["ETA: ",new Date(t.estimatedArrival).toLocaleTimeString()]})]})]}),"rider"===s&&w&&(0,r.jsxs)("button",{onClick:w,className:"bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors",children:[r.jsx(i.Z,{className:"w-4 h-4"}),"Directions"]})]})}),"rider"===s&&r.jsx("div",{className:"absolute bottom-4 left-4",children:r.jsx("div",{className:`px-3 py-2 rounded-lg shadow-lg ${R?"bg-green-600 text-white":"bg-yellow-600 text-white"}`,children:r.jsx("div",{className:"flex items-center gap-2",children:R?(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"}),r.jsx("span",{className:"text-sm font-medium",children:"Live Tracking"})]}):(0,r.jsxs)(r.Fragment,{children:[r.jsx(d.Z,{className:"w-4 h-4"}),r.jsx("span",{className:"text-sm font-medium",children:"GPS Disabled"})]})})})}),"customer"===s&&t&&f&&r.jsx("div",{className:"absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-full flex items-center justify-center",children:r.jsx(n.Z,{className:"w-6 h-6 text-green-600"})}),(0,r.jsxs)("div",{children:[r.jsx("p",{className:"font-semibold text-gray-900",children:f.name}),r.jsx("p",{className:"text-sm text-gray-600",children:f.vehicle}),(0,r.jsxs)("div",{className:"flex items-center gap-1 mt-1",children:[r.jsx("span",{className:"text-yellow-400",children:"⭐"}),r.jsx("span",{className:"text-sm font-medium",children:f.rating})]})]})]}),r.jsx("button",{onClick:()=>window.open(`tel:${f.phone}`),className:"bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors",children:r.jsx(g.Z,{className:"w-5 h-5"})})]})})]})}},7060:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},25545:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},42739:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},80508:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},27860:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]])},91917:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]])},40626:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},16278:(e,t,s)=>{s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(69224).Z)("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]])}};