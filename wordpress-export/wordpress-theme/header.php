<?php
/**
 * The header for Aurora Tech theme
 *
 * @package Aurora_Tech
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Passer au contenu', 'aurora-tech'); ?></a>

    <header id="masthead" class="site-header">
        <div class="header-container">
            <div class="container-custom">
                <nav class="main-navigation" role="navigation">
                    <div class="nav-brand">
                        <?php
                        if (has_custom_logo()) {
                            the_custom_logo();
                        } else {
                            ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="<?php bloginfo('name'); ?>" class="logo">
                            </a>
                            <?php
                        }
                        ?>
                    </div>

                    <div class="nav-menu-container">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'nav-menu',
                            'container'      => false,
                            'fallback_cb'    => 'aurora_tech_default_menu',
                        ));
                        ?>
                    </div>

                    <div class="nav-cta">
                        <a href="#contact" class="btn btn-primary">
                            <?php esc_html_e('Démarrer un Projet', 'aurora-tech'); ?>
                        </a>
                    </div>

                    <button class="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <span class="sr-only"><?php esc_html_e('Menu', 'aurora-tech'); ?></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </nav>
            </div>
        </div>
    </header>

    <div id="content" class="site-content">

<?php
/**
 * Default menu fallback
 */
function aurora_tech_default_menu() {
    ?>
    <ul class="nav-menu">
        <li><a href="<?php echo esc_url(home_url('/')); ?>#accueil"><?php esc_html_e('Accueil', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#produits"><?php esc_html_e('Produits', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#apropos"><?php esc_html_e('À Propos', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#services"><?php esc_html_e('Services', 'aurora-tech'); ?></a></li>
        <li><a href="<?php echo esc_url(home_url('/')); ?>#contact"><?php esc_html_e('Contact', 'aurora-tech'); ?></a></li>
    </ul>
    <?php
}
?>