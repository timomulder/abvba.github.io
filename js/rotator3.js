var images3 = new Array ('./img/portfolio/small/4.jpg', './img/portfolio/small/4-1.jpg');
var index3 = 1;
 
function rotateImage3()
{
  $('#project4').fadeOut('fast', function()
  {
    $(this).attr('src', images3[index3]);
 
    $(this).fadeIn('fast', function()
    {
      if (index3 == images3.length-1)
      {
        index3 = 0;
      }
      else
      {
        index3++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage3, 5000);
});