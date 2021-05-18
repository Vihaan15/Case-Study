





console.log('ml5 version:' , ml5.version);

classifier = ml5.imageClassifier('MobileNet' , modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

