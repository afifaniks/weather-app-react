(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(48)},31:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(13),r=a.n(c),o=(a(31),a(25)),l=a(49),i=a(50),m=a(51),d=a(61),u=a(52),h=a(53),p=a(54),E=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1];return s.a.createElement("div",null,s.a.createElement(l.a,{color:"light",light:!0,expand:"md"},s.a.createElement(i.a,{href:"/"},s.a.createElement("strong",null,"V2 Weather")),s.a.createElement(m.a,{onClick:function(){return r(!c)}}),s.a.createElement(d.a,{isOpen:c,navbar:!0},s.a.createElement(u.a,{className:"ml-auto",navbar:!0},s.a.createElement(h.a,null,s.a.createElement(p.a,{href:"https://github.com/afifaniks/weather-app-react"},"Source Code")),s.a.createElement(h.a,null,s.a.createElement(p.a,{href:"https://afifaniks.me"},"Dev"))))))},f=a(9),b=a(10),v=a(6),g=a(12),w=a(11),N=a(57),y=a(58),x=a(59),k=a(60),j=a(55),C=function(e){Object(g.a)(a,e);var t=Object(w.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"timestampConverter",value:function(e){var t=new Date(1e3*e),a=t.getHours(),n="0"+t.getMinutes(),s="0"+t.getSeconds();return a+" : "+n.substr(-2)+" : "+s.substr(-2)}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-md-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"col-6 offset-3 d-flex justify-content-center"},s.a.createElement(j.a,{object:!0,src:"assets/images/"+this.props.data.icon+".png",style:{height:"128px",width:"128px"}}))),s.a.createElement("div",{className:"col-12 text-center"},s.a.createElement("h1",{className:"capitalize"},this.props.data.temp," \xb0C, ",this.props.data.description)),s.a.createElement("div",{className:"col-12 text-center"},s.a.createElement("h3",null,this.props.data.location,", ",this.props.data.country)))),s.a.createElement("div",{className:"col-12 col-md-6 d-flex justify-content-center"},s.a.createElement("dl",{className:"row p-3"},s.a.createElement("dt",{className:"col-6"},s.a.createElement("i",{className:"fa fa-globe"})," Area"),s.a.createElement("dd",{className:"col-6"},this.props.data.location),s.a.createElement("dt",{className:"col-6"},s.a.createElement("i",{className:"fa fa-compass"})," Coordinates"),s.a.createElement("dd",{className:"col-6"},this.props.data.coordinates),s.a.createElement("dt",{className:"col-6"},s.a.createElement("i",{className:"fas fa-thermometer-half"})," Temperature"),s.a.createElement("dd",{className:"col-6"},this.props.data.temp," \xb0C / ",(1.8*this.props.data.temp+32).toFixed(1)," \xb0F"),s.a.createElement("dt",{className:"col-6"},s.a.createElement("i",{className:"fas fa-wind"})," Wind"),s.a.createElement("dd",{className:"col-6"},this.props.data.wind),s.a.createElement("dt",{className:"col-6"},s.a.createElement("i",{className:"fas fa-tint"})," Humidity"),s.a.createElement("dd",{className:"col-6"},this.props.data.humidity),s.a.createElement("dt",{className:"col-6"},s.a.createElement("i",{className:"fas fa-sun"})," Sunrise"),s.a.createElement("dd",{className:"col-6"},this.timestampConverter(this.props.data.sunrise)),s.a.createElement("dt",{className:"col-6"},s.a.createElement("i",{className:"fas fa-moon"})," Sunset"),s.a.createElement("dd",{className:"col-6"},this.timestampConverter(this.props.data.sunset))))))}}]),a}(n.Component),O=a(17),S=a.n(O),F=a(23),D=a(56),L=a(24),B=a.n(L);function R(){return(R=Object(F.a)(S.a.mark((function e(t){var a,n,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"96990c5c335abd806ce9733346bb487c",a="https://api.openweathermap.org/data/2.5/forecast?q="+t+"&appid=96990c5c335abd806ce9733346bb487c",e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){Object(g.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={location:e.location,data:"",reload:!0},n.getForecast=n.getForecast.bind(Object(v.a)(n)),n.tableRow=n.tableRow.bind(Object(v.a)(n)),n}return Object(b.a)(a,[{key:"getForecast",value:function(){var e=this;(function(e){return R.apply(this,arguments)})(this.props.location).then((function(t){console.log(e.props.location),200==t.cod&&(console.log(t),e.setState({data:t.list}))}))}},{key:"timestampConverter",value:function(e){var t=new Date(1e3*e),a=t.getHours(),n="0"+t.getMinutes(),s="0"+t.getSeconds();return a+" : "+n.substr(-2)+" : "+s.substr(-2)}},{key:"tableRow",value:function(){if(""!==this.state.data)return this.state.data.map((function(e){var t=e.dt_txt.split(" ")[0],a=e.dt_txt.split(" ")[1],n=parseFloat(e.main.temp-273).toFixed(2),c=parseFloat(e.main.feels_like-273).toFixed(2),r=e.wind.deg+"\xb0, "+e.wind.speed,o=e.main.humidity,l=parseFloat(e.main.temp_max-273).toFixed(2),i=parseFloat(e.main.temp_min-273).toFixed(2),m=e.weather[0].description;return s.a.createElement("tr",null,s.a.createElement("td",null,t),s.a.createElement("td",null,a),s.a.createElement("td",null,n),s.a.createElement("td",null,c),s.a.createElement("td",null,l),s.a.createElement("td",null,i),s.a.createElement("td",null,r),s.a.createElement("td",null,o),s.a.createElement("td",{className:"capitalize"},m))}))}},{key:"render",value:function(){return this.props.location!==this.state.location&&this.setState({location:this.props.location,reload:!0}),this.state.reload&&(this.getForecast(),this.setState({reload:!1})),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("h2",{className:"col-12 text-center mb-2 mt-4"},"5 Day Forecasts (Per 3 hours)"))),s.a.createElement("div",{className:"container"},s.a.createElement(B.a,{id:"test-table-xls-button",className:"download-table-xls-button",table:"weather-data",filename:"weather",sheet:"weather",buttonText:"Export Data"}),s.a.createElement(D.a,{responsive:!0,hover:!0,id:"weather-data"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Date"),s.a.createElement("th",null,"Time"),s.a.createElement("th",null,"Temp (\xb0C)"),s.a.createElement("th",null,"Feels Like (\xb0C)"),s.a.createElement("th",null,"Max Temp (\xb0C)"),s.a.createElement("th",null,"Min Temp (\xb0C)"),s.a.createElement("th",null,"Wind"),s.a.createElement("th",null,"Humidity"),s.a.createElement("th",null,"Weather"))),s.a.createElement("tbody",null,this.tableRow()))))}}]),a}(n.Component),I=function(e){Object(g.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={check:!0,location:"Kishoreganj,BD",country:"Bangladesh",coordinates:"--",temperature:"--",wind:"--",humidity:"--",sunrise:"--",sunset:"--",description:"--",icon:"unknown",searchBar:""},n.search=n.search.bind(Object(v.a)(n)),n.onInputChange=n.onInputChange.bind(Object(v.a)(n)),n.getGeoLocation=n.getGeoLocation.bind(Object(v.a)(n)),n.showPosition=n.showPosition.bind(Object(v.a)(n)),n.getLocationData=n.getLocationData.bind(Object(v.a)(n)),n}return Object(b.a)(a,[{key:"search",value:function(e){var t=new RegExp("^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}"),a=this.state.searchBar;t.exec(a)?this.getLocationData(a,!0):this.getLocationData(a,!1)}},{key:"setWeatherData",value:function(e){this.setState({temperature:(parseFloat(e.main.temp)-273.15).toFixed(1)}),this.setState({location:e.name}),this.setState({country:e.sys.country}),this.setState({coordinates:e.coord.lat+"\xb0, "+e.coord.lon+"\xb0"}),this.setState({wind:e.wind.deg+"\xb0, "+e.wind.speed+" mps"}),this.setState({humidity:e.main.humidity+"%"}),this.setState({sunrise:e.sys.sunrise}),this.setState({sunset:e.sys.sunset}),this.setState({description:e.weather[0].description}),this.setState({icon:e.weather[0].icon})}},{key:"onInputChange",value:function(e){this.setState({searchBar:e.target.value})}},{key:"getGeoLocation",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):console.log("Geolocation is not supported by this browser.")}},{key:"showPosition",value:function(e){this.getLocationData(e.coords.latitude+","+e.coords.longitude,!0)}},{key:"getLocationData",value:function(e,t){var a=this,n="",s="96990c5c335abd806ce9733346bb487c";n=t?"https://api.openweathermap.org/data/2.5/weather?lat="+(e=e.split(","))[0].trim()+"&lon="+e[1].trim()+"&appid="+s:"https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+s,fetch(n).then((function(e){return e.json()})).then((function(e){200===e.cod&&a.setWeatherData(e)}))}},{key:"render",value:function(){return this.state.check&&(this.getLocationData(this.state.location),this.setState({check:!1})),s.a.createElement(s.a.Fragment,null,s.a.createElement(N.a,{style:{backgroundColor:"#9575cd"}},s.a.createElement(C,{data:{temp:this.state.temperature,location:this.state.location,country:this.state.country,humidity:this.state.humidity,coordinates:this.state.coordinates,sunrise:this.state.sunrise,sunset:this.state.sunset,wind:this.state.wind,description:this.state.description,icon:this.state.icon}}),s.a.createElement("div",{className:"col-12 col-md-6 offset-md-3 mt-4"},s.a.createElement("div",{className:"row"},s.a.createElement(y.a,{className:"col-9"},s.a.createElement(x.a,{type:"text",id:"location",name:"location",placeholder:"Input area name or coordinates",value:this.state.searchBar,onChange:this.onInputChange})),s.a.createElement(k.a,{className:"col-3 search-btn",onClick:this.search,style:{color:"#000",backgroundColor:"#ffffff",border:"none",height:"54px",borderRadius:"0px 30px 30px 0px"}},"Search")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12  d-flex justify-content-center"},s.a.createElement(k.a,{onClick:this.getGeoLocation,style:{color:"#000",backgroundColor:"#ffffff",border:"none",height:"54px",borderRadius:"30px"}},s.a.createElement("i",{class:"fas fa-map-marker-alt"}),"\xa0\xa0Current Location"))))),s.a.createElement(W,{location:this.state.location}))}}]),a}(n.Component),P=function(){return s.a.createElement("div",{className:"row footer mt-2"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"p-2 m-2"},"\xa9 V2 Weather App, 2020")))};var T=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E,null),s.a.createElement(I,null),s.a.createElement(P,null))};a(42),a(43),a(47);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a5680a15.chunk.js.map