noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/YCm2N5Yq/mustache.png');
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(clown_nose, noseX-30, noseY-10, 60, 40);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftEarX = results[0].pose.leftEar.x;
        leftEarY = results[0].pose.leftEar.y;
        rightEarX = results[0].pose.rightEar.x;
        rightEarY = results[0].pose.rightEar.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}



