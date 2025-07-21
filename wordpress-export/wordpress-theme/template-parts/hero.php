<?php
/**
 * Template part for displaying hero section
 *
 * @package Aurora_Tech
 */

$hero_bg = get_theme_mod('aurora_hero_bg');
$hero_title = get_theme_mod('aurora_hero_title', 'AURORA TECH');
$hero_subtitle = get_theme_mod('aurora_hero_subtitle', 'L\'intelligence au cœur de chaque création');
$hero_description = get_theme_mod('aurora_hero_description', 'Propulsons la transformation digitale de l\'Afrique grâce à des solutions IA innovantes.');
?>

<section id="accueil" class="hero-section" <?php if ($hero_bg) : ?>style="background-image: url('<?php echo esc_url(wp_get_attachment_image_url($hero_bg, 'aurora-hero')); ?>');"<?php endif; ?>>
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <div class="container-custom">
            <div class="hero-logo">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="<?php bloginfo('name'); ?>" class="logo-hero animate-zoom-pulse">
                    <?php
                }
                ?>
            </div>
            
            <h1 class="hero-title"><?php echo esc_html($hero_title); ?></h1>
            <p class="hero-subtitle"><?php echo esc_html($hero_subtitle); ?></p>
            
            <div class="hero-separator"></div>
            
            <p class="hero-description">
                <?php echo esc_html($hero_description); ?>
            </p>

            <div class="hero-buttons">
                <a href="#produits" class="btn btn-glass">
                    <?php esc_html_e('Découvrir Nos Solutions', 'aurora-tech'); ?>
                </a>
                <a href="#contact" class="btn btn-accent">
                    <?php esc_html_e('Nous Contacter', 'aurora-tech'); ?>
                </a>
            </div>
        </div>

        <div class="scroll-indicator">
            <div class="scroll-mouse">
                <div class="scroll-wheel"></div>
            </div>
        </div>
    </div>
</section>