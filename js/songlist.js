    /**
 * Created by Administrator on 2017/5/6.
 */
    // ge歌曲
var songlist = {'彭清 - 新年快乐.mp3':'彭清 - 新年快乐','后会无期.mp3':'后会无期','龙卷风.mp3':'龙卷风','南征北战 - 遥远星球的来客.mp3':'南征北战 - 遥远星球的来客','周杰伦 - 彩虹.mp3':'周杰伦 - 彩虹','周杰伦 - 听妈妈的话.mp3':'周杰伦 - 听妈妈的话','我不配-周杰伦.mp3':'我不配-周杰伦','南征北战 - 哦啦啦耶.mp3':'南征北战 - 哦啦啦耶','泡沫.mp3':'泡沫','生来倔强.mp3':'生来倔强','天高路远.mp3':'天高路远','喜欢你.mp3':'喜欢你','我的天空.mp3':'我的天空'};

$(document).ready(function(){
    // daitai动态生成list
    $.each (songlist,function(key,value){
        $uls = $("<ul></ul>");
        $lis = $("<li class='li1'>" + value + "</li>");
        $uls.append($lis).appendTo($("#musics"));
    });
    // 选择歌曲播放
    $("#musics").on("click","li",function(){
        var songname = $(this).text();
        $("#musicPlayer").attr({src:""});
        $("#musicPlayer").attr({src:"music/" + songname + ".mp3"});
        $("#songShow").html(songname); //获取songname
        //duration 	返回音频的长度（以秒计）。
        //ended 	返回音频的播放是否已结束。
        // musicplay播放
        var musicPlayer = document.getElementById("musicPlayer"); //头痛，js对象和jQuery对象转换不会，，，
        var cNow = document.querySelector(".now");
        musicPlayer.play();
        cNow.style.backgroundPosition = "-138px -194px";
        cNow.title = "暂停";
        // 获取播放时间
        var timer = null;
        var s = 0,mins = 0;
        clearInterval(timer);
        timer = setInterval(autoTime,1000);
        function autoTime(){
            var playTime = document.querySelector(".playTime");
            var songTime = parseInt(musicPlayer.currentTime);
            s = songTime % 60;
            s < 10 ? s = "0" + s : s;
            mins = "0" + parseInt(songTime / 60);
            //console.log(mins + ":" + s);
            playTime.innerHTML = mins + ":" + s + "/04:16";
        }
        // kongzhi控制
        cNow.onclick = function(){
            if(musicPlayer.paused){
                musicPlayer.play();
                clearInterval(timer);
                timer = setInterval(autoTime,1000);
                cNow.style.backgroundPosition = "-138px -194px";
                cNow.title = "暂停";
            }else {
                musicPlayer.pause();
                clearInterval(timer);
                cNow.style.backgroundPosition = "-137px -113px";
                cNow.title = "播放";
            }
        }

    });

});