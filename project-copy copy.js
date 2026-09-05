(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"project_atlas_1", frames: [[0,129,296,87],[0,396,280,82],[0,218,296,87],[0,307,296,87],[0,0,480,127]]},
		{name:"project_atlas_2", frames: [[0,802,466,140],[468,802,466,140],[0,0,800,800]]},
		{name:"project_atlas_3", frames: [[0,0,800,800]]},
		{name:"project_atlas_4", frames: [[0,0,800,800]]},
		{name:"project_atlas_5", frames: [[0,0,800,800]]},
		{name:"project_atlas_6", frames: [[0,0,800,800]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.素材小猫 = function() {
	this.initialize(ss["project_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.素材文字2 = function() {
	this.initialize(img.素材文字2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.画板2 = function() {
	this.initialize(img.画板2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.icon21 = function() {
	this.initialize(ss["project_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.icon22 = function() {
	this.initialize(ss["project_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.icon23 = function() {
	this.initialize(ss["project_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.icon24 = function() {
	this.initialize(ss["project_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.位图11 = function() {
	this.initialize(ss["project_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.位图12 = function() {
	this.initialize(img.位图12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5404,3040);


(lib.文字 = function() {
	this.initialize(img.文字);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.btn2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.icon22();
	this.instance.setTransform(0,0,0.1062,0.1062);

	this.instance_1 = new lib.icon24();
	this.instance_1.setTransform(0,0,0.1062,0.1062);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,85);


(lib.btn1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.icon21();
	this.instance.setTransform(0,0,0.1062,0.1062);

	this.instance_1 = new lib.icon23();
	this.instance_1.setTransform(0,0,0.1075,0.1075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.beginBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(6.3,176.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-40.15,164.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(6.25,176.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_7();
	this.instance_3.setTransform(-40.15,164.55,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(9.1,177.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_8();
	this.instance_5.setTransform(6.25,176.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_4}]},1).to({state:[{t:this.instance_3},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,164.6,233,70);


// stage content:
(lib.project = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		let _this=this;
		this.BeginBtn.on('click',()=>{
			window.location.href="first.html";
		})
		// 帮助按钮（“开始探索”左侧的 btn1）：弹出帮助说明弹窗
		this.instance_1.on('click',()=>{
			if (window.showHelp) { window.showHelp(); }
		})
		// 设置按钮（“开始探索”右侧的 btn2）：弹出作品设置弹窗
		this.instance.on('click',()=>{
			if (window.showSettings) { window.showSettings(); }
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Btn
	this.BeginBtn = new lib.beginBtn();
	this.BeginBtn.name = "BeginBtn";
	this.BeginBtn.setTransform(594.05,430.3,1,1,0,0,0,36.1,0);
	new cjs.ButtonHelper(this.BeginBtn, 0, 1, 2, false, new lib.beginBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BeginBtn).wait(1));

	// 按钮
	this.instance = new lib.btn2();
	this.instance.setTransform(932.5,631.5,1,1,0,0,0,42.5,42.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn2(), 3);

	this.instance_1 = new lib.btn1();
	this.instance_1.setTransform(331.5,631.5,1,1,0,0,0,42.5,42.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 小猫
	this.instance_2 = new lib.素材小猫();
	this.instance_2.setTransform(714,177,0.6925,0.6925);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 光线
	this.instance_3 = new lib.位图11();
	this.instance_3.setTransform(246,576,0.8333,0.8335);

	this.instance_4 = new lib.位图11();
	this.instance_4.setTransform(486,558,0.6104,0.6101);

	this.instance_5 = new lib.位图11();
	this.instance_5.setTransform(620,576,0.8333,0.8335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// 文字png
	this.instance_6 = new lib.素材文字2();
	this.instance_6.setTransform(-167,239);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// 标题
	this.instance_7 = new lib.文字();
	this.instance_7.setTransform(-160,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// 背景
	this.instance_8 = new lib.画板2();

	this.instance_9 = new lib.位图12();
	this.instance_9.setTransform(0,-1,0.2369,0.2368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(473,223,967,916);
// library properties:
lib.properties = {
	id: 'BE29414A78AAD149A37C940C228239EE',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/素材文字2.png?1788015262844", id:"素材文字2"},
		{src:"images/画板2.png?1788015262844", id:"画板2"},
		{src:"images/位图12.png?1788015262844", id:"位图12"},
		{src:"images/文字_.png?1788015262844", id:"文字"},
		{src:"images/project_atlas_1.png?1788015262827", id:"project_atlas_1"},
		{src:"images/project_atlas_2.png?1788015262827", id:"project_atlas_2"},
		{src:"images/project_atlas_3.png?1788015262827", id:"project_atlas_3"},
		{src:"images/project_atlas_4.png?1788015262827", id:"project_atlas_4"},
		{src:"images/project_atlas_5.png?1788015262827", id:"project_atlas_5"},
		{src:"images/project_atlas_6.png?1788015262827", id:"project_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BE29414A78AAD149A37C940C228239EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;