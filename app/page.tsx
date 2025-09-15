// app/page.tsx
import React from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  Building2,
  Users,
  Timer,
  Globe2,
  Trophy,
  Quote,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Sparkles,
  Target,
  Instagram,
} from "lucide-react";

// ====== SEO (Next.js App Router) ======
export const metadata = {
  title: "Charlas corporativas | Echevensko",
  description:
    "Charla-espectáculo para empresas: bienestar, foco y creatividad. Presencial/online. Cotiza tu fecha.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://empresas.echevensko.com/" },
  openGraph: {
    type: "website",
    title: "Charlas corporativas | Echevensko",
    description:
      "Experiencia validada por miles de asistentes. Presencial/online. Ideal para RR.HH., cultura y liderazgo.",
    url: "https://empresas.echevensko.com/",
    images: ["/og-cover.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function EchevenskoB2BLanding() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* reCAPTCHA v2 (checkbox) */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      {/* === Zoho WebForm Analytics (no remover) === */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=d75b731a3cb846be6df2e7167dfacff1bc8a95cb37016a7a433d7fda3b159299c2b290961127834ae559ec222d5f8d73gidde78750e7504e45e7b38c491d3a31175762a7b4d109450ad426d5928193c1d17gid7e0c77a66b4456def42c95c3f89a82c086f3c4c38e31fa02efa39d88ba909620gid7588c17a854b1f80d4dc2623ad00163ed49678fa05e2e466bc57b9fa67876aa5&tw=30002d10f9c599eddac703e3edfd3bb4d"
        strategy="afterInteractive"
      />

      {/* === JS inline de Zoho (validaciones, calendario, recaptcha callback) === */}
      <Script id="zoho-inline-cal" strategy="afterInteractive">{`
        var formCalender = { userPattern:'YYYY-MM-DD', currDateObj: void 0, currMonth: void 0, currYear: void 0, currDate: void 0, currMonthEnd: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], monthName: void 0, days: void 0, displayPanel: void 0, isHideToday: void 0, calDefColor:'#515CCB', weekdays: { 1:'Sunday', 2:'Monday', 3:'Tuesday', 4:'Wednesday', 5:'Thursday', 6:'Friday', 7: 'Saturday'}, months: { 1:'January', 2:'February', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12: 'December'},
          init: function (){ this.monthName = [{ html:'January', value: 0}, { html:'February', value: 1}, { html:'March', value: 2}, { html:'April', value: 3}, { html:'May', value: 4}, { html:'June', value: 5}, { html:'July', value: 6}, { html:'August', value: 7}, { html:'September', value: 8}, { html:'October', value: 9}, { html:'November', value: 10}, { html:'December', value: 11 }], this.days = [ 'ssunday', 'smonday', 'stuesday', 'swednesday', 'sthursday', 'sfriday', 'ssaturday' ], this.dayNamesShort = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ], this.daysBasedOnPrefernce = [ 'ssunday', 'smonday', 'stuesday', 'swednesday', 'sthursday', 'sfriday', 'ssaturday' ]; var e = this.daysBasedOnPrefernce[0]; this.daysBasedOnPrefernce.shift ( 1 ), this.daysBasedOnPrefernce.push ( e ); var t = this.dayNamesShort[0]; this.dayNamesShort.shift ( 1 ), this.dayNamesShort.push ( t ), this.currDateObj = new Date, this.currMonth = this.currDateObj.getMonth (), this.currYear = this.currDateObj.getFullYear (), this.currYear < 1e3 && ( this.currYear += 1900 ), this.currDate = this.currDateObj.getDate ()},
          getTitle: function (){ return this.monthName[ this.currMonth ].html + ' ' + this.currYear},
          createCalendar: function ( e ){ for( var t = document.getElementsByClassName( 'tempCalDiv' ),a = t.length,r = 0; r < a; r++ ){ var n = t[ r ].style; 'block' === n.display && ( n.display = 'none' ) } this.calendarNode = e, this.userPattern = this.calendarNode.placeholder; var s = this.calendarNode.value, i =!1; if( s ){ var l = dateFormatConvert.validate ( s, this.userPattern ); l && ( this.currDate = l.getDate (), this.currMonth = l.getMonth (), this.currYear = l.getFullYear (), this.currYear < 1e3 && ( this.currYear = Number ( this.currYear ) + 1900 )) } else i =!0, formCalender.init (); this.monthName || formCalender.init (), this.createDatePicker ( this.currDate, this.currMonth, this.currYear, i, !1 )},
          createDatePicker: function ( e, t, a, r, n ){ 1 === this.currMonth && ( this.currMonthEnd[1] = this.currYear % 400 == 0 || this.currYear % 4 == 0 && this.currYear % 100 != 0 ? 29: 28 ); var s = new Date ( a, t, 1 ), i = 6, l = this.daysBasedOnPrefernce.indexOf ( this.days[ s.getDay ()]) + 1; i = 31 === this.currMonthEnd[ t ] && l >= 6 || 30 === this.currMonthEnd[ t ] && 7 === l ? 7: 28 === this.currMonthEnd[ t ] && 1 === l ? 5: 6; var d = this.getTitle ( e, a, t ), o = this.dayNamesShort, h = '<div id=\\'calenDiv\\'><i id=\\'calArrow\\' style=\\'display:none;\\' class=\\'dIB SocialArrow\\'></i><div><div>'; h += '<div class=\\'aligncenter\\'><span class=\\'calNav dIB vaM yearNavLft\\' onclick=\\'formCalender.updateDatePicker(event,undefined, -1)\\'><i class=\\'arrow left mRMinus2\\'></i><i class=\\'arrow left\\'></i></span><span class=\\'calNav dLft dIB vaM\\' onClick=\\'formCalender.updateDatePicker(event,-1)\\' id=\\'pm\\'><i class=\\'arrow left\\'></i></span><span class=\\'sCalMon\\'>' + d + '</span><span class=\\'calNav dRgt vaM\\' onClick =\\'formCalender.updateDatePicker(event,1)\\' id=\\'nm\\'><i class=\\'arrow right\\'></i></span><span class=\\'calNav dIB vaM yearNavRgt\\' onclick=\\'formCalender.updateDatePicker(event,undefined, 1)\\'><i class=\\'arrow right\\'></i><i class=\\'arrow right mLMinus2\\'></i></span></div>', h += '<table class=\\'calDay\\' id =\\'weekDays\\' style=\\'color:#8b9ab9; font-size:8px; margin-left:0\\'><tr> <th>' + o[0] + '</th> <th>' + o[1] + '</th><th>' + o[2] + '</th><th>' + o[3] + '</th> <th>' + o[4] + '</th> <th>' + o[5] + '</th> <th>' + o[6] + '</th></tr></table>', h += '</div>', h += '<table id=\\'calHeader\\' class=\\'calDay\\' style=\\'margin-left:0; margin-top:-5px;\\' width=\\'100%\\' cellspacing=\\'0\\' cellpadding=\\'0\\' border=\\'0\\' >'; var c = '', u = new Date, y = a || u.getFullYear (), v = e || u.getDate (), g = void 0 === t ? u.getMonth ():t, m = u.getMonth (), p = u.getFullYear (); u.getDate (); m === t && a === p && ( c = ' style=\\'display:none\\'' ); for( var f,D,M,b = s.getDay(); 1 !== b; ) s.setDate ( s.getDate ()-1 ), b = s.getDay (); for( var x = 1; x <= i; x++ ){ h += '<tr>'; for( var Y = 1; Y < 8; Y++ ){ f = s.getMonth (), D = s.getFullYear (), M = s.getDate (), D + '-' + ( parseInt ( f ) + 1 ) + '-' + M; var F = 'cdate lt-gray'; if( M === v && D === y && f === g && ( F = 'cdate lt-gray' ),f === g && ( F = 'cdate' ),(r && M === v && m === g && p === y || !n && M === v && f === g && D === y ) && ( F = 'sel' ),n ){ var k = dateFormatConvert.validate ( this.calendarNode.value, formCalender.userPattern ); k && M === k.getDate () && f === k.getMonth () && D === k.getFullYear () && ( F = 'sel' ) } h += '<td class=\\'' + F + '\\' onClick=\\'formCalender.displaySelectedDate(\"' + M + ' ' + f + ' ' + D + '\")\\'>' + M + '</td>', s.setDate ( s.getDate () + 1 ) } h += '</tr>' } h += '</table>', h += '<div>', this.isHideToday || ( h += '<div id=\\'calBtns\\' class=\\'pT15 pB15 fL\\'><a' + c + ' class=\\'cP fL\\' href=\\'javascript:;\\' id=\\'todayBtn\\' onclick=\\'formCalender.displaySelectedDate(\"today\")\\'>Today</a>' ), h += '</div>', h += '</div>', h += '</div></div>'; var C = document.getElementById ( 'template' + this.calendarNode.getAttribute ( 'tplid' )); C.innerHTML = h, C.style.display = 'block'},
          displaySelectedDate: function ( e, t ){ if( !t ) t = this.calendarNode; if( 'today' === e ){ var a = new Date; e = a.getDate () + ' ' + a.getMonth () + ' ' + a.getFullYear () } e = e.split ( ' ' ); var r = dateFormatConvert.convertFormat ( new Date ( e[2], e[1], e[0]), this.userPattern ); t.value = r, t.focus (), t.placeholder = this.userPattern, formCalender.closeDatePicker (), t.addEventListener ( 'keyup', function ( e ){ formCalender.calendarNode = this; var t = this.value, a = dateFormatConvert.validate ( t, formCalender.userPattern ); if( a ){ var r = {}; r.date = a.getDate (), r.month = a.getMonth (), r.year = a.getFullYear (), formCalender.updateDatePicker ( e, void 0, void 0, r ) } }), t.blur ()},
          closeDatePicker: function (){ document.getElementById ( 'template' + this.calendarNode.getAttribute ( 'tplid' )).style.display = 'none'},
          updateDatePicker: function ( e, t, a, r ){ var n = document.getElementById ( 'template' + this.calendarNode.getAttribute ( 'tplid' )); r && ( this.currDate = r.date, this.currMonth = r.month, this.currYear = r.year ), void 0 !== t ? 1 === t ? 11 === this.currMonth ? ( this.currMonth = 0, this.currYear++ ): this.currMonth++ : 0 === this.currMonth ? ( this.currMonth = 11, this.currYear-- ): this.currMonth-- : void 0 !== a && ( this.currYear = parseInt ( this.currYear ) + a ), this.createDatePicker ( this.currDate, this.currMonth, this.currYear, !1, !0 ), n.style.display = 'block'},
          stEv: function ( e ){ e || ( e = window.event ), e && ( e.cancelBubble =!0, e.stopPropagation && e.stopPropagation ()) }
        };
        window.onclick = function (){ for( var e = document.getElementsByClassName( 'tempCalDiv' ),t = e.length,a = 0; a < t; a++ ){ var r = e[ a ]; if( document.activeElement === document.querySelector( 'input[tplid=\\'' + r.id.replace( 'template','' ) + '\\']' )) return ; var n = e[ a ].style; 'block' === n.display && ( n.display = 'none' ) } };

        var dateFormatConvert = { /* (truncado nada; es el mismo objeto del código de Zoho) */ 
          shortMon:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          longMon:['January','February','March','April','May','June','July','August','September','October','November','December'],
          dayArr:[31,28,31,30,31,30,31,31,30,31,30,31],wod:1,lm:'userdate',_dateObj:void 0,lLimit:80,
          formats:[{val:'YYYY',type:'year',regex:/\\d{4}/,len:4},{val:'GGGG',type:'year',regex:/\\d{4}/,len:4,isWEG:!0},{val:'gggg',type:'year',regex:/\\d{4}/,len:4,isWEG:!0},{val:'YY',type:'year',regex:/\\d{2}/,len:2},{val:'GG',type:'year',regex:/\\d{2}/,len:2,isWEG:!0},{val:'gg',type:'year',regex:/\\d{2}/,len:2,isWEG:!0},{val:'MMMM',type:'month',regex:/[A-z]{3,}/,long:!0,str:!0,array:['January','February','March','April','May','June','July','August','September','October','November','December']},{val:'MMM',str:!0,type:'month',regex:/[A-z]{3,}/,array:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']},{val:'Mo',suff:!0,type:'month',regex:/\\d{1,2}(?=st|nd|rd|th)/,max:12},{val:'MM',type:'month',regex:/\\d{2}/,len:2,max:12,alt:!0},{val:'M',type:'month',regex:/\\d{1,2}/,max:12},{val:'DDDD',type:'date',regex:/\\d{3}/,len:3,year:!0},{val:'DDDo',type:'date',suff:!0,regex:/\\d{1,3}(?=st|nd|rd|th)/,len:3,year:!0,ignore:/\\d{3}(?=st|nd|rd|th)/},{val:'DDD',type:'date',regex:/\\d{1,3}/,year:!0,ignore:/\\d{3}/},{val:'Do',type:'date',suff:!0,regex:/\\d{1,2}(?=st|nd|rd|th)/},{val:'DD',type:'date',regex:/\\d{2}/,len:2,alt:!0},{val:'D',type:'date',regex:/\\d{1,2}/},{val:'dddd',type:'longdate',regex:/[A-z]{3,}/,long:!0,str:!0,array:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']},{val:'ddd',type:'longdate',regex:/[A-z]{3}/,str:!0,array:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']},{val:'dd',type:'longdate',regex:/[A-z]{2}/,str:!0,array:['Su','Mo','Tu','We','Th','Fr','Sa']},{val:'do',type:'longdate',regex:/\\d{1}(?=st|nd|rd|th)/,suff:!0},{val:'d',type:'longdate',regex:/\\d{1}/}],
          parseFormat:function(e,t){for(var a,r=this.formats,n=[],s=r.length,i=0;i<s;i++){var l=r[i];if(!e.length)break;if(e.indexOf(l.val)>-1){if(t&&l.alt){a=!0;continue}a&&(l.val=r[i-1].val,l=r[i-1]),a=!1,n.push({format:l,index:e.indexOf(l.val)}),e=e.replace(l.val,Math.pow(10,l.val.length-1)),i--}}return n.sort(function(e,t){return e.index-t.index})},
          convertFormat:function(e,t){this._dateObj=e;var a=this._dateObj,r=this.parseFormat(t,!0),n={},s={date:a.getDate(),month:a.getMonth(),year:a.getFullYear(),day:a.getDay()};t=this.fmReplace(t.replace(/{{|}}/g,''),r);for(var i=r.length,l=0;l<i;l++){var d=r[l].format;switch(d.type){case'date':t=t.replace(d.val+this.lm,this.crctLength(d.year?this.totdate(s.month,this.isLeap(s.year),s.date):s.date,d.len,d.suff));break;case'month':t=d.str?t.replace(d.val+this.lm,d.array[s.month]):t.replace(d.val+this.lm,this.crctLength(s.month+1,d.len,d.suff));break;case'year':t=t.replace(d.val+this.lm,2===d.len?this.crctLength(s.year%100,2):4===(s.year+'').length?s.year:this.crctLength(s.year,4)),n.year=n.year||[],n.year.push(d);break;case'day':case'week':n.flag=!0,n[d.type]=n[d.type]||[],n[d.type].push(d);break;case'longdate':t=d.str?t.replace(d.val+this.lm,d.array[s.day]):t.replace(d.val+this.lm,this.crctLength(s.day,null,d.suff))}}return t.replace(/{{|}}/g,'')},
          fmReplace:function(e,t){for(var a=0,r=t.length,n=0;n<r;n++)e=e.slice(0,t[n].index+a)+t[n].format.val+this.lm+e.slice(t[n].index+a+t[n].format.val.length),a+=8;return e},
          totdate:function(e,t,a){for(var r=0,n=0;n<e;n++)r+=this.dayArr[n],t&&1===n&&(r+=1);return r+(a||0)},
          crctLength:function(e,t,a){var r='';a&&(r=this.nthconv(e)),t&&(e=e.toString(),for(var n=1;n<t;n++)e.length<=n&&(e='0'+e));return e+r},
          nthconv:function(e){if(e>3&&e<21)return'th';switch(e%10){case 1:return'st';case 2:return'nd';case 3:return'rd';default:return'th'}},
          isLeap:function(e){return 2===(e+='').length&&(e=this.getCorrectYear(parseInt(e))),(e=parseInt(e))%4==0&&e%100!=0||e%400==0},
          getCorrectYear:function(e){var t=e+'';if(e=parseInt(e),2===t.length){var a=(new Date).getFullYear(),r=parseInt(a/100),n=a%100,s=(n-this.lLimit+100)%100;e=n>s?e<s?r+1+''+this.crctLength(e,2):r+''+this.crctLength(e,2):e<s?r+''+this.crctLength(e,2):r-1+''+this.crctLength(e,2)}return e},
          valFormat:function(e,t){var a={},r=new Date((new Date).getFullYear(),0),n=this.parseFormat(t,!0),s=e,i=t=t.replace(/{{|}}/g,''),l=n.length,d=0;for(d=0;d<l;d++){var o,h=n[d].format;switch(h.type){case'date':case'year':case'week':case'day':if(h.regex.test(e)){o='year'===h.type?e.match(h.regex)[h.match||0]:parseInt(e.match(h.regex)[h.match||0]),a[h.type]=o,e=this.replaceVal(e,h.regex,h.suff),s=this.replaceVal(s,h.regex,h.suff,h.val),h.year&&(a.date=getDay(a.date).day)}else a.year&&a.week?(a[h.type]=this.wod,t=t.replace(h.val,''),i=i.replace(h.val,'')):a[h.type]='Invalid',/date/i.test(h.type)&&0===a[h.type]&&(a[h.type]='Invalid');break;case'month':if(h.regex.test(e)){o=this.getMonth(e.match(h.regex)[0],h.suff,h.str,h.long),a.month=o.val,e=this.replaceVal(e,o.mon||h.regex,h.suff),s=this.replaceVal(s,o.mon||h.regex,h.suff,h.val)}else a.month='Invalid',a.month<0&&(a.month='Invalid');break;case'longdate':h.regex.test(e)&&(o=h.str?this.findVal(h.array,e.match(h.regex)[0]):parseInt(e.match(h.regex)[0]),a.longdate=this.isDef(o.index)?o.index:o,e=this.replaceVal(e,o.mon||o,h.suff),s=this.replaceVal(s,o.mon||o,h.suff,h.val))}t=t.replace(h.valForm||h.val,'')}return this.isDef(a.longdate)&&a.day&&a.day!==a.longdate?r.setFullYear('Invalid'):(this.isDef(a.year)&&r.setFullYear(this.getCorrectYear(a.year)),this.isDef(a.month)&&r.setMonth(a.month),this.isDef(a.date)&&r.setDate(a.date<=this.dayArr[r.getMonth()]+(1===r.getMonth()&&this.isLeap(r.getFullYear())?1:0)?a.date:'Invalid'),this._isCorrectFormat=e.length===t.length&&i===s&&this.validate(r))&&r},
          validate:function(e,t){var a=e.constructor;if(a===Date)return this._dateObj=e,'Invalid Date'!==e.toString();if(a===String&&t){var r=this.valFormat(e,t);return r&&this._isCorrectFormat&&(this._format=t),r}},
          replaceVal:function(e,t,a,r){return e=e.replace(t,r||''),a&&(e=e.replace(/st|nd|rd|th/,'')),e},
          getMonth:function(e,t,a,r){var n;if(a){var s=this.findVal(r?this.longMon:this.shortMon,e);n=s.mon,e=s.index,(!n||e>11)&&(e='Invalid')}else(e=parseInt(e)-1)>11&&(e='Invalid');return{val:e,mon:n}},
          findVal:function(e,t){var a,r,n=e.length;for(r=0;r<n;r++)if(new RegExp(e[r]).test(t)){a=e[r];break}return{mon:a,index:r}},
          isDef:function(e){return void 0!==e}
        };

        function addAriaSelected6988454000000575779 (){
          var optionElem = event.target;
          var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
          if(previousSelectedOption){ previousSelectedOption.removeAttribute('aria-selected'); }
          optionElem.querySelectorAll('option')[ optionElem.selectedIndex ].ariaSelected = 'true';
        }
        function rccallback6988454000000575779 (){
          if(document.getElementById('recap6988454000000575779')!=undefined){
            document.getElementById('recap6988454000000575779').setAttribute('captcha-verified', true);
          }
          if(document.getElementById('recapErr6988454000000575779')!=undefined && document.getElementById('recapErr6988454000000575779').style.visibility=='visible'){
            document.getElementById('recapErr6988454000000575779').style.visibility = 'hidden';
          }
        }
        function reCaptchaAlert6988454000000575779 (){
          var recap = document.getElementById('recap6988454000000575779');
          if(recap!=undefined && recap.getAttribute('captcha-verified')=='false'){
            document.getElementById('recapErr6988454000000575779').style.visibility = 'visible'; return false;
          }
          return true;
        }
        function validateEmail6988454000000575779 (){
          var form = document.forms['WebToLeads6988454000000575779'];
          var emailFld = form.querySelectorAll('[ftype=email]');
          for(var i=0;i<emailFld.length;i++){
            var emailVal = emailFld[i].value;
            if((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0 ){
              var atpos = emailVal.indexOf('@'); var dotpos = emailVal.lastIndexOf('.');
              if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length){ alert('Introduzca una dirección de correo electrónico válida. '); emailFld[i].focus(); return false; }
            }
          }
          return true;
        }
        function validateDateFormat6988454000000575779 (){
          var form = document.forms['WebToLeads6988454000000575779'];
          var dateFlds = form.querySelectorAll('[ftype=date]');
          for(var i=0;i<dateFlds.length;i++){
            var dateFld = dateFlds[i]; var usrPtrn = dateFld.placeholder; var dateVal = dateFld.value;
            if(dateVal.trim()!=''){ var vald = dateFormatConvert.validate(dateVal, usrPtrn); if(!vald){ alert('Escriba una fecha válida '); dateFld.focus(); return false; } }
          }
          return true;
        }
        function checkMandatory6988454000000575779 (){
          var mndFileds = new Array('Company','First Name','Last Name','Email','City','LEADCF3');
          var fldLangVal = new Array('Empresa','Nombre','Apellido','Correo electrónico','Ciudad','Mensaje');
          for(var i=0;i<mndFileds.length;i++){
            var fieldObj = document.forms['WebToLeads6988454000000575779'][ mndFileds[i] ];
            if(fieldObj){
              if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0 ){
                if(fieldObj.type=='file'){ alert('Seleccione un archivo para cargar.'); fieldObj.focus(); return false; }
                alert(fldLangVal[i] + ' no puede estar vacío.'); fieldObj.focus(); return false;
              }else if(fieldObj.nodeName=='SELECT'){
                if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){ alert(fldLangVal[i] + ' no puede ser nulo.'); fieldObj.focus(); return false; }
              }else if(fieldObj.type=='checkbox'){
                if(fieldObj.checked==false){ alert('Please accept ' + fldLangVal[i]); fieldObj.focus(); return false; }
              }
              try{ if(fieldObj.name=='Last Name'){ name = fieldObj.value; } }catch(e){}
            }
          }
          if(!validateEmail6988454000000575779()){ return false; }
          if(!reCaptchaAlert6988454000000575779()){ return false; }
          if(!validateDateFormat6988454000000575779()){ return false; }
          var urlparams = new URLSearchParams(window.location.search);
          if(urlparams.has('service') && (urlparams.get('service')==='smarturl')){
            var webform = document.getElementById('webform6988454000000575779'); var service = urlparams.get('service');
            var smarturlfield = document.createElement('input'); smarturlfield.setAttribute('type','hidden'); smarturlfield.setAttribute('value',service); smarturlfield.setAttribute('name','service'); webform.appendChild(smarturlfield);
          }
          document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
        }
        function tooltipShow6988454000000575779 (el){
          var tooltip = el.nextElementSibling; var tooltipDisplay = tooltip.style.display;
          if(tooltipDisplay=='none'){ var allTooltip = document.getElementsByClassName('zcwf_tooltip_over'); for(var i=0;i<allTooltip.length;i++){ allTooltip[i].style.display='none'; } tooltip.style.display='block'; }
          else { tooltip.style.display='none'; }
        }
      `}</Script>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" aria-hidden />
            <span className="font-semibold tracking-tight">
              La Magia de la Imaginación
            </span>
          </div>
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            aria-label="Secciones"
          >
            <a href="#por-que" className="hover:text-neutral-600">
              Impacto
            </a>
            <a href="#dirigido" className="hover:text-neutral-600">
              ¿A quién va?
            </a>
            <a href="#estructura" className="hover:text-neutral-600">
              Contenido
            </a>
            <a href="#valor" className="hover:text-neutral-600">
              Valor
            </a>
            <a href="#testimonios" className="hover:text-neutral-600">
              Testimonios
            </a>
            <a href="#faq" className="hover:text-neutral-600">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contacto">Solicitar propuesta</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/images/echevensko_web_foto_2.jpg')] bg-cover bg-center opacity-10"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4">B2B · Cultura & Bienestar</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Eleva{" "}
                <span className="text-amber-600">la imaginación</span> y el
                rendimiento de tu equipo
              </h1>
              <p className="mt-4 text-lg text-neutral-700">
                Charla-espectáculo corporativa presentada por{" "}
                <strong>Cristóbal Echevensko</strong> para organizaciones que
                buscan mejorar clima, engagement y creatividad. Entretenida,
                práctica y memorable, con aplicación inmediata en el día a día.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-2xl" asChild>
                  <a href="#contacto">Reservar charla (UF 32)</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl"
                  asChild
                >
                  <a href="#valor">Ver valor y alcance</a>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-1">
                  <Star
                    className="h-4 w-4 fill-amber-500 stroke-amber-500"
                    aria-hidden
                  />{" "}
                  Altas valoraciones
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" aria-hidden /> Miles de asistentes
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" aria-hidden /> Recomendado por
                  empresas
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div
                  className="absolute -inset-2 bg-amber-200/40 blur-2xl rounded-3xl"
                  aria-hidden
                />
                <Card className="relative rounded-3xl shadow-xl">
                  <CardContent className="p-0">
                    <img
                      src="/images/echevensko_web_foto_1.jpg"
                      alt="Auditorio corporativo durante la charla"
                      className="rounded-3xl object-cover h-[360px] w-full"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4" aria-hidden /> 60–75 min
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" aria-hidden /> Presencial /
                  Online
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4" aria-hidden /> ES / EN opcional
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ EMPRESAS */}
      <section id="por-que" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold leading-tight">
              ¿Por qué llevar{" "}
              <span className="text-amber-700">La Magia de la Imaginación</span>{" "}
              a tu organización?
            </h2>
            <p className="mt-4 text-neutral-700">
              Diseñado para RR.HH., People, Cultura y Liderazgo: impacto real en
              clima, foco y productividad.
            </p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Bienestar emocional",
                desc: "Reduce estrés y ansiedad con una práctica simple y aplicable.",
              },
              {
                title: "Cohesión de equipos",
                desc: "Lenguaje común que mejora comunicación y confianza.",
              },
              {
                title: "Creatividad aplicada",
                desc: "Herramientas para resolver problemas y tomar mejores decisiones.",
              },
              {
                title: "Engagement y propósito",
                desc: "Reconecta a las personas con su potencial y el sentido del trabajo.",
              },
            ].map((b, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-neutral-700">
                  {b.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RR.HH. – DEMO + FOTOS */}
      <section id="rrhh" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Badge className="mb-3">
                Un recurso innovador para potenciar equipos en tu empresa
              </Badge>
              <h2 className="text-3xl font-bold">
                La Magia de la Imaginación | Charla corporativa para equipos.
              </h2>
              <p className="mt-2 text-neutral-700">
                Conoce cómo esta experiencia puede integrarse a iniciativas de
                bienestar, liderazgo y cultura organizacional.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/_K00lO5cwzA?rel=0&modestbranding=1"
                    title="La Magia de la Imaginación | Charlas corporativas para equipos"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Momentos que importan</h3>
              <p className="mt-2 text-neutral-700">
                Escenas reales que reflejan participación, foco y energía en
                contextos corporativos.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/images/echevensko_foto3.jpg"
                      alt="Auditorio atento durante la charla"
                      className="w-full h-56 object-cover"
                    />
                  </CardContent>
                </Card>
                <Card className="rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/images/echevensko_foto4.jpg"
                      alt="Dinámica participativa con equipos"
                      className="w-full h-56 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5" aria-hidden /> Enfoque en
                  clima, engagement y liderazgo.
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5" aria-hidden /> Contrato,
                  factura y métricas post-evento (opcional).
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5" aria-hidden /> Cobertura
                  nacional y Latam, presencial u online.
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild className="rounded-2xl">
                  <a href="#contacto">Solicitar propuesta para RR.HH.</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿A QUIÉN VA? */}
      <section id="dirigido" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-start gap-3">
            <Target className="h-6 w-6 mt-1" aria-hidden />
            <div>
              <h2 className="text-3xl font-bold">¿A quién va dirigido?</h2>
              <p className="mt-2 text-neutral-700 max-w-3xl">
                Ideal para <strong>colegios</strong>,{" "}
                <strong>fundaciones</strong>, <strong>empresas</strong>,{" "}
                <strong>universidades</strong>,{" "}
                <strong>municipalidades</strong>, áreas de <strong>salud</strong>
                , <strong>retail</strong> y <strong>tecnología</strong>.
                Adaptamos ejemplos al contexto del público.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Industrias">
            {[
              "Colegios",
              "Fundaciones",
              "Empresas",
              "Corporaciones",
              "Universidades",
              "Municipalidades",
              "Salud",
              "Retail",
              "Tecnología",
              "Startups",
            ].map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUCTURA */}
      <section id="estructura" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Contenido del espectáculo corporativo</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            Una charla entretenida y útil en tres actos, con historias, humor y
            ejercicios prácticos.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Acto I – Potencial interno",
                points: [
                  "Autoimagen y autoestima práctica",
                  "Cambiar actitud para cambiar realidad",
                ],
              },
              {
                title: "Acto II – El obstáculo",
                points: [
                  "La causa del autosabotaje",
                  "Cómo gestionarla en el día a día",
                ],
              },
              {
                title: "Acto III – La técnica",
                points: [
                  "Práctica ancestral moderna",
                  "Menos preocupación, más foco",
                ],
              },
            ].map((col, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">{col.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  <ul className="space-y-2">
                    {col.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* LOGÍSTICA */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Modalidad",
                desc: "Presencial (auditorio/sala) u online (Zoom/Teams).",
              },
              { title: "Duración", desc: "60–75 min + Q&A (opcional)." },
              {
                title: "Audiencia",
                desc: "20 a 600 personas (consultar para más).",
              },
            ].map((c, i) => (
              <Card key={i} className="rounded-2xl border-dashed">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-neutral-700">
                  {c.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VALOR */}
      <section id="valor" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold">Valor y alcance</h2>
            <p className="mt-2 text-neutral-700">
              Un solo plan claro para simplificar la decisión. *Viáticos o
              traslados pueden aplicar.
            </p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl border-amber-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Plan Único</span>
                <Badge className="bg-amber-600">Recomendado</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold">UF 32</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {[
                  "Charla 60–75 min",
                  "Material PDF resumen",
                  "Soporte técnico básico",
                  "Guía práctica 7 días para equipos",
                  "Reporte de feedback post-evento",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="#contacto">Reservar (UF 32)</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href="#faq">Ver condiciones</a>
                </Button>
              </div>
              <p className="text-xs text-neutral-500 mt-4">
                *Factura electrónica y contrato de servicios. Precio no incluye
                eventuales viáticos.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Resultados que buscamos</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5" aria-hidden /> Subir ánimo y
                  foco del equipo
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5" aria-hidden /> Refuerzo de
                  cultura y colaboración
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5" aria-hidden /> Lenguaje
                  común para afrontar desafíos
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 mt-0.5" aria-hidden /> Técnicas
                  simples con adopción inmediata
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold">
                Lo que dicen quienes ya vivieron la experiencia
              </h2>
              <p className="mt-2 text-neutral-700">
                Comentarios que hablan de un antes y un después.
              </p>
            </div>
            <div
              className="flex items-center gap-1 text-amber-600"
              aria-label="Valoraciones"
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-500 stroke-amber-500"
                  aria-hidden
                />
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Ana María Cooper",
                role: "Líder de Personas",
                quote:
                  "Interactividad, claridad y herramientas concretas. Al día siguiente mi equipo aplicó la técnica.",
              },
              {
                name: "Sergio Barriga",
                role: "Gerente Comercial",
                quote:
                  "Dinámica y directa. 100% recomendable para kickoffs y ciclos comerciales.",
              },
              {
                name: "Francisca Sánchez",
                role: "People Partner",
                quote:
                  "Llegamos con carga y salimos con foco y energía. Impacto real en el ánimo del equipo.",
              },
            ].map((t, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 opacity-50" aria-hidden />
                  <p className="mt-3 text-neutral-800">{t.quote}</p>
                  <p className="mt-4 text-sm text-neutral-600">
                    {t.name} · {t.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-neutral-500 mt-6">
            *Testimonios reales de asistentes, adaptados al contexto corporativo.
          </p>
        </div>
      </section>

      {/* CTA INTERMEDIA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Card className="rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">
                ¿Por qué elegir La Magia de la Imaginación?
              </h3>
              <p className="mt-2 text-neutral-700">
                Experiencia validada en Chile y Latam. Adaptada al lenguaje
                corporativo: entretenida, práctica y con aplicación inmediata.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" className="rounded-2xl w-full md:w-auto">
                <a href="#contacto">Quiero cotizar</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl w-full md:w-auto"
              >
                <a href="#faq">Ver preguntas frecuentes</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "¿Se puede personalizar para un área o industria?",
                a: "Sí. Hacemos un breve discovery y adaptamos ejemplos al negocio.",
              },
              {
                q: "¿Qué requerimientos técnicos hay?",
                a: "Presencial: proyector/LED y audio. Online: Zoom/Teams y prueba técnica 24 h antes.",
              },
              { q: "¿Ofrecen factura y contrato?", a: "Sí, factura electrónica y acuerdo de servicios." },
              {
                q: "¿En qué ciudades trabajan?",
                a: "Base en Santiago; cobertura nacional y Latam. Viáticos según ciudad/país.",
              },
              {
                q: "¿Se puede medir el impacto?",
                a: "Encuesta post-evento y reporte de insights para RR.HH.",
              },
              { q: "¿Idiomas y formatos?", a: "Español, opción inglés. Presencial u online." },
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.q}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-neutral-700">
                  {item.a}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO (Zoho WebToLead embebido) */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold">Solicita tu propuesta</h2>
            <p className="mt-2 text-neutral-700">
              Cuéntanos fecha tentativa, modalidad y tamaño de audiencia.{" "}
              <strong>Valor único: UF 32</strong>.
            </p>

            {/* Bloque HTML exacto de Zoho (sin <script>, esos ya los cargamos arriba). 
                Mantiene sus estilos propios, pero el contenedor hereda nuestro layout. */}
            <div
              className="mt-6"
              dangerouslySetInnerHTML={{
                __html: `
<!-- Zoho WebToLead - No remover líneas marcadas como 'Do not remove this code' -->
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 100%;'>
  <style>
    html,body{ margin:0px; }
    .formsubmit.zcwf_button{ color: white !important; background: transparent linear-gradient(0deg,#0279FF 0%,#00A3F3 100%); }
    #crmWebToEntityForm.zcwf_lblLeft{ width:100%; padding:0; margin:0 auto; box-sizing:border-box; }
    #crmWebToEntityForm.zcwf_lblLeft *{ box-sizing:border-box; }
    #crmWebToEntityForm { text-align:left; }
    #crmWebToEntityForm *{ direction:ltr; }
    .zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea{
      width:100%; border:1px solid #c0c6cc !important; resize:vertical; border-radius:8px; float:none; padding:10px; font-size:14px;
    }
    .zcwf_lblLeft .zcwf_col_lab{ width:100%; padding:0 0 6px; margin:0; margin-top:5px; float:none; min-height:1px; font-size:12px; font-family:Arial; color:#0a0a0a; }
    .zcwf_lblLeft .zcwf_col_fld{ float:none; width:100%; padding:0; position:relative; margin-top:0; }
    .zcwf_lblLeft .zcwf_col_fld_slt{ width:100%; border:1px solid #ccc; background:#fff; border-radius:8px; font-size:14px; padding:10px; }
    .zcwf_lblLeft .zcwf_row{ margin:10px 0px; }
    .zcwf_lblLeft .zcwf_privacy_txt{ width:90%; font-size:12px; color:#313949; display:inline-block; vertical-align:top; padding-top:2px; margin-left:6px; }
    .zcwf_lblLeft .zcwf_button{ font-size:14px; border:1px solid #c0c6cc; padding:10px 14px; border-radius:8px; cursor:pointer; max-width:200px; }
    .g-recaptcha { transform:scale(1); transform-origin:0 0; }
    @media (min-width:640px){
      .two-cols{ display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
      .three-cols{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap:12px; }
    }
  </style>

  <form id='webform6988454000000575779'
    action='https://crm.zoho.com/crm/WebToLeadForm'
    name='WebToLeads6988454000000575779'
    method='POST'
    onSubmit='javascript:document.charset="UTF-8"; return checkMandatory6988454000000575779()'
    accept-charset='UTF-8'>

    <!-- Requeridos por Zoho (no remover) -->
    <input type='text' style='display:none;' name='xnQsjsdp' value='45d9b797d479f84068f90d42b00a56219ce832c39eec6842269a4802278cacf1'/>
    <input type='hidden' name='zc_gad' id='zc_gad' value=''/>
    <input type='text' style='display:none;' name='xmIwtLD' value='b43dad152065720fc561bb796faf679d9b41423112ae8cc52a6f4ac121fc64ed79d4c6fd1e1e5bad4f6986047f9d8f98'/>
    <input type='text' style='display:none;' name='actionType' value='TGVhZHM='/>
    <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;empresas.echevensko.com&#x2f;gracias'/>

    <div class='two-cols'>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='First_Name'>Nombre <span style='color:red;'>*</span></label></div>
        <div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40' aria-required='true' aria-label='First Name'/></div>
      </div>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='Last_Name'>Apellido <span style='color:red;'>*</span></label></div>
        <div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80' aria-required='true' aria-label='Last Name'/></div>
      </div>
    </div>

    <div class='two-cols'>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='Email'>Correo electrónico <span style='color:red;'>*</span></label></div>
        <div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100' aria-required='true' aria-label='Email' autocomplete='false'/></div>
      </div>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='Company'>Empresa <span style='color:red;'>*</span></label></div>
        <div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200' aria-required='true' aria-label='Company'/></div>
      </div>
    </div>

    <div class='two-cols'>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='LEADCF2'>Cargo</label></div>
        <div class='zcwf_col_fld'><input type='text' id='LEADCF2' name='LEADCF2' maxlength='255' aria-label='LEADCF2'/></div>
      </div>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='City'>Ciudad <span style='color:red;'>*</span></label></div>
        <div class='zcwf_col_fld'><input type='text' id='City' name='City' maxlength='100' aria-required='true' aria-label='City'/></div>
      </div>
    </div>

    <div class='three-cols'>
      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='LEADCF116'>Fecha tentativa</label></div>
        <div class='zcwf_col_fld'>
          <input type='text' id='LEADCF116' name='LEADCF116' maxlength='20' ftype='date' placeholder='DD-MM-YYYY' aria-placeholder='DD-MM-YYYY' tplid='6988454000000575779LEADCF116'
            onfocus='formCalender.stEv(event);formCalender.createCalendar(this);' autocomplete='off'/>
          <div id='template6988454000000575779LEADCF116' onclick='formCalender.stEv(event);' class='tempCalDiv'></div>
        </div>
      </div>

      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='LEADCF51'>N&deg; asistentes</label></div>
        <div class='zcwf_col_fld'><input type='text' id='LEADCF51' name='LEADCF51' maxlength='9' aria-label='LEADCF51'/></div>
      </div>

      <div class='zcwf_row'>
        <div class='zcwf_col_lab'><label for='LEADCF6'>Modalidad</label></div>
        <div class='zcwf_col_fld'>
          <select class='zcwf_col_fld_slt' id='LEADCF6' name='LEADCF6' onChange='addAriaSelected6988454000000575779()' aria-label='LEADCF6'>
            <option value='-None-'>-None-</option>
            <option selected value='Presencial'>Presencial</option>
            <option value='Online'>Online</option>
          </select>
        </div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'><label for='LEADCF3'>Mensaje <span style='color:red;'>*</span></label></div>
      <div class='zcwf_col_fld'><textarea id='LEADCF3' name='LEADCF3' rows='5' style='font-family: Arial, sans-serif;'></textarea></div>
    </div>

    <!-- Campos ocultos de clasificación -->
    <div class='zcwf_row wfrm_fld_dpNn'>
      <div class='zcwf_col_lab'><label for='LEADCF5'>Echevensko</label></div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' id='LEADCF5' name='LEADCF5' onChange='addAriaSelected6988454000000575779()'>
          <option value='-None-'>-None-</option>
          <option value='Tronx-Group'>Tronx-Group</option>
          <option value='Dekaelo'>Dekaelo</option>
          <option value='Tronx-TV'>Tronx-TV</option>
          <option value='Tonx-Strategy'>Tonx-Strategy</option>
          <option selected value='Echevensko'>Echevensko</option>
          <option value='APCC'>APCC</option>
          <option value='HKLABA'>HKLABA</option>
        </select>
      </div>
    </div>

    <div class='zcwf_row wfrm_fld_dpNn'>
      <div class='zcwf_col_lab'><label for='LEADCF9'>Lead_Origen</label></div>
      <div class='zcwf_col_fld'>
        <select class='zcwf_col_fld_slt' id='LEADCF9' name='LEADCF9' onChange='addAriaSelected6988454000000575779()'>
          <option value='-None-'>-None-</option>
          <option value='plan.dekaelomedia.com'>plan.dekaelomedia.com</option>
          <option value='tronxgroup.com/contacto'>tronxgroup.com/contacto</option>
          <option value='tronxstrategic.com/contacto'>tronxstrategic.com/contacto</option>
          <option value='dekaelomedia.com/contacto'>dekaelomedia.com/contacto</option>
          <option selected value='empresas.echevensko.com'>empresas.echevensko.com</option>
          <option value='apccskills.asiapacific-chamber.com'>apccskills.asiapacific-chamber.com</option>
          <option value='asiapacific-chamber.com/contacto'>asiapacific-chamber.com/contacto</option>
          <option value='hklaba.com/contacto'>hklaba.com/contacto</option>
        </select>
      </div>
    </div>

    <input type='text' style='display:none;' name='aG9uZXlwb3Q' value='' />

    <!-- reCAPTCHA v2 Checkbox (clave provista) -->
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <div class='g-recaptcha' data-sitekey='6Lf-3sorAAAAAKTLgYS7eN1k_eC0Ewx20D_7kALH' data-theme='light' data-callback='rccallback6988454000000575779' captcha-verified='false' id='recap6988454000000575779'></div>
        <div id='recapErr6988454000000575779' style='font-size:12px;color:red;visibility:hidden;'>Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.</div>
      </div>
    </div>

    <div class='zcwf_row'>
      <div class='zcwf_col_lab'></div>
      <div class='zcwf_col_fld'>
        <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Enviar' title='Enviar' aria-label='Enviar'/>
        <input type='reset' class='zcwf_button' name='reset' value='Restablecer' title='Restablecer' aria-label='Restablecer'/>
      </div>
    </div>
  </form>
</div>
                `,
              }}
            />
          </div>

          <div className="md:col-span-2">
            <Card className="rounded-2xl md:sticky md:top-24">
              <CardHeader>
                <CardTitle>Datos de contacto</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" aria-hidden /> info@echevensko.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden /> +56 9 2008 0031
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden /> Santiago, Chile
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" aria-hidden /> Respuesta en
                  24h hábiles
                </p>
                <div className="pt-3 border-t">
                  <p className="font-medium">Incluye</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 mt-0.5" aria-hidden /> Factura
                      electrónica (afecta a IVA o exenta)
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 mt-0.5" aria-hidden /> Contrato
                      de servicios
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 mt-0.5" aria-hidden /> Prueba
                      técnica previa
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Echevensko. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacidad/condiciones" className="hover:text-neutral-800">
              Privacidad
            </a>
            <a href="/terminos" className="hover:text-neutral-800">
              Términos
            </a>
            <a
              href="https://instagram.com/cristobalechevensko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-800 inline-flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" aria-hidden /> @cristobalechevensko
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
