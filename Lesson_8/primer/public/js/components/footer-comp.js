Vue.component('FooterComp', {
    template: `
        <footer class="footer">
            <section class="footer__top">
                <div class="footer__top__container container">
                    <div class="footer__top__container__quote">
                        <img src="img/quote-portrait.png" alt="quote-author">
                        <p>"Я постоянно покупаю книги именно в этом магазине, <span>и у меня уже действительно БОЛЬШИЕ скидки на товары!"</span></p>
                    </div>
                    <div class="footer__top__container__subscribe">
                        <div class="footer__top__container__subscribe__headline">
                            <h3>Подпишитесь на новости<br><span>чтобы быть в курсе всех новинок и скидок!</span></h3>
                        </div>
                        <div class="footer__top__container__subscribe__form">
                            <form action="#">
                                <input class="footer__top__container__subscribe__form__email" type="email" placeholder="Введите свой Email">
                                <input class="footer__top__container__subscribe__form__submit" type="submit" value="Подписаться">
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer__bottom">
                <div class="footer__bottom__container container">
                    <div class="footer__bottom__container__copyright">
                        <p>© 2021 Brand All Rights Reserved.</p>
                    </div>
                    <div class="footer__bottom__container__icons">
                        <div class="icon">
                            <a href="#"></a><i class="fab fa-facebook-f"></i></a>
                        </div>
                        <div class="icon">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="icon">
                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        </div>
                        <div class="icon">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    `
});