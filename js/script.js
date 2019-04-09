jQuery(document).ready(function($){

	/*ГАЛЕРЕЯ*/
    var btn_number = $(".btn__numder"),
        modal_number = $("#modal-number"),
        number_close = $("#number-close"),
        btn_book = $(".btn__book"),
        modal_book = $("#modal-book"),
        book_close = $("#book-close"),
        btn_brelok = $(".btn__brelok"),
        modal_brelok = $("#modal-brelok"),
        brelok_close = $("#brelok-close"),
        btn_key = $(".btn__key"),
        modal_key = $("#modal-key"),
        key_close = $("#key-close");

        function gllr(btn_open, mdl, btn_exit){
            btn_open.click(function(){
                mdl.slideToggle(500);
            });
            btn_exit.click(function(){
                mdl.slideToggle(500);
            });
        };

        gllr(btn_number, modal_number, number_close);
        gllr(btn_book, modal_book, book_close);
        gllr(btn_brelok, modal_brelok, brelok_close);
        gllr(btn_key, modal_key, key_close);

	/*ГАЛЕРЕЯ*/


});