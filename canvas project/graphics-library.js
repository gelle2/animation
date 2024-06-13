//GLOBAL VARIABLES
let frame = 0;
let allBranches = [];
let branchColour = "rgba(77, 38, 0, 1)";
let allFlowers = [];
let flowerColour = "rgba(255, 183,	197, 0.85)";
let flowerCenter = [];
let flowersCenterColour = "rgba(255, 195, 185, 1)";
let fallFlowers = [];
let fallFlowersColour = "rgba(255, 183,	197, 0.85)";
let darkFlowers = [];
let darkFlowersColour = "rgba(195, 130, 158, 1)"

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;

requestAnimationFrame(draw);

function draw() {
  frame++;
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  requestAnimationFrame(draw);

  //FUNCTIONS
  function drawBranches(allBranches) {
    for (let i = 0; i < branch.length; i++) {
      ctx.fillStyle = branchColour;
      ctx.beginPath();
      ctx.moveTo(branch[i][0], branch[i][1]);
      ctx.lineTo(branch[i][0], branch[i][1]);
      ctx.lineTo(branch[i][0], branch[i][1]);
      ctx.lineTo(branch[i][2], branch[i][3]);
      ctx.lineTo(branch[i][4], branch[i][5]);
      ctx.fill();
    }
  }
  function drawFlowers(allFlowers) {
    for (let i = 0; i < flower.length; i++) {
      ctx.fillStyle = flowerColour;
      ctx.beginPath();
      ctx.arc(flower[i][0], flower[i][1], 10, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  function drawDarkFlowers(allDarkFlowers) {
    for (let i = 0; i < darkFlowers.length; i++) {
      ctx.fillStyle = darkFlowersColour;
      ctx.beginPath();
      ctx.arc(darkFlowers[i][0], darkFlowers[i][1], 10, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  function drawFallFlowers(allFallFlowers) {
    for (let i = 0; i < fallFlowers.length; i++) {
      ctx.fillStyle = fallFlowersColour;
      ctx.beginPath();
      ctx.arc(fallFlowers[i][0], fallFlowers[i][1], 10, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  function moveFlowers(allDarkFlowers) {
    for (let i = 0; i < darkFlowers.length; i++) {
      ctx.fillStyle = darkFlowersColour;
      ctx.beginPath();
      ctx.arc(darkFlowers[i][0], darkFlowers[i][1], 10, 0, 2 * Math.PI);
      i += 5;      
      ctx.fill();
    }
  }

  function drawFlowersCenter(allFlowersCenter) {
    for (let i = 0; i < flowerCenter.length; i++) {
      ctx.fillStyle = flowersCenterColour;
      ctx.beginPath();
      ctx.arc(flowerCenter[i][0], flowerCenter[i][1], 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  //BACKGROUND
  ctx.fillStyle = "rgba(137, 196, 244, 0.8)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = " #136d15";
  ctx.beginPath();
  ctx.arc(180, 900, 600, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "#138510";
  ctx.beginPath();
  ctx.arc(750, 950, 600, 0, 2 * Math.PI);
  ctx.fill();
  //SUN
  ctx.fillStyle = "#f9d71c";
  ctx.beginPath();
  ctx.arc(190, 160, 80, 0, 2 * Math.PI);
  ctx.fill();

  //TREE
  ctx.fillStyle = "rgba(77, 38, 0, 1)";
  ctx.fillRect(480, 350, 70, 603);
  ctx.fillStyle = "#FEFCD7";

  ctx.beginPath();
  ctx.fillStyle = "rgba(77, 38, 0, 1)";
  ctx.moveTo(535, 603);
  ctx.lineTo(535, 603);
  ctx.lineTo(535, 603);
  ctx.lineTo(585, 603);
  ctx.lineTo(540, 570);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "rgba(77, 38, 0, 1)";
  ctx.moveTo(450, 603);
  ctx.lineTo(450, 603);
  ctx.lineTo(450, 603);
  ctx.lineTo(485, 603);
  ctx.lineTo(500, 570);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "rgba(77, 38, 0, 1)";
  ctx.moveTo(540, 540);
  ctx.lineTo(540, 540);
  ctx.lineTo(540, 540);
  ctx.lineTo(570, 603);
  ctx.lineTo(500, 570);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "rgba(77, 38, 0, 1)";
  ctx.moveTo(505, 540);
  ctx.lineTo(505, 540);
  ctx.lineTo(505, 540);
  ctx.lineTo(472, 603);
  ctx.lineTo(470, 575);
  ctx.fill();
  //-------------------------------------------------
  //BRANCHES
  let branch = [
    [495, 380, 400, 322, 505, 360],
    [444, 340, 340, 350, 450, 353],
    [545, 375, 640, 320, 545, 365],
    [600, 343, 650, 353, 592, 347],
    [530, 360, 578, 260, 548, 360],
    [560, 320, 685, 293, 555, 333],
    [500, 360, 407, 188, 518, 355],
    [490, 320, 561, 213, 476, 298],
    [477, 287, 399, 270, 452, 272],
    [511, 270, 503, 198, 528, 258],
  ];
  //FLOWERS
  //BACKFLOWERS
  let darkFlowers = [
  ]
  //BASE FLOWER
  let flower = [
  [460,360],
  [440,355],
  [415,353],
  [396,358],
  [370,348],
  [350,352],
  [480,369],
  [486,365],
  [488,348],
  [471,342],
  [452,340],
  [431,331],
  [403,341],
  [385,338],
  [357,336],
  [381,360],
  [365,357],
  [414,333],
  [476,325],
  [492,332],
  [489,313],
  [463,327],
  [470,310],
  [472,292],
  [487,283],
  [502,275],
  [458,285],
  [455,286],
  [438,280],
  [421,277],
  [458,302],
  [460,272],
  [451,250],
  [433,231],
  [416,201],
  [503,296],
  [433,291],
  [430,363],
  [470,376],
  [451,370],
  [442,325],
  [431,343],
  [415,368],
  [374,329],
  [356,366],
  [390,373],
  [504,360],
  [501,368],
  [522,348],
  [537,361],
  [523,370],
  [555,372],
  [572,366],
  [570,380],
  [541,379],
  [513,382],
  [494,385],
  [437,375],
  [386,326],
  [448,312],
  [431,313],
  [395,323],
  [418,288],
  [507,335],
  [518,285],
  [525,270],
  [478,268],
  [466,247],
  [446,231],
  [420,202],
  [445,267],
  [513,318],
  [556,355],
  [557,339],
  [541,337],
  [518,303],
  [511,256],
  [526,303],
  [548,318],
  [561,305],
  [573,289],
  [572,273],
  [588,317],
  [587,348],
  [574,319],
  [608,349],
  [625,353],
  [635,346],
  [619,337],
  [614,316],
  [601,362],
  [533,256],
  [527,231],
  [511,223],
  [528,215],
  [494,258],
  [484,249],
  [529,328],
  [540,325],
  [539,312],
  [621,252],
  [637,259],
  [649,277],
  [661,296],
  [641,296],
  [632,280],


]
 
  //FLOWER CENTER
  let flowerCenter = [[460,360],
  [440,355],
  [415,353],
  [396,358],
  [370,348],
  [350,352],
  [480,369],
  [486,365],
  [488,348],
  [471,342],
  [452,340],
  [431,331],
  [403,341],
  [385,338],
  [357,336],
  [381,360],
  [365,357],
  [414,333],
  [476,325],
  [492,332],
  [489,313],
  [463,327],
  [470,310],
  [472,292],
  [487,283],
  [502,275],
  [458,285],
  [455,286],
  [438,280],
  [421,277],
  [458,302],
  [460,272],
  [451,250],
  [433,231],
  [416,201],
  [503,296],
  [433,291],
  [430,363],
  [470,376],
  [451,370],
  [442,325],
  [431,343],
  [415,368],
  [374,329],
  [356,366],
  [390,373],
  [504,360],
  [501,368],
  [522,348],
  [537,361],
  [523,370],
  [555,372],
  [572,366],
  [570,380],
  [541,379],
  [513,382],
  [494,385],
  [437,375],
  [386,326],
  [448,312],
  [431,313],
  [395,323],
  [418,288],
  [507,335],
  [518,285],
  [525,270],
  [478,268],
  [466,247],
  [446,231],
  [420,202],
  [445,267],
  [513,318],
  [556,355],
  [557,339],
  [541,337],
  [518,303],
  [511,256],
  [526,303],
  [548,318],
  [561,305],
  [573,289],
  [572,273],
  [588,317],
  [587,348],
  [574,319],
  [608,349],
  [625,353],
  [635,346],
  [619,337],
  [614,316],
  [601,362],
  [533,256],
  [527,231],
  [511,223],
  [528,215],
  [494,258],
  [484,249],
  [529,328],
  [540,325],
  [539,312],
  [621,252],
  [637,259],
  [649,277],
  [661,296],
  [641,296],
  [632,280],];

  let fallFlowers = [[460,360],
  [440,355],
  [415,353],
  [396,358],
  [370,348],
  [350,352],
  [480,369],
  [486,365],
  [488,348],
  [471,342],
  [452,340],
  [431,331],
  [403,341],
  [385,338],
  [357,336],
  [381,360],
  [365,357],
  [414,333],
  [476,325],
  [492,332],
  [489,313],
  [463,327],
  [470,310],
  [472,292],
  [487,283],
  [502,275],
  [458,285],
  [455,286],
  [438,280],
  [421,277],
  [458,302],
  [460,272],
  [451,250],
  [433,231],
  [416,201],
  [503,296],
  [433,291],
  [430,363],
  [470,376],
  [451,370],
  [442,325],
  [431,343],
  [415,368],
  [374,329],
  [356,366],
  [390,373],
  [504,360],
  [501,368],
  [522,348],
  [537,361],
  [523,370],
  [555,372],
  [572,366],
  [570,380],
  [541,379],
  [513,382],
  [494,385],
  [437,375],
  [386,326],
  [448,312],
  [431,313],
  [395,323],
  [418,288],
  [507,335],
  [518,285],
  [525,270],
  [478,268],
  [466,247],
  [446,231],
  [420,202],
  [445,267],
  [513,318],
  [556,355],
  [557,339],
  [541,337],
  [518,303],
  [511,256],
  [526,303],
  [548,318],
  [561,305],
  [573,289],
  [572,273],
  [588,317],
  [587,348],
  [574,319],
  [608,349],
  [625,353],
  [635,346],
  [619,337],
  [614,316],
  [601,362],
  [533,256],
  [527,231],
  [511,223],
  [528,215],
  [494,258],
  [484,249],
  [529,328],
  [540,325],
  [539,312],
  [621,252],
  [637,259],
  [649,277],
  [661,296],
  [641,296],
  [632,280],];



  //CALLING FUNCTIONS
  drawBranches(branch);
  drawDarkFlowers(darkFlowers);
  drawFlowers(flower);
  drawFlowersCenter(flowerCenter);
  //moveFlowers(darkFlowers); //FIX LATER
  
}
