// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: nodata.ggsk
// Generated 周一 6月 19 12:28:26 2017

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._loading_image=document.createElement('div');
		this._loading_image.ggId="loading image";
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_image';
		this._loading_image.ggType='image';
		this._loading_image.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-110 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-51 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -110px;';
		hs+='top:  -51px;';
		hs+='width: 224px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.png');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_image__img);
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text';
		this._loading_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  14px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<b>Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		this._loading_image.appendChild(this._loading_text);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="loading bar";
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle';
		this._loading_bar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 11px;';
		hs+='top:  39px;';
		hs+='width: 198px;';
		hs+='height: 10px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #4f4f4f;';
		hs+='border: 2px solid #000000;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_image.appendChild(this._loading_bar);
		this._loading_close=document.createElement('div');
		this._loading_close.ggId="loading close";
		this._loading_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_close.ggVisible=true;
		this._loading_close.className='ggskin ggskin_image';
		this._loading_close.ggType='image';
		hs ='position:absolute;';
		hs+='left: 200px;';
		hs+='top:  1px;';
		hs+='width: 24px;';
		hs+='height: 24px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_close.setAttribute('style',hs);
		this._loading_close__img=document.createElement('img');
		this._loading_close__img.className='ggskin ggskin_image';
		this._loading_close__img.setAttribute('src',basePath + 'images/loading_close.png');
		this._loading_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._loading_close__img.className='ggskin ggskin_image';
		this._loading_close__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_close__img);
		this._loading_close.appendChild(this._loading_close__img);
		this._loading_close.onclick=function () {
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility='hidden';
			me._loading_image.ggVisible=false;
		}
		this._loading_image.appendChild(this._loading_close);
		this.divSkin.appendChild(this._loading_image);
		this._tool=document.createElement('div');
		this._tool.ggId="tool";
		this._tool.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tool.ggVisible=true;
		this._tool.className='ggskin ggskin_rectangle';
		this._tool.ggType='rectangle';
		this._tool.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-148 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-45 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -148px;';
		hs+='top:  -45px;';
		hs+='width: 283px;';
		hs+='height: 41px;';
		hs+=cssPrefix + 'transform-origin: 50% 100%;';
		hs+='opacity: 0.6;';
		hs+='visibility: inherit;';
		hs+='background: #f6f6f6;';
		hs+='border: 1px solid #d6d6d6;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._tool.setAttribute('style',hs);
		this._tool.onmouseover=function () {
			me.elementMouseOver['tool']=true;
		}
		this._tool.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._tool.style[domTransition]='none';
			} else {
				me._tool.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._tool.style.opacity='0.6';
			me._tool.style.visibility=me._tool.ggVisible?'inherit':'hidden';
			me.elementMouseOver['tool']=false;
		}
		this._tool.ontouchend=function () {
			me.elementMouseOver['tool']=false;
		}
		this._tool_left=document.createElement('div');
		this._tool_left.ggId="tool_left";
		this._tool_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tool_left.ggVisible=true;
		this._tool_left.className='ggskin ggskin_button';
		this._tool_left.ggType='button';
		hs ='position:absolute;';
		hs+='left: 9px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tool_left.setAttribute('style',hs);
		this._tool_left__img=document.createElement('img');
		this._tool_left__img.className='ggskin ggskin_button';
		this._tool_left__img.setAttribute('src',basePath + 'images/tool_left.png');
		this._tool_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tool_left__img.className='ggskin ggskin_button';
		this._tool_left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tool_left__img);
		this._tool_left.appendChild(this._tool_left__img);
		this._tool_left.onmouseout=function () {
			me.elementMouseDown['tool_left']=false;
		}
		this._tool_left.onmousedown=function () {
			me.elementMouseDown['tool_left']=true;
		}
		this._tool_left.onmouseup=function () {
			me.elementMouseDown['tool_left']=false;
		}
		this._tool_left.ontouchend=function () {
			me.elementMouseDown['tool_left']=false;
		}
		this._tool.appendChild(this._tool_left);
		this._tool_right=document.createElement('div');
		this._tool_right.ggId="tool_right";
		this._tool_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tool_right.ggVisible=true;
		this._tool_right.className='ggskin ggskin_button';
		this._tool_right.ggType='button';
		hs ='position:absolute;';
		hs+='left: 54px;';
		hs+='top:  1px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tool_right.setAttribute('style',hs);
		this._tool_right__img=document.createElement('img');
		this._tool_right__img.className='ggskin ggskin_button';
		this._tool_right__img.setAttribute('src',basePath + 'images/tool_right.png');
		this._tool_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tool_right__img.className='ggskin ggskin_button';
		this._tool_right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tool_right__img);
		this._tool_right.appendChild(this._tool_right__img);
		this._tool_right.onmouseout=function () {
			me.elementMouseDown['tool_right']=false;
		}
		this._tool_right.onmousedown=function () {
			me.elementMouseDown['tool_right']=true;
		}
		this._tool_right.onmouseup=function () {
			me.elementMouseDown['tool_right']=false;
		}
		this._tool_right.ontouchend=function () {
			me.elementMouseDown['tool_right']=false;
		}
		this._tool.appendChild(this._tool_right);
		this._tool_up=document.createElement('div');
		this._tool_up.ggId="tool_up";
		this._tool_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tool_up.ggVisible=true;
		this._tool_up.className='ggskin ggskin_button';
		this._tool_up.ggType='button';
		hs ='position:absolute;';
		hs+='left: 99px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tool_up.setAttribute('style',hs);
		this._tool_up__img=document.createElement('img');
		this._tool_up__img.className='ggskin ggskin_button';
		this._tool_up__img.setAttribute('src',basePath + 'images/tool_up.png');
		this._tool_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tool_up__img.className='ggskin ggskin_button';
		this._tool_up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tool_up__img);
		this._tool_up.appendChild(this._tool_up__img);
		this._tool_up.onmouseout=function () {
			me.elementMouseDown['tool_up']=false;
		}
		this._tool_up.onmousedown=function () {
			me.elementMouseDown['tool_up']=true;
		}
		this._tool_up.onmouseup=function () {
			me.elementMouseDown['tool_up']=false;
		}
		this._tool_up.ontouchend=function () {
			me.elementMouseDown['tool_up']=false;
		}
		this._tool.appendChild(this._tool_up);
		this._tool_down=document.createElement('div');
		this._tool_down.ggId="tool_down";
		this._tool_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tool_down.ggVisible=true;
		this._tool_down.className='ggskin ggskin_button';
		this._tool_down.ggType='button';
		hs ='position:absolute;';
		hs+='left: 144px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tool_down.setAttribute('style',hs);
		this._tool_down__img=document.createElement('img');
		this._tool_down__img.className='ggskin ggskin_button';
		this._tool_down__img.setAttribute('src',basePath + 'images/tool_down.png');
		this._tool_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tool_down__img.className='ggskin ggskin_button';
		this._tool_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tool_down__img);
		this._tool_down.appendChild(this._tool_down__img);
		this._tool_down.onmouseout=function () {
			me.elementMouseDown['tool_down']=false;
		}
		this._tool_down.onmousedown=function () {
			me.elementMouseDown['tool_down']=true;
		}
		this._tool_down.onmouseup=function () {
			me.elementMouseDown['tool_down']=false;
		}
		this._tool_down.ontouchend=function () {
			me.elementMouseDown['tool_down']=false;
		}
		this._tool.appendChild(this._tool_down);
		this._tool_zoomin=document.createElement('div');
		this._tool_zoomin.ggId="tool_zoomin";
		this._tool_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tool_zoomin.ggVisible=true;
		this._tool_zoomin.className='ggskin ggskin_button';
		this._tool_zoomin.ggType='button';
		hs ='position:absolute;';
		hs+='left: 189px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tool_zoomin.setAttribute('style',hs);
		this._tool_zoomin__img=document.createElement('img');
		this._tool_zoomin__img.className='ggskin ggskin_button';
		this._tool_zoomin__img.setAttribute('src',basePath + 'images/tool_zoomin.png');
		this._tool_zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tool_zoomin__img.className='ggskin ggskin_button';
		this._tool_zoomin__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tool_zoomin__img);
		this._tool_zoomin.appendChild(this._tool_zoomin__img);
		this._tool_zoomin.onmouseout=function () {
			me.elementMouseDown['tool_zoomin']=false;
		}
		this._tool_zoomin.onmousedown=function () {
			me.elementMouseDown['tool_zoomin']=true;
		}
		this._tool_zoomin.onmouseup=function () {
			me.elementMouseDown['tool_zoomin']=false;
		}
		this._tool_zoomin.ontouchend=function () {
			me.elementMouseDown['tool_zoomin']=false;
		}
		this._tool.appendChild(this._tool_zoomin);
		this._tool_zoomout=document.createElement('div');
		this._tool_zoomout.ggId="tool_zoomout";
		this._tool_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tool_zoomout.ggVisible=true;
		this._tool_zoomout.className='ggskin ggskin_button';
		this._tool_zoomout.ggType='button';
		hs ='position:absolute;';
		hs+='left: 234px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._tool_zoomout.setAttribute('style',hs);
		this._tool_zoomout__img=document.createElement('img');
		this._tool_zoomout__img.className='ggskin ggskin_button';
		this._tool_zoomout__img.setAttribute('src',basePath + 'images/tool_zoomout.png');
		this._tool_zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tool_zoomout__img.className='ggskin ggskin_button';
		this._tool_zoomout__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tool_zoomout__img);
		this._tool_zoomout.appendChild(this._tool_zoomout__img);
		this._tool_zoomout.onmouseout=function () {
			me.elementMouseDown['tool_zoomout']=false;
		}
		this._tool_zoomout.onmousedown=function () {
			me.elementMouseDown['tool_zoomout']=true;
		}
		this._tool_zoomout.onmouseup=function () {
			me.elementMouseDown['tool_zoomout']=false;
		}
		this._tool_zoomout.ontouchend=function () {
			me.elementMouseDown['tool_zoomout']=false;
		}
		this._tool.appendChild(this._tool_zoomout);
		this.divSkin.appendChild(this._tool);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading_image.style[domTransition]='none';
			me._loading_image.ggParameter.sx=0;me._loading_image.ggParameter.sy=0;
			me._loading_image.style[domTransform]=parameterToTransform(me._loading_image.ggParameter);
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		this._loading_text.ggUpdateText();
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
		if (me.elementMouseOver['tool']) {
			if (me.player.transitionsDisabled) {
				me._tool.style[domTransition]='none';
			} else {
				me._tool.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._tool.style.opacity='0.8';
			me._tool.style.visibility=me._tool.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['tool_left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['tool_right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['tool_up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['tool_down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['tool_zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['tool_zoomout']) {
			me.player.changeFovLog(1,true);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hs1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 363px;';
			hs+='top:  163px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext1_temp.style[domTransition]='none';
				me._hstext1_temp.style.visibility='hidden';
				me._hstext1_temp.ggVisible=false;
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._hsanniu1=document.createElement('div');
			this._hsanniu1.ggId="hsanniu1";
			this._hsanniu1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsanniu1.ggVisible=true;
			this._hsanniu1.className='ggskin ggskin_button';
			this._hsanniu1.ggType='button';
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  0px;';
			hs+='width: 34px;';
			hs+='height: 34px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsanniu1.setAttribute('style',hs);
			this._hsanniu1__img=document.createElement('img');
			this._hsanniu1__img.className='ggskin ggskin_button';
			this._hsanniu1__img.setAttribute('src',basePath + 'images/hsanniu1.png');
			this._hsanniu1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsanniu1__img.className='ggskin ggskin_button';
			this._hsanniu1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsanniu1__img);
			this._hsanniu1.appendChild(this._hsanniu1__img);
			this._hsanniu1.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._hsanniu1.style[domTransition]='none';
				} else {
					me._hsanniu1.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._hsanniu1.ggParameter.a="360";
				me._hsanniu1.style[domTransform]=parameterToTransform(me._hsanniu1.ggParameter);
			}
			this._hsanniu1.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._hsanniu1.style[domTransition]='none';
				} else {
					me._hsanniu1.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._hsanniu1.ggParameter.a="0";
				me._hsanniu1.style[domTransform]=parameterToTransform(me._hsanniu1.ggParameter);
			}
			this.__div.appendChild(this._hsanniu1);
			this._hstext1_temp=document.createElement('div');
			this._hstext1_temp__text=document.createElement('div');
			this._hstext1_temp.className='ggskin ggskin_textdiv';
			this._hstext1_temp.ggTextDiv=this._hstext1_temp__text;
			this._hstext1_temp.ggId="hstext1_temp";
			this._hstext1_temp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext1_temp.ggVisible=false;
			this._hstext1_temp.className='ggskin ggskin_text';
			this._hstext1_temp.ggType='text';
			this._hstext1_temp.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (53-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -25px;';
			hs+='top:  -25px;';
			hs+='width: 51px;';
			hs+='height: 16px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext1_temp.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffff7f;';
			hs+='border: 1px solid #ff0000;';
			hs+='color: #ff0000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext1_temp__text.setAttribute('style',hs);
			this._hstext1_temp.ggTextDiv.innerHTML=me.hotspot.title;
			this._hstext1_temp.appendChild(this._hstext1_temp__text);
			this.__div.appendChild(this._hstext1_temp);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._hstext1_temp.style[domTransition]='none';
					me._hstext1_temp.style.visibility='inherit';
					me._hstext1_temp.ggVisible=true;
				}
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};