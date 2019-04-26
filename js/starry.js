window.onload=function(){
	$webfont.load(".left_text1", "1cbfe97423f54f5f83341a7391b60876", "HappyZcool-2016");
	$webfont.load(".a_1", "1cbfe97423f54f5f83341a7391b60876", "HappyZcool-2016");
    $webfont.load(".left_text2", "32060f71c54e45c98a548f609b09ab1c", "WQYMicroHei");
    $webfont.draw();
    

    // 返回顶部
    $(function(){
         $('.left_li5').click(function(){
             $('html , body').animate({scrollTop: 0},'slow');
         });
     });

}
