/**
 * Created by Administrator on 2017/3/8.
 */
function $(id){return document.getElementById(id);}
function show(obj){obj.style.display = "block";}
function hide(obj){obj.style.display = "none";}
function nowDrop (current,move){
    current.onmousedown = function(event){
        var event = event || window.event;
//                    console.log(move.offsetLeft);
        var x = event.clientX - move.offsetLeft;
        var y = event.clientY - move.offsetTop;
        document.onmousemove = function(event){
            var event = event || window.event;
            move.style.left = event.clientX - x + move.offsetWidth/2 + "px";
            move.style.top = event.clientY - y + move.offsetHeight/2 + "px";
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
    }
    document.onmouseup = function(){
        document.onmousemove = null ;
    }
}
function dropdown(current,target){
    current.onmousedown = function(event){
//            alert(11);
        var event = event || window.event;
        var tval = event.clientY - this.offsetTop;
        document.onmousemove = function(event){
            var event = event || window.event;
            var nowbt = event.clientY - tval;
            var contentTop = (target.offsetHeight - target.parentNode.offsetHeight) / (current.parentNode.offsetHeight - current.offsetHeight) * nowbt;
            if(nowbt < 0){
                nowbt = 0;
            }else if(nowbt > current.parentNode.offsetHeight - current.offsetHeight ){
                nowbt = current.parentNode.offsetHeight - current.offsetHeight;
            }else {
                target.style.top = -contentTop + "px";
            }
            current.style.top = nowbt + "px";
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
    }
    document.onmouseup = function(){
        document.onmousemove = null;
    }
}
function scroll (){
    if (window.pageXOffset != 0){
        return {
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }else if (document.compatMode == "CSS1Compat"){
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else {
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}