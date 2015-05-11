var images4 = new Array ('./img/portfolio/small/6.jpg', './img/portfolio/small/6-1.jpg');
var index4 = 1;
 
function rotateImage4()
{
  $('#project6').fadeOut('fast', function()
  {
    $(this).attr('src', images4[index4]);
 
    $(this).fadeIn('fast', function()
    {
      if (index4 == images4.length-1)
      {
        index4 = 0;
      }
      else
      {
        index4++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage4, 5000);
});