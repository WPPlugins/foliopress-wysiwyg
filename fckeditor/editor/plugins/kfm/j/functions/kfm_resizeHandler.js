window.kfm_resizeHandler=function(){
	var w,win,i,el,iframe;
	win=$j(window);
	w={x:win.width(),y:win.height()};
	for(i=0;i<kfm_resizeHandler_maxHeights.length;++i)  if(document.getElementById(kfm_resizeHandler_maxHeights[i]))document.getElementById(kfm_resizeHandler_maxHeights[i]).style.height=w.y+'px';
	for(i=0;i<kfm_resizeHandler_maxWidths.length;++i)if(document.getElementById(kfm_resizeHandler_maxWidths[i]))document.getElementById(kfm_resizeHandler_maxWidths[i]).style.width=w.x+'px';
	el=document.getElementById('kfm_codepressTableCell');
	if(el){
		iframe=$j('iframe',el)[0];
		if(iframe){
			iframe.style.height=0;
			iframe.style.width=0;
			iframe.style.height=(el.offsetHeight-10)+'px';
			iframe.style.width=(el.offsetWidth-10)+'px';
		}
	}
	kfm_refreshPanels('kfm_left_column');
	$j('body *').each(function(key,el){
		if(el.parentResized)el.parentResized();
	});
}
