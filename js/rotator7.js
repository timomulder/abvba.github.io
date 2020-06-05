var images7 = new Array ('./img/portfolio/small/ws4-10.png', './img/portfolio/small/Willemsstraat4-10.jpg');
var index7 = 1;
 
function rotateImage7()
{
  $('#ws410').fadeOut('fast', function()
  {
    $(this).attr('src', images7[index7]);
 
    $(this).fadeIn('fast', function()
    {
      if (index7 == images7.length-1)
      {
        index7 = 0;
      }
      else
      {
        index7++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage7, 5000);
});