<?php
/**
 * The template for displaying the footer
 *
 * @package Aurora_Tech
 */
?>

    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="footer-content">
            <div class="container-custom">
                <div class="footer-grid">
                    <!-- Company Info -->
                    <div class="footer-info">
                        <div class="footer-logo">
                            <?php
                            if (has_custom_logo()) {
                                the_custom_logo();
                            } else {
                                ?>
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="<?php bloginfo('name'); ?>" class="logo-footer">
                                <?php
                            }
                            ?>
                        </div>
                        
                        <p class="footer-description">
                            L'intelligence au cœur de chaque création. Propulsons la transformation digitale de l'Afrique grâce à des solutions IA innovantes.
                        </p>
                        
                        <div class="footer-contact">
                            <div class="footer-contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <span><?php echo esc_html(get_theme_mod('aurora_address', 'Cocody Riviera 2, Abidjan')); ?></span>
                            </div>
                            <div class="footer-contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                <span><?php echo esc_html(get_theme_mod('aurora_phone', '+225 06 65 86 87 86')); ?></span>
                            </div>
                            <div class="footer-contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                <span><?php echo esc_html(get_theme_mod('aurora_email', 'auroratech2222@gmail.com')); ?></span>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation Links -->
                    <div class="footer-column">
                        <h4><?php esc_html_e('Navigation', 'aurora-tech'); ?></h4>
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'menu_class'     => 'footer-menu',
                            'container'      => false,
                            'fallback_cb'    => 'aurora_tech_footer_menu_fallback',
                        ));
                        ?>
                    </div>

                    <!-- Products -->
                    <div class="footer-column">
                        <h4><?php esc_html_e('Nos Produits', 'aurora-tech'); ?></h4>
                        <ul class="footer-menu">
                            <li><a href="#weili">WEÏLI</a></li>
                            <li><a href="#fileced">FileCed</a></li>
                            <li><a href="#aurora-share">Aurora Share</a></li>
                            <li><a href="#byan">Byan</a></li>
                        </ul>
                    </div>

                    <!-- Services -->
                    <div class="footer-column">
                        <h4><?php esc_html_e('Nos Services', 'aurora-tech'); ?></h4>
                        <ul class="footer-menu">
                            <li><a href="#sites-web">Sites Web</a></li>
                            <li><a href="#apps-mobile">Apps Mobile</a></li>
                            <li><a href="#design">Design Graphique</a></li>
                            <li><a href="#ia">IA & Automatisation</a></li>
                        </ul>
                    </div>

                    <!-- Widget Area -->
                    <?php if (is_active_sidebar('footer-1')) : ?>
                        <div class="footer-widget">
                            <?php dynamic_sidebar('footer-1'); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container-custom">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>&copy; <?php echo date('Y'); ?> Aurora Tech. <?php esc_html_e('Tous droits réservés. Fondé par Kouassi Cédric Junior.', 'aurora-tech'); ?></p>
                    </div>

                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

<?php
/**
 * Footer menu fallback
 */
function aurora_tech_footer_menu_fallback() {
    ?>
    <ul class="footer-menu">
        <li><a href="<?php echo esc_url(home_url('/')); ?>#accueil"><?php esc_html_e('Accueil', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#apropos"><?php esc_html_e('À Propos', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#services"><?php esc_html_e('Services', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#produits"><?php esc_html_e('Produits', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#contact"><?php esc_html_e('Contact', 'aurora-tech'); ?></a></li>
    </ul>
    <?php
}
?>