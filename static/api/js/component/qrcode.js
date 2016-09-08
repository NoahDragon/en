window._bd_share_main.F.module("component/qrcode",function(t,e){function r(t){this.mode=s.MODE_8BIT_BYTE,this.data=t}function n(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}function o(t,e){if(t.length==undefined)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&t[r]==0)r++;this.num=new array(t.length-r+e);for(var="" n="0;n<t.length-r;n++)this.num[n]=t[n+r]}function" i(t,e){this.totalcount="t,this.dataCount=e}function" a(){this.buffer="new" array,this.length="0}r.prototype={getLength:function(t){return" this.data.length},write:function(t){for(var="" e="0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},n.prototype={addData:function(t){var" r(t);this.datalist.push(e),this.datacache="null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw" new="" error(t+","+e);return="" this.modules[t][e]},getmodulecount:function(){return="" this.modulecount},make:function(){if(this.typenumber<1){var="" t="1;for(t=1;t<40;t++){var" a,n="0;for(var" o="0;o<e.length;o++)n+=e[o].dataCount;for(var" s="this.dataList[o];r.put(s.mode,4),r.put(s.getLength(),l.getLengthInBits(s.mode,t)),s.write(r)}if(r.getLengthInBits()<=n*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new" array(this.modulecount);for(var="" r="0;r<this.moduleCount;r++){this.modules[r]=new">=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++){if(t+r<=-1||this.modulecount<=t+r)continue;for(var n="-1;n<=7;n++){if(e+n<=-1||this.moduleCount<=e+n)continue;0<=r&&r<=6&&(n==0||n==6)||0<=n&&n<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=n&&n<=4?this.modules[t+r][e+n]=!0:this.modules[t+r][e+n]=!1}}},getBestMaskPattern:function(){var" t="0,e=0;for(var" r="0;r<8;r++){this.makeImpl(!0,r);var">n)t=n,e=r}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r),o=1;this.make();for(var i=0;i<this.modules.length;i++){var a="i*o;for(var" s="0;s<this.modules[i].length;s++){var" u="s*o,h=this.modules[i][s];h&&(n.beginFill(0,100),n.moveTo(u,a),n.lineTo(u+o,a),n.lineTo(u+o,a+o),n.lineTo(u,a+o),n.endFill())}}return" n},setuptimingpattern:function(){for(var="" t="8;t<this.moduleCount-8;t++){if(this.modules[t][6]!=null)continue;this.modules[t][6]=t%2==0}for(var" e="8;e<this.moduleCount-8;e++){if(this.modules[6][e]!=null)continue;this.modules[6][e]=e%2==0}},setupPositionAdjustPattern:function(){var" r="0;r<t.length;r++){var" n="t[e],o=t[r];if(this.modules[n][o]!=null)continue;for(var" i="-2;i<=2;i++)for(var">>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n="!t&&(e">>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){var r=this.errorCorrectLevel<<3|e,n=l.getbchtypeinfo(r);for(var o="0;o<15;o++){var" i="!t&&(n">>o&1)==1;o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.modulecount-15+o][8]=i}for(var o="0;o<15;o++){var" i="!t&&(n">>o&1)==1;o<8?this.modules[8][this.modulecount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.modulecount-8][8]=!t},mapdata:function(t,e){var r="-1,n=this.moduleCount-1,o=7,i=0;for(var" a="this.moduleCount-1;a">0;a-=2){a==6&&a--;for(;;){for(var s=0;s<2;s++)if(this.modules[n][a-s]==null){var u="!1;i<t.length&&(u=(t[i]">>>o&1)==1);var h=l.getMask(e,n,a-s);h&&(u=!u),this.modules[n][a-s]=u,o--,o==-1&&(i++,o=7)}n+=r;if(n<0||this.modulecount<=n){n-=r,r=-r;break}}}}},n.pad0=236,n.pad1=17,n.createdata=function(t,e,r){var o="i.getRSBlocks(t,e),s=new" a;for(var="" u="0;u<r.length;u++){var" h="r[u];s.put(h.mode,4),s.put(h.getLength(),l.getLengthInBits(h.mode,t)),h.write(s)}var" g="0;for(var">g*8)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+g*8+")");s.getLengthInBits()+4<=g*8&&s.put(0,4);while(s.getlengthinbits()%8!=0)s.putbit(!1);for(;;){if(s.getlengthinbits()>=g*8)break;s.put(n.PAD0,8);if(s.getLengthInBits()>=g*8)break;s.put(n.PAD1,8)}return n.createBytes(s,o)},n.createBytes=function(t,e){var r=0,n=0,i=0,a=new Array(e.length),s=new Array(e.length);for(var u=0;u<e.length;u++){var h="e[u].dataCount,g=e[u].totalCount-h;n=Math.max(n,h),i=Math.max(i,g),a[u]=new" array(h);for(var="" f="0;f<a[u].length;f++)a[u][f]=255&t.buffer[f+r];r+=h;var" v="l.getErrorCorrectPolynomial(g),c=new" o(a[u],v.getlength()-1),d="c.mod(v);s[u]=new" array(v.getlength()-1);for(var="" m="f+d.getLength()-s[u].length;s[u][f]=m">=0?d.get(m):0}}var E=0;for(var f=0;f<e.length;f++)e+=e[f].totalcount;var t="new" array(e),b="0;for(var" f="0;f<n;f++)for(var" u="0;u<e.length;u++)f<a[u].length&&(T[B++]=a[u][f]);for(var" t};var="" s="{MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},u={L:1,M:0,Q:3,H:2},h={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},l={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var" e="t<<10;while(l.getBCHDigit(e)-l.getBCHDigit(l.G15)">=0)e^=l.G15<<l.getbchdigit(e)-l.getbchdigit(l.g15);return(t<<10|e)^l.g15_mask},getbchtypenumber:function(t){var e="t<<12;while(l.getBCHDigit(e)-l.getBCHDigit(l.G18)">=0)e^=l.G18<<l.getbchdigit(e)-l.getbchdigit(l.g18);return t<<12|e},getbchdigit:function(t){var="" e="0;while(t!=0)e++,t">>>=1;return e},getPatternPosition:function(t){return l.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case h.PATTERN000:return(e+r)%2==0;case h.PATTERN001:return e%2==0;case h.PATTERN010:return r%3==0;case h.PATTERN011:return(e+r)%3==0;case h.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case h.PATTERN101:return e*r%2+e*r%3==0;case h.PATTERN110:return(e*r%2+e*r%3)%2==0;case h.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){var e=new o([1],0);for(var r=0;r<t;r++)e=e.multiply(new o([1,g.gexp(r)],0));return="" e},getlengthinbits:function(t,e){if(1<="e&&e<10)switch(t){case" s.mode_number:return="" 10;case="" s.mode_alpha_num:return="" 9;case="" s.mode_8bit_byte:return="" 8;case="" s.mode_kanji:return="" 8;default:throw="" new="" error("mode:"+t)}else="" if(e<27)switch(t){case="" 12;case="" 11;case="" 16;case="" 10;default:throw="" error("mode:"+t)}else{if(!(e<41))throw="" error("type:"+e);switch(t){case="" 14;case="" 13;case="" 12;default:throw="" error("mode:"+t)}}},getlostpoint:function(t){var="" e="t.getModuleCount(),r=0;for(var" n="0;n<e;n++)for(var" o="0;o<e;o++){var" i="0,a=t.isDark(n,o);for(var" s="-1;s<=1;s++){if(n+s<0||e<=n+s)continue;for(var" u="-1;u<=1;u++){if(o+u<0||e<=o+u)continue;if(s==0&&u==0)continue;a==t.isDark(n+s,o+u)&&i++}}i">5&&(r+=3+i-5)}for(var n=0;n<e-1;n++)for(var o="0;o<e-1;o++){var" h="0;t.isDark(n,o)&&h++,t.isDark(n+1,o)&&h++,t.isDark(n,o+1)&&h++,t.isDark(n+1,o+1)&&h++;if(h==0||h==4)r+=3}for(var" n="0;n<e;n++)for(var" l="0;for(var" g="Math.abs(100*l/e/e-50)/5;return" r+="g*10,r}},g={glog:function(t){if(t<1)throw" new="" error("glog("+t+")");return="" g.log_table[t]},gexp:function(t){while(t<0)t+="255;while(t">=256)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var f=0;f<8;f++)g.exp_table[f]=1<<f;for(var f="8;f<256;f++)g.EXP_TABLE[f]=g.EXP_TABLE[f-4]^g.EXP_TABLE[f-5]^g.EXP_TABLE[f-6]^g.EXP_TABLE[f-8];for(var" this.num[t]},getlength:function(){return="" this.num.length},multiply:function(t){var="" e="new" array(this.getlength()+t.getlength()-1);for(var="" r="0;r<this.getLength();r++)for(var" n="0;n<t.getLength();n++)e[r+n]^=g.gexp(g.glog(this.get(r))+g.glog(t.get(n)));return" new="" o(e,0)},mod:function(t){if(this.getlength()-t.getlength()<0)return="" this;var="" array(this.getlength());for(var="" o(r,0).mod(t)}},i.rs_block_table="[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i.getRSBlocks=function(t,e){var" error("bad="" rs="" block="" @="" typenumber:"+t+"="" errorcorrectlevel:"+e);var="" array;for(var="" a="0;a<n;a++){var" s="r[a*3+0],u=r[a*3+1],h=r[a*3+2];for(var" l="0;l<s;l++)o.push(new" i(u,h))}return="" o},i.getrsblocktable="function(t,e){switch(e){case" u.l:return="" i.rs_block_table[(t-1)*4+0];case="" u.m:return="" i.rs_block_table[(t-1)*4+1];case="" u.q:return="" i.rs_block_table[(t-1)*4+2];case="" u.h:return="" i.rs_block_table[(t-1)*4+3];default:return="" undefined}},a.prototype="{get:function(t){var">>>7-t%8&1)==1},put:function(t,e){for(var r=0;r<e;r++)this.putbit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},e.QRCode=n,e.QRErrorCorrectLevel=u});</=e&&this.buffer.push(0),t&&(this.buffer[e]|=128></e;r++)this.putbit((t></8;f++)g.exp_table[f]=1<<f;for(var></e-1;n++)for(var></t;r++)e=e.multiply(new></l.getbchdigit(e)-l.getbchdigit(l.g18);return></l.getbchdigit(e)-l.getbchdigit(l.g15);return(t<<10|e)^l.g15_mask},getbchtypenumber:function(t){var></e.length;f++)e+=e[f].totalcount;var></e.length;u++){var></=g*8&&s.put(0,4);while(s.getlengthinbits()%8!=0)s.putbit(!1);for(;;){if(s.getlengthinbits()></0||this.modulecount<=n){n-=r,r=-r;break}}}}},n.pad0=236,n.pad1=17,n.createdata=function(t,e,r){var></2;s++)if(this.modules[n][a-s]==null){var></8?this.modules[8][this.modulecount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.modulecount-8][8]=!t},mapdata:function(t,e){var></6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.modulecount-15+o][8]=i}for(var></3|e,n=l.getbchtypeinfo(r);for(var></18;r++){var></this.modules.length;i++){var></=7;r++){if(t+r<=-1||this.modulecount<=t+r)continue;for(var></t.length&&t[r]==0)r++;this.num=new>