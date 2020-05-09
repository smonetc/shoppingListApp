$( document ).ready(function() {
// input new shopping item

	$("#js-shopping-list-form").on('submit', event => {
		event.preventDefault();

		let listItem = $("#shopping-list-entry").val();
		$("#shopping-list-entry").val(" ");
		$(".shopping-list").append(
			`<li>
			<span class="shopping-item">` + listItem + `</span>
			<div class="shopping-item-controls">
				<button class="shopping-item-toggle">
					<span class="button-label">`+ "check" +`</span>
				</button>
				<button class="shopping-item-delete">
					<span class="button-label">` + "delete" +	`</span>
				</button>
			</div>
		</li>`);
	
	});


	//buttons

	$(".shopping-list").on('click','.shopping-item-toggle', function(){
		$(this).closest(".shopping-item-controls").siblings(".shopping-item")
		.toggleClass('shopping-item__checked');
	});
	
	$(".shopping-list").on('click','.shopping-item-delete', function(){
		$(this).closest("li").remove();
	});

});