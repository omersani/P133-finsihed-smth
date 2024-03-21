status = "";
objects = [];
book = "";

function preload()
{
  book = loadImage("book.jpg");

}

function setup()
{
  canvas = createCanvas(400, 400);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
  console.log('Model Is Loaded');
  status = true;
  objectDetector.detect(book, gotResult);
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
  image(book, 0, 0, 640, 420);
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
       rect(objects[i].x, objects[i].y, objects[1].width, objects[i].height);
     }
  }
}