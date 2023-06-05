function nightDayHandler(self){
    var target = document.querySelector('body');      
    if(this.value == 'day'){
        target.style.backgroundColor = '#fdf1f0';
        target.style.color = 'black';
        this.value = 'night';
        document.querySelector('#night').value = 'night';
    } else {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        this.value = 'day';
        document.querySelector('#night').value = 'day';
    }
}

$(document).ready(function() {
    $("#night").on("click", function() {
        alert("모드 활성화!");        
    });
});