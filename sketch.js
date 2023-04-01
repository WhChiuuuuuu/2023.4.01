let points = [[1,-3],[5,-4],[4,-3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3]] 

function setup() {
  createCanvas(windowWidth, windowHeight);  { //設定一個畫布，寬為整個視窗的寬度，高度為整個視窗的高度

  }
 //把points內的值*25
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 25;
    }
  }
}


function draw() {
  background(255);{
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  textSize(30)  //文字大小
  fill("#e5989b");  //設定顏色
  noStroke()
  text("#MapleLeaf",-400,0)  //顯示文字
  scale(1, -1);  //將x軸、y軸上下翻轉
  stroke("#9d0208")
  strokeWeight(7)

  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);}
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
  }
 }


 
