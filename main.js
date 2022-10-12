// https://teachablemachine.withgoogle.com/models/1H5cD5P6S/

Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 100
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = "<img src='"+data_uri+"' id='resultantimg'>" ;
    });
}

console.log("ml5 version ",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1H5cD5P6S/",modelloaded);

function modelloaded(){
    console.log("Model loaded");
}
function check(){
    img = document.getElementById("resultantimg");
    classifier.classify(img,gotResult)
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}