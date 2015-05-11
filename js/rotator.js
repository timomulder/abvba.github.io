var images = new Array ('./img/portfolio/small/1-2.jpg', './img/portfolio/small/1-1.jpg');
var index = 1;
 
function rotateImage()
{
  $('#project1').fadeOut('fast', function()
  {
    $(this).attr('src', images[index]);
 
    $(this).fadeIn('fast', function()
    {
      if (index == images.length-1)
      {
        index = 0;
      }
      else
      {
        index++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage, 5000);
});