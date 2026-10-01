/* ==========================================================================
   ITAPETS - SCRIPTS JS PRINCIPAIS
   Componentes Utilizados:
   1. AOS (Animate On Scroll) - Efeito dos elementos surgindo ao rolar
   2. Swiper.js - Carrossel de produtos em destaque
   3. SweetAlert2 - Alerta estilizado no envio do formulário de contato
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. Animações de Surgimento ao Rolar a Página (AOS)
       ---------------------------------------------------------------------- */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,   // Duração da animação em milissegundos
            once: true,      // Executa a animação apenas uma vez ao rolar
            offset: 80       // Distância em px do elemento até a viewport para disparar
        });
    }

    /* ----------------------------------------------------------------------
       2. Carrossel de Produtos em Destaque (Swiper.js)
       ---------------------------------------------------------------------- */
    if (document.querySelector('.swiper-produtos')) {
        new Swiper('.swiper-produtos', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
    }

    /* ----------------------------------------------------------------------
       3. Alerta de Confirmação do Formulário de Contato (SweetAlert2)
       ---------------------------------------------------------------------- */
    const formContato = document.querySelector('#contato form');
    if (formContato && typeof Swal !== 'undefined') {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o recarregamento/envio imediato do formulário

            Swal.fire({
                title: 'Mensagem Enviada!',
                text: 'Agradecemos o seu contato. Nossa equipe responderá em breve!',
                icon: 'success',
                confirmButtonColor: '#2b6cb0',
                confirmButtonText: 'Entendido'
            }).then((result) => {
                if (result.isConfirmed) {
                    formContato.reset();
                }
            });
        });
    }

});