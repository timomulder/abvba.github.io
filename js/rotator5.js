var images5 = new Array ('./img/portfolio/small/0.jpg', './img/portfolio/small/0-1.jpg');
var index5 = 1;
 
function rotateImage5()
{
  $('#project0').fadeOut('fast', function()
  {
    $(this).attr('src', images5[index5]);
 
    $(this).fadeIn('fast', function()
    {
      if (index5 == images5.length-1)
      {
        index5 = 0;
      }
      else
      {
        index5++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage5, 5000);
});