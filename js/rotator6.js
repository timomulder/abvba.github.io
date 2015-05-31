var images6 = new Array ('./img/portfolio/small/B98.png', './img/portfolio/small/B98-1.jpg');
var index6 = 1;
 
function rotateImage6()
{
  $('#B98').fadeOut('fast', function()
  {
    $(this).attr('src', images6[index6]);
 
    $(this).fadeIn('fast', function()
    {
      if (index6 == images6.length-1)
      {
        index6 = 0;
      }
      else
      {
        index6++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage6, 5000);
});