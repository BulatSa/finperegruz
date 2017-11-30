<!-- Модальные окна -->
<div class="modals-sec">

	<div id="modal-order" class="modal">
		<p>Оставить заявку</p>
		<p>Оставьте заявку и наш администратор свяжется с&nbsp;Вами в течение 10 минут</p>
		<form class="ajax-form">
			<input type="text" name="user_name" placeholder="Введите имя" data-label="Имя пользователя">
			<input type="tel" name="user_tel" data-label="Телефон" placeholder="Введите телефон*" data-req="true">
			<input type="email" name="user_email" placeholder="Введите e-mail*" data-label="Email" data-req="true">
			<input type="hidden" value="Новая заявка" name="form_subject">
			<button type="submit" class="btn">Отправить</button>
		</form>
	</div>

	<div id="modal-thanks" class="modal">
		<p>Спасибо за заявку!</p>
	</div>

</div>
<!-- Модальные окна -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/assets.js" type="text/javascript" ></script>
<script src="js/main.js" type="text/javascript" ></script>

	</body>
</html>
