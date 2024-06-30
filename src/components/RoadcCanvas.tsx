import { useEffect } from "react";

const RoadcCanvas = () => {
  const canvasMap = () => {
    var c: any = document.getElementsByClassName("myCanvas")[0];

    var ctx = c.getContext("2d");
    var i;
    var amplitude = 90;
    var width = c.width / 2;
    var height = c.height;
    var step = 1;
    var frequency = 0.5;

    ctx.beginPath();
    ctx.moveTo(95, 10);
    ctx.arc(85, 10, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "#ff4cb5";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(94, 190);
    ctx.arc(84, 190, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "#ff4cb5";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(195, 320);
    ctx.arc(185, 320, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "#ff4cb5";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(25, 520);
    ctx.arc(15, 520, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "#C4C4C4";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(195, 720);
    ctx.arc(185, 720, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "#C4C4C4";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(25, 920);
    ctx.arc(15, 920, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "#C4C4C4";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(165, 1040);
    ctx.arc(155, 1040, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "#C4C4C4";
    ctx.fill();

    ctx.beginPath();
    var cal: any = width / Math.PI / (frequency * 1);
    for (i = 8; i < 195; i += step) {
      var x = amplitude * Math.sin(i / cal);
      ctx.lineTo(width - x, i);
    }
    ctx.strokeStyle = "#ff4cb5";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    for (i = 195; i < 328; i += step) {
      ctx.lineTo(width - amplitude * Math.sin(i / cal), i);
    }
    ctx.strokeStyle = "#ff4cb5";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    for (i = 328; i < 512; i += step) {
      ctx.lineTo(width - amplitude * Math.sin(i / cal), i);
    }
    ctx.strokeStyle = "#C4C4C4";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    for (i = 528; i < 712; i += step) {
      ctx.lineTo(width - amplitude * Math.sin(i / cal), i);
    }
    ctx.strokeStyle = "#C4C4C4";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    for (i = 728; i < 912; i += step) {
      ctx.lineTo(width - amplitude * Math.sin(i / cal), i);
    }
    ctx.strokeStyle = "#C4C4C4";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    for (i = 928; i < 1035; i += step) {
      ctx.lineTo(width - amplitude * Math.sin(i / cal), i);
    }
    ctx.strokeStyle = "#C4C4C4";
    ctx.lineWidth = 3;
    ctx.stroke();
  };
  useEffect(() => {
    canvasMap();
  });

  return <canvas className="myCanvas" width="200" height="1120"></canvas>;
};
export default RoadcCanvas;
