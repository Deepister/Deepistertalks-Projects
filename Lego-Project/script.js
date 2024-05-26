var minifigure = document.querySelector('.minifigure');
var faces = document.querySelector('.faces');
var upperBody = document.querySelector('.upper-body');
var lowerBody = document.querySelector('.lower-body');
var explode = document.querySelector('.explode');
var randomize = document.querySelector('.randomize');
var expressionRangeInput = document.querySelector('.expression-range');
var colorRangeInput = document.querySelectorAll('.color-range');
var upperHue = document.getElementById('upper-hue');
var upperSaturation = document.getElementById('upper-saturation');
var upperLightness = document.getElementById('upper-lightness');
var lowerHue = document.getElementById('lower-hue');
var lowerSaturation = document.getElementById('lower-saturation');
var lowerLightness = document.getElementById('lower-lightness');

explode.addEventListener('click', explodeMinifigure);
randomize.addEventListener('click', randomizeInputs);
expressionRangeInput.addEventListener('input', setExpression);

for (var i = 0; i < colorRangeInput.length; i++) {
  colorRangeInput[i].addEventListener('input', setColors);
}

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function explodeMinifigure() {
  minifigure.classList.toggle('explode');
  
  if (minifigure.classList.contains('explode')) {
    explode.innerHTML = 'Rebuild';
  } else {
    explode.innerHTML = 'Explode';
  }
};

function randomizeInputs() {
  var randomExpression = getRandomNum(0, 5);
  var randomUpperHue = getRandomNum(0, 360);
  var randomUpperSaturation = getRandomNum(0, 100);
  var randomUpperLightness = getRandomNum(0, 90);
  var randomLowerHue = getRandomNum(0, 360);
  var randomLowerSaturation = getRandomNum(0, 100);
  var randomLowerLightness = getRandomNum(0, 90);
  
  expressionRangeInput.value = randomExpression * 100;
  upperHue.value = randomUpperHue;
  upperSaturation.value = randomUpperSaturation;
  upperLightness.value = randomUpperLightness;
  lowerHue.value = randomLowerHue;
  lowerSaturation.value = randomLowerSaturation;
  lowerLightness.value = randomLowerLightness;
  
  setExpression();
  setColors();
};

function setExpression() {
  var expressionVal = parseInt(expressionRangeInput.value);
  faces.style.transform = 'translateX(-' + expressionVal + '%)';
};

function setColors() {
  var upperHueVal = parseInt(upperHue.value);
  var upperSaturationVal = parseInt(upperSaturation.value);
  var upperLightnessVal = parseInt(upperLightness.value);
  var lowerHueVal = parseInt(lowerHue.value);
  var lowerSaturationVal = parseInt(lowerSaturation.value);
  var lowerLightnessVal = parseInt(lowerLightness.value);
  
  upperBody.style.color = 'hsl(' + upperHueVal + ',' + upperSaturationVal + '%,' + upperLightnessVal + '%)';
  lowerBody.style.color = 'hsl(' + lowerHueVal + ',' + lowerSaturationVal + '%,' + lowerLightnessVal + '%)';
};