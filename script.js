var minutesInput = document.getElementById("minutesInput")
var secondsInput = document.getElementById("secondsInput")
var startButton = document.getElementById("startButton")
var progressBar = document.getElementById("progressBar")
var colonStyle = document.getElementById("colonStyle")

var progressBarMax
var changeSeconds = 0
var changeMinutes = 0
var stopper

var setTime = function(){
    clearTimeout(stopper)
    var getMinutes = parseInt(minutesInput.value)
    var getSeconds = parseInt(secondsInput.value)


    if(getSeconds<=9){
        var originalValue = secondsInput.value
        secondsInput.value = ("0" + originalValue).slice(-2)
    }else if(getSeconds >=60){
        secondsInput.value = ("0" + 0).slice(-2)
        changeSeconds = 0
    }else if(getSeconds >=10){
        secondsInput.value = getSeconds
    }else if(secondsInput.value == ""){
        secondsInput.value = ("0" + 0).slice(-2)
    }
    
    if (minutesInput.value == ""){
        minutesInput.value = 0
    }
    changeMinutes = parseInt(minutesInput.value)
    minutesInput.value = changeMinutes
    changeMinutes = changeMinutes * 60
    changeSeconds = parseInt(secondsInput.value)
    var totalTime = changeMinutes + changeSeconds 
    progressBar.value = 0 
    progressBar.setAttribute("max", totalTime)
    progressBarMax = totalTime
}

minutesInput.addEventListener("keyup", setTime)
minutesInput.addEventListener("click", setTime)
secondsInput.addEventListener("keyup", setTime)
secondsInput.addEventListener("click", setTime)



