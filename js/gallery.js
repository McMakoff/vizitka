jQuery(document).ready(function($){

	var li_0 = $('.img-list').eq(0).find("li"),
		links_0 = li_0.find('a'),
		li_1 = $('.img-list').eq(1).find("li"),
		links_1 = li_1.find('a'),
		li_2 = $('.img-list').eq(2).find("li"),
		links_2 = li_2.find('a'),
		li_3 = $('.img-list').eq(3).find("li"),
		links_3 = li_3.find('a'),
		lightbox_0 = $('.lightbox').eq(0),
		lightbox_1 = $('.lightbox').eq(1),
		lightbox_2 = $('.lightbox').eq(2),
		lightbox_3 = $('.lightbox').eq(3),
		overlay_0 = $('.overlay').eq(0),
		overlay_1 = $('.overlay').eq(1),
		overlay_2 = $('.overlay').eq(2),
		overlay_3 = $('.overlay').eq(3),
		prev_0 = $('.prev').eq(0),
		prev_1 = $('.prev').eq(1),
		prev_2 = $('.prev').eq(2),
		prev_3 = $('.prev').eq(3),
		next_0 = $('.next').eq(0),
		next_1 = $('.next').eq(1),
		next_2 = $('.next').eq(2),
		next_3 = $('.next').eq(3),
		closeBtn = $(".figure-close"),
		liIndex_0,
		liIndex_1,
		liIndex_2,
		liIndex_3,
		targetImg_0,
		targetImg_1,
		targetImg_2,
		targetImg_3;

	var imgs = [];
	var imgSrc = [
			"../img/gallery/number/n_1.jpeg",
			"../img/gallery/number/n_2.jpeg",
			"../img/gallery/number/bn_1.jpeg",
			"../img/gallery/number/n_3.jpeg",
			"../img/gallery/number/bn_2.jpeg",
			"../img/gallery/number/bn_3.jpeg",
			"../img/gallery/number/n_4.jpeg",
			"../img/gallery/number/n_5.jpeg",
			"../img/gallery/number/bn_4.jpeg",
			"../img/gallery/number/n_6.jpeg",
			"../img/gallery/number/n_7.jpeg",
			"../img/gallery/number/n_8.jpeg",
			"../img/gallery/number/n_9.jpeg",
			"../img/gallery/number/n_10.jpeg",
			"../img/gallery/number/n_11.jpeg",
			"../img/gallery/number/n_12.jpeg",
			"../img/gallery/number/n_13.jpeg",
			"../img/gallery/number/n_14.jpeg",
			"../img/gallery/books/bn_1.jpeg",
			"../img/gallery/books/bn_2.jpeg",
			"../img/gallery/books/bn_3.jpeg",
			"../img/gallery/books/bn_4.jpeg",
			"../img/gallery/books/book_1.jpeg",
			"../img/gallery/books/book_2.jpeg",
			"../img/gallery/books/book_3.jpeg",
			"../img/gallery/books/book_4.jpeg",
			"../img/gallery/books/book_5.jpeg",
			"../img/gallery/books/book_6.jpeg",
			"../img/gallery/books/book_7.jpeg",
			"../img/gallery/books/book_8.jpeg",
			"../img/gallery/books/book_9.jpeg",
			"../img/gallery/books/book_10.jpeg",
			"../img/gallery/books/book_11.jpeg",
			"../img/gallery/books/book_12.jpeg",
			"../img/gallery/books/book_13.jpeg",
			"../img/gallery/books/book_14.jpeg",
			"../img/gallery/brelki/br_1.jpeg",
			"../img/gallery/brelki/br_2.jpeg",
			"../img/gallery/brelki/br_3.jpeg",
			"../img/gallery/brelki/br_4.jpeg",
			"../img/gallery/brelki/br_5.jpeg",
			"../img/gallery/brelki/br_6.jpeg",
			"../img/gallery/brelki/br_7.jpeg",
			"../img/gallery/brelki/br_8.jpeg",
			"../img/gallery/brelki/br_9.jpeg"
		];
	for(var i = 0; i < imgSrc.length; i++){
		imgs[i] = new Image();
		imgs[i].src = imgSrc[i];
	}

	function my_gallery(li, links, lightbox, overlay, prev, next, liIndex, targetImg) {
		function replaceImg(src) {
			lightbox.find("img").attr('src', src);
		};

		function getHref(index) {
			return targetImg = li.eq(index).find('a').attr('href');
		};
		function exit(close) {
			close.click(function(){
				lightbox.fadeOut();
			});
		};

		links.click(function(event){
			event.preventDefault();
			liIndex = $(this).parent().index();
			targetImg = $(this).attr('href');
			replaceImg(targetImg);
			lightbox.fadeIn();
		});
			
		exit(overlay);
		exit(closeBtn);

		next.click(function(){
			if((liIndex + 1) < li.length) {
				targetImg = getHref(liIndex + 1);
				liIndex++;
			} else {
				targetImg = getHref(0);
				liIndex = 0;
			}
				replaceImg(targetImg);
		});

		prev.click(function(){
			if(liIndex > 0){
				targetImg = getHref(liIndex - 1);
				liIndex --;
			} else {
				targetImg = getHref(li.length - 1);
				liIndex = li.length - 1;
			}
			replaceImg(targetImg);
		});
	};

	my_gallery(li_0, links_0, lightbox_0, overlay_0, prev_0, next_0, liIndex_0, targetImg_0);
	my_gallery(li_1, links_1, lightbox_1, overlay_1, prev_1, next_1, liIndex_1, targetImg_1);
	my_gallery(li_2, links_2, lightbox_2, overlay_2, prev_2, next_2, liIndex_2, targetImg_2);
	my_gallery(li_3, links_3, lightbox_3, overlay_3, prev_3, next_3, liIndex_3, targetImg_3);

})