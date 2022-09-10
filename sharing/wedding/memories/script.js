var scripts = document.getElementsByTagName("script"),
    src = scripts[scripts.length-1].src;
var folder = "images/";

$.ajax({
    url: folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
                $("#recipegrid").append(`<div class="col-4 box" onclick="window.open('`+val+`', '_blank')">
				<div class="imgHolder">
					<img src="loader.gif" data-echo="`+val+`" class="img-responsive cover">
					<div class="in-box w-100">
						<div class="super-box h-100 w-100 text-center d-flex justify-content-center align-items-center">
							<div class="box-text">
								<p class="font-weight-bold">View Original</p>
							</div>
						</div>
					</div>
				</div>

			</div>`);
            }
        });
    }
});
