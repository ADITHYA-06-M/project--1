let timer;
let seconds =0;

function formattime(sec){
	let hrs = Math.floor(sec/3600);
    /*sec = 3661
      hrs = 3661/3600 = 1.013
      hrs - 1*/

	let mins = Math.floor((sec%3600)/60);
	/* sec = 3661
	   mins (sec%3661) = 61
	   61/60 = 1 
	   mins = 1*/
	let secs = sec%60;
	/* sec = 63
	   secs = 63%60 */

    return(
       (hrs<10?"0":"")+hrs+":"+
       /* 7 hours: 00(two digit)-07:*/
       (mins<10?"0":"")+mins+":"+
       /* 24 minutes: 24:*/
       (secs<10?"0":"")+secs
    );
}

function starttime(){
	if(!timer){
		timer = setInterval(()=>{
			seconds++;
			document.getElementById("time").textContent = formattime(seconds);
		},1000);
	}
}

function pausetime(){
	clearInterval(timer);//clearInterval - builtin function, Used to freeze the timer
	timer = null;
}

function resettime(){
	clearInterval(timer);
	timer=null;
	seconds = 0;
	document.getElementById("time").textContent="00:00:00";
}