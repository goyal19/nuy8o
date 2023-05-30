function setup(){
   

    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,500)
    canvas.position(700,100);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is initialized")
}

function gotposes(results){
    if(results.length> 0){
        console.log(results);
    }
}

function draw(){
    background("turquoise")
}
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;

leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
difference=floor(leftwristx-rightwristx)  
}
}

function draw(){
background("turquoise")

fill("#0eebe3");
stroke("#0e3eeb");
square(nosex,nosey,difference)
}


