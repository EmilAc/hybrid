$(document).ready(function () {
    showText('home');
    $('#home').click(function () {
        showText('home');
    });
    $('#about').click(function () {
        // window.history.pushState("hhhhhhhhhhh","", "http://192.168.56.101:8080/hybrid/index.html");
        showText('about');
    });
    $('#services').click(function () {
        // window.history.pushState("hhhhhhhhhhh","", "http://192.168.56.101:8080/hybrid/index.html");
        showText('services');
    });
    $('#contact').click(function () {
        showText('contact');
    });
    function showText(file) {
        $.get('content/' + file + '.txt', function (data) {
            $('#content').text(data);
        });
    }
});
function processAjaxData(response, urlPath){
    document.getElementById("home").innerHTML = response.html;
    document.title = response.pageTitle;
    window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
// function home(){
    // document.getElementById("navContent").innerHTML = response.html;
    // document.title = response.pageTitle;
    // let stateObj = {
    //     foo: "index",
    // }
    // window.history.pushState("hhhhhhhhhhh","", "hoome");
// }
// function about(){
    // document.getElementById("navContent").innerHTML = response.html;
    // document.title = response.pageTitle;
    // let stateObj = {
    //     foo: "index",
    // }
    // window.history.pushState("aa","about", "http://192.168.56.101:8080/hybrid/index.html");
}
