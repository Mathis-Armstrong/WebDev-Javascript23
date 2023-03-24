let availHeight = document.getElementById("availHeight");
let availWidth = document.getElementById("availWidth");
let colorDepth = document.getElementById("colorDepth");
let height = document.getElementById("height");
let pixelDepth = document.getElementById("pixelDepth");
let width = document.getElementById("width");

availHeight.innerHTML = "Height of the screen in pixels, excluding parts of the browser such as the taskbar, menu, or scrollbars: "+screen.availHeight;
availWidth.innerHTML = "Width of the screen in pixels, excluding parts of the browser such as the taskbar, menu, or scrollbars: "+screen.availWidth;
colorDepth.innerHTML = "Bit depth of the screen's color palette: "+screen.colorDepth;
height.innerHTML = "Height of the screen in pixels: "+screen.height;
pixelDepth.innerHTML = "Color resolution in bits per pixel of the screen: "+screen.pixelDepth;
width.innerHTML = "Width of the screen in pixels: "+screen.width;