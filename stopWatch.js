var id;
flag=1;
var s=0,m=0,h=0;
var obj=[],x=0;
window.onload=time();
function time(){
    var t=document.getElementById("time");
    var z=`<h1>${pad(h)} : ${pad(m)} : ${pad(s)}</h1>`;
    t.innerHTML=z;
}
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
function removeInt(){
    clearInterval(id);
    id=-1;
    var stp=document.getElementById("stop");
    stp.style.display="none";
    var strt=document.getElementById("start");
    strt.style.display="inline";
    var lap=document.getElementById("lap");
    lap.style.display="none";
    var reset=document.getElementById("reset");
    reset.style.display="inline";
}
function startInt(){
    if(id==-1||flag==1)
    {
        flag=-1;
        id=window.setInterval(function(){
        var t=document.getElementById("time");
        s++;
        if(s>=60)
        {
            m++;
            s=0;
            if(m>60)
            {
                m=0;
                h++;
            }
        }
        var z=`<h1 styl"font>${pad(h)} : ${pad(m)} : ${pad(s)}</h1>`;
        t.innerHTML=z;
    },1000);

    var stp=document.getElementById("stop");
    stp.style.display="inline";
    var strt=document.getElementById("start");
    strt.style.display="none";
    var lap=document.getElementById("lap");
    lap.style.display="inline";
    var reset=document.getElementById("reset");
    reset.style.display="none";
    }
}

function lap(){
    if(s!=0){
    x++;
    obj.push({hh:h,mm:m,ss:s});
    var str="";
    var ele=document.getElementById("laps");
    for(var i=0;i<x;i++)
    {
        str+="<br><h2> Lap "+(i+1)+" <span style='float:right;font-size:32px;margin-right:200px;'>"+pad(obj[i].hh)+":"+pad(obj[i].mm)+":"+pad(obj[i].ss)+"</span></h2><br><hr style='width:650px;margin-right:200px;'><br>";
    }
    //str+="</ol>";
    ele.innerHTML=str;
    }
}
function resetTimer(){
    s=0;
    h=0;
    m=0;
    time();
    x=0;
    obj=[];
    document.getElementById("laps").innerHTML="";
}