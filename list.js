<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
​
<h1>Lambda-Calculator</h1>
​
<p>Enter:</p>
​
<input id="numb">
​
<button type="button" onclick="myFunction()">提交</button>
​
<p id="demo"></p>
​
<script>
function myFunction() {
    var x, text;
​
    // 获取 id="numb" 的值
    x = document.getElementById("numb").value;
​
    // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "输入错误";
    } else {
        text = "输入正确";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>
