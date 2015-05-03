var imagez = new Array ('./img/portfolio/5-1.jpg', './img/portfolio/5-2.jpg');
var indexx = 1;
 
function rotateImage1()
{
  $('#project5').fadeOut('fast', function()
  {
    $(this).attr('src', imagez[indexx]);
 
    $(this).fadeIn('fast', function()
    {
      if (indexx == imagez.length-1)
      {
        indexx = 0;
      }
      else
      {
        indexx++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage1, 5000);
});