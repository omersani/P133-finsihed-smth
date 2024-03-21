status = "";
objects = [];
basketball = "";

function preload()
{
  basketball = loadImage("basketball.jpg");

}

function setup()
{
  canvas = createCanvas(400, 400);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Object Detected: ";
}

function modelLoaded()
{
  console.log('Model Is Loaded');
  status = true;
  objectDetector.detect(basketball, gotResult);
}

function gotResult(error, results)
{
  if(error)
  {
    console.error;
  }
  console.log(results);
  objects = results;
}

function draw()
{
  image(basketball, 0, 0, 640, 420);
  if(status != "")
  {
     for (i = 0; i < objects.length; i++)
     {
       document.getElementById("status").innerHTML = "Status : Objects Detected";

       fill("FF0000");
       percent = floor(objects[i].confidence * 100);
       text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
       noFill();
       stroke("FF0000");
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
     }
  }
}