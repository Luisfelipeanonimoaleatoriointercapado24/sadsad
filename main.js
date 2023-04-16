<b class="name_of_objects">
Bolinha De Pular
<hr>
Caderno
<hr>
Relogio
<hr>
Caneta
<hr>
</b>

<label>Visualisaçao da webcam:</label>
<div id="camera"></div>
<br></br>
<div id="result"></div>
<br></br>
<button onclick="take_spashot();" class="btn btn-info">Capturar Imagem</button>
<br></br>
<button onclick="check();" class="btn btn-info">Identificar Imagem</button>
<br></br>

<p></p>
Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90,
});
 camera = document.getElementById ("camera");
 Webcam.attach( '#camera' );

 function take_snapshot()
 {
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
 });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageclassifier('',modelLoaded)

function modelLoaded()
{
    console.log('Model Loaded!');
}


function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error){
        console.error(error)
    }else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label ;
        document.getElementById("result_object_accuracy").innerHTML =  results[0].confidence.toFixed(3);
    }
