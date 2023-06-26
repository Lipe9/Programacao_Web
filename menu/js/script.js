<script src="js/jquery.js"></script>
<script>
    

    $(function() {
        
        $(".toggle").on("click", function() {
            if ($(".item").hasClass("active")) {
                $(".item").removeClass("active");
            } else {
                $(".item").addClass("active");
            }
        });

    });

</script>