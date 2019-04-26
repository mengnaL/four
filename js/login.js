window.onload = function(){
	$webfont.load(".right .r_a", "5ee843433f8c45f7a6e479d3de119f78", "HappyZcool");
	$webfont.load(".chande_t", "1cbfe97423f54f5f83341a7391b60876", "HappyZcool-2016");
	$webfont.load(".r_b", "1cbfe97423f54f5f83341a7391b60876", "HappyZcool-2016");
	$webfont.load(".r_c", "1cbfe97423f54f5f83341a7391b60876", "HappyZcool-2016");
	$webfont.load(".r_l", "1cbfe97423f54f5f83341a7391b60876", "HappyZcool-2016");
	$webfont.load(".r_r", "1cbfe97423f54f5f83341a7391b60876", "HappyZcool-2016");

    $webfont.draw();

    $(".r_r").click(function(){
    	$('.r_c').show();
    })
    $(".r_l").click(function(){
    	$('.r_c').hide();
    })
}