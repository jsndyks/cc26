$(function()
{
	if (typeof prettyPrint != 'undefined') prettyPrint();

	if (window.devicePixelRatio >= 1.5)
	{
		var images = $("img.hires");
		for (var i = 0; i < images.length; i++)
		{
			var imageType = images[i].src.substr(-4);
			var imageName = images[i].src.substr(0, images[i].src.length - 4);
			imageName += "@2x" + imageType;
			images[i].src = imageName;
		}
	}

	$('.link-show-code').click(function(e)
	{
		e.preventDefault();

		var parent = $(this).parent();
		var el = parent.next('.prettyprint');
		if ($(el).css('display') == 'none')
		{
			$(el).show();
			$(parent).addClass('pause');
			$(this).html('Hide code').addClass('link-show-code-active');
		}
		else
		{
			$(el).hide();
			$(parent).removeClass('pause');
			$(this).html('Show code').removeClass('link-show-code-active');
		}

		return false;
	});
});