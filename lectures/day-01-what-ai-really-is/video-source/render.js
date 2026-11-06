// Usage: node render.js scene.html out.mp4 [fps] [scale]
const {chromium}=require('playwright');const {spawn}=require('child_process');const path=require('path');
(async()=>{
 const [html,out,fpsA,scaleA]=process.argv.slice(2);const FPS=+(fpsA||30), SCALE=+(scaleA||2);
 const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920*SCALE,height:1080*SCALE},deviceScaleFactor:1});
 p.on('pageerror',e=>console.log('ERR',e.message));
 const cdp=await p.context().newCDPSession(p);
 await p.goto('file://'+path.resolve(html));await p.waitForFunction('window.ready');
 await p.addStyleTag({content:`html,body{width:${1920*SCALE}px!important;height:${1080*SCALE}px!important} #stage{transform:scale(${SCALE});transform-origin:0 0}`});
 const {iv,sc}=await p.evaluate(()=>({iv:INTERVALS,sc:SCENES}));
 const dur=sc[sc.length-1][2], N=Math.round(dur*FPS), dt=1/FPS;
 const sceneAt=t=>sc.findIndex(([_,s,e])=>t>=s&&t<e);
 const ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-',
   '-f','lavfi','-i','anullsrc=r=48000:cl=stereo','-shortest',
   '-c:v','libx264','-preset','fast','-crf','16','-tune','animation','-pix_fmt','yuv420p','-r',String(FPS),
   '-c:a','aac','-b:a','128k','-movflags','+faststart',out],{stdio:['pipe','inherit','inherit']});
 const write=buf=>new Promise(r=>{if(!ff.stdin.write(buf))ff.stdin.once('drain',r);else r();});
 let last=null,lastScene=-2,rendered=0;const t0=Date.now();
 for(let i=0;i<N;i++){
   const t=i/FPS, s=sceneAt(t);
   const active=iv.some(([a,e])=>t>=a-dt&&t<=e+dt);
   if(!last||active||s!==lastScene){await p.evaluate(t=>seek(t),t);last=Buffer.from((await cdp.send('Page.captureScreenshot',{format:'jpeg',quality:97,optimizeForSpeed:true})).data,'base64');rendered++;}
   lastScene=s;await write(last);
   if(i%900===0)console.log(`frame ${i}/${N} rendered=${rendered} ${((Date.now()-t0)/1000).toFixed(0)}s`);
 }
 ff.stdin.end();await new Promise(r=>ff.on('close',r));await b.close();
 console.log('done',N,'frames, rendered',rendered,'in',((Date.now()-t0)/1000).toFixed(0),'s');
})();
