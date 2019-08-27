import $ from "jquery";
export  default ()=> {
    $(document).ready(function() {
        console.log("working");
        // Gets the video src from the data-src on each button
        
        var $videoSrc;  
        $('.vid-modal__btn').click(function() {
            $videoSrc = $(this).data( "src" );
        });
        console.log($videoSrc);
        
          
          
        // when the modal is opened autoplay it  
        $('#exampleModal').on('shown.bs.modal', function (e) {
            
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $(".vid-modal__iframe").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        })
          
        
        
        // stop playing the youtube video when I close the modal
        $('#exampleModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $(".vid-modal__iframe").attr('src',$videoSrc);  
        }) 
            
            
        
        
          
          
        // document ready  
        });
        
}

