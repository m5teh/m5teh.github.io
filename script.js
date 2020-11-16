function changeColor2 () {
    document.getElementById("tab-2").style.backgroundColor = "brown";
    document.getElementById("tab-1").style.backgroundColor = "red";
    document.getElementById("tab-3").style.backgroundColor = "red";
    document.getElementsByClassName("infomation")[0].style.display = "none";
    document.getElementsByClassName("education")[0].style.display = "inline-block";
    document.getElementsByClassName("hobby")[0].style.display = "none";
}
function changeColor3() {
    document.getElementById("tab-3").style.backgroundColor = "brown";
    document.getElementById("tab-1").style.backgroundColor = "red";
    document.getElementById("tab-2").style.backgroundColor = "red";
    document.getElementsByClassName("infomation")[0].style.display = "none";
    document.getElementsByClassName("education")[0].style.display = "none";
    document.getElementsByClassName("hobby")[0].style.display = "inline-block";
}
function changeColor () {
    document.getElementById("tab-1").style.backgroundColor = "brown";
    document.getElementById("tab-2").style.backgroundColor = "red";
    document.getElementById("tab-3").style.backgroundColor = "red";
    document.getElementsByClassName("infomation")[0].style.display = "inline-block";
    document.getElementsByClassName("education")[0].style.display = "none";
    document.getElementsByClassName("hobby")[0].style.display = "none";
}