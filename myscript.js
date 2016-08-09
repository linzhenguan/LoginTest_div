function show_cur_times(){

    //获取当前日期
    var date_time = new Date();

    //时
    var hours =date_time.getHours();
    //判断小于10，前面补0
    if(hours<10){
        hours="0"+hours;
    }
    //分
    var minutes =date_time.getMinutes();
    //判断小于10，前面补0
    if(minutes<10){
        minutes="0"+minutes;
    }
    //秒
    var seconds=date_time.getSeconds();
    //判断小于10，前面补0
    if(seconds<10){
        seconds="0"+seconds;
    }
    //拼接时分
    var date_str = "北京时间:"+hours+":"+minutes+":"+seconds;

    //显示在id为showtimes的容器里
    document.getElementById("showtimes").innerHTML= date_str;
}
function logincheck(){
    var userName=document.getElementById("login-name-input").value;
    var pwd=document.getElementById("password-input").value;
    //alert("pwd="+pwd+"username="+userName);
    if (pwd=="123456" && userName=="nbop")
    {
        document.getElementById("wrong").style.display="none";
        alert("登录成功");
    }
    else
    {
        document.getElementById("button-input").style.background="#c2c2c2";
        document.getElementById("wrong").style.display="block";
    }
}
function nameshow()
{
    document.getElementById("login-name-input").style.color = "black";
    document.getElementById("login-name-input").value = ""
}
function passwordshow()
{
    document.getElementById("password-input").style.color = "black";
    document.getElementById("password-input").value = "";
    document.getElementById("password-input").type = "password";
}
