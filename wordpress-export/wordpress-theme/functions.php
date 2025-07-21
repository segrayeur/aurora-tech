<?php
/**
 * Aurora Tech functions and definitions
 *
 * @package Aurora_Tech
 */

// Prevent direct access
if (!defined('ABSPATH')) exit;

/**
 * Theme setup
 */
function aurora_tech_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Menu Principal', 'aurora-tech'),
        'footer' => esc_html__('Menu Footer', 'aurora-tech'),
    ));
    
    // Add image sizes
    add_image_size('aurora-hero', 1920, 1080, true);
    add_image_size('aurora-product', 400, 300, true);
    add_image_size('aurora-service', 300, 200, true);
}
add_action('after_setup_theme', 'aurora_tech_setup');

/**
 * Enqueue scripts and styles
 */
function aurora_tech_scripts() {
    // Styles
    wp_enqueue_style('aurora-tech-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Scripts
    wp_enqueue_script('aurora-tech-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('aurora-tech-script', 'aurora_ajax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('aurora_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'aurora_tech_scripts');

/**
 * Register widget areas
 */
function aurora_tech_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar Principal', 'aurora-tech'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Ajoutez des widgets ici.', 'aurora-tech'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget 1', 'aurora-tech'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Widget area footer 1', 'aurora-tech'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget 2', 'aurora-tech'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Widget area footer 2', 'aurora-tech'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget 3', 'aurora-tech'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Widget area footer 3', 'aurora-tech'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'aurora_tech_widgets_init');

/**
 * Custom Post Types
 */
function aurora_tech_custom_post_types() {
    // Produits Aurora
    register_post_type('aurora_products', array(
        'labels' => array(
            'name' => 'Produits Aurora',
            'singular_name' => 'Produit Aurora',
            'add_new' => 'Ajouter un produit',
            'add_new_item' => 'Ajouter un nouveau produit',
            'edit_item' => 'Modifier le produit',
            'new_item' => 'Nouveau produit',
            'view_item' => 'Voir le produit',
            'search_items' => 'Rechercher des produits',
            'not_found' => 'Aucun produit trouvé',
            'not_found_in_trash' => 'Aucun produit trouvé dans la corbeille'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-products',
        'show_in_rest' => true,
    ));
    
    // Services Aurora
    register_post_type('aurora_services', array(
        'labels' => array(
            'name' => 'Services Aurora',
            'singular_name' => 'Service Aurora',
            'add_new' => 'Ajouter un service',
            'add_new_item' => 'Ajouter un nouveau service',
            'edit_item' => 'Modifier le service',
            'new_item' => 'Nouveau service',
            'view_item' => 'Voir le service',
            'search_items' => 'Rechercher des services',
            'not_found' => 'Aucun service trouvé',
            'not_found_in_trash' => 'Aucun service trouvé dans la corbeille'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-tools',
        'show_in_rest' => true,
    ));
    
    // Témoignages
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Témoignages',
            'singular_name' => 'Témoignage',
            'add_new' => 'Ajouter un témoignage',
            'add_new_item' => 'Ajouter un nouveau témoignage',
            'edit_item' => 'Modifier le témoignage',
            'new_item' => 'Nouveau témoignage',
            'view_item' => 'Voir le témoignage',
            'search_items' => 'Rechercher des témoignages',
            'not_found' => 'Aucun témoignage trouvé',
            'not_found_in_trash' => 'Aucun témoignage trouvé dans la corbeille'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
        'show_in_rest' => true,
    ));
}
add_action('init', 'aurora_tech_custom_post_types');

/**
 * Custom fields for theme options
 */
function aurora_tech_customize_register($wp_customize) {
    // Section Hero
    $wp_customize->add_section('aurora_hero', array(
        'title' => __('Section Hero', 'aurora-tech'),
        'priority' => 30,
    ));
    
    // Hero Background Image
    $wp_customize->add_setting('aurora_hero_bg', array(
        'default' => '',
        'sanitize_callback' => 'absint',
    ));
    
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'aurora_hero_bg', array(
        'label' => __('Image de fond Hero', 'aurora-tech'),
        'section' => 'aurora_hero',
        'mime_type' => 'image',
    )));
    
    // Hero Title
    $wp_customize->add_setting('aurora_hero_title', array(
        'default' => 'AURORA TECH',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('aurora_hero_title', array(
        'label' => __('Titre Hero', 'aurora-tech'),
        'section' => 'aurora_hero',
        'type' => 'text',
    ));
    
    // Hero Subtitle
    $wp_customize->add_setting('aurora_hero_subtitle', array(
        'default' => 'L\'intelligence au cœur de chaque création',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('aurora_hero_subtitle', array(
        'label' => __('Sous-titre Hero', 'aurora-tech'),
        'section' => 'aurora_hero',
        'type' => 'text',
    ));
    
    // Hero Description
    $wp_customize->add_setting('aurora_hero_description', array(
        'default' => 'Propulsons la transformation digitale de l\'Afrique grâce à des solutions IA innovantes.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('aurora_hero_description', array(
        'label' => __('Description Hero', 'aurora-tech'),
        'section' => 'aurora_hero',
        'type' => 'textarea',
    ));
    
    // Section Contact
    $wp_customize->add_section('aurora_contact', array(
        'title' => __('Informations Contact', 'aurora-tech'),
        'priority' => 40,
    ));
    
    // Phone
    $wp_customize->add_setting('aurora_phone', array(
        'default' => '+225 06 65 86 87 86',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('aurora_phone', array(
        'label' => __('Téléphone', 'aurora-tech'),
        'section' => 'aurora_contact',
        'type' => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('aurora_email', array(
        'default' => 'auroratech2222@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('aurora_email', array(
        'label' => __('Email', 'aurora-tech'),
        'section' => 'aurora_contact',
        'type' => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('aurora_address', array(
        'default' => 'Abidjan, Cocody Riviera 2, Côte d\'Ivoire',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('aurora_address', array(
        'label' => __('Adresse', 'aurora-tech'),
        'section' => 'aurora_contact',
        'type' => 'text',
    ));
}
add_action('customize_register', 'aurora_tech_customize_register');

/**
 * AJAX handler for contact form
 */
function aurora_tech_contact_form_handler() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'aurora_nonce')) {
        wp_die('Erreur de sécurité');
    }
    
    // Sanitize form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $company = sanitize_text_field($_POST['company']);
    $phone = sanitize_text_field($_POST['phone']);
    $service = sanitize_text_field($_POST['service']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error('Tous les champs obligatoires doivent être remplis.');
        return;
    }
    
    if (!is_email($email)) {
        wp_send_json_error('Adresse email invalide.');
        return;
    }
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'Nouveau message de contact - Aurora Tech';
    $email_message = "Nouveau message de contact:\n\n";
    $email_message .= "Nom: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Entreprise: $company\n";
    $email_message .= "Téléphone: $phone\n";
    $email_message .= "Service: $service\n";
    $email_message .= "Message: $message\n";
    
    $headers = array('Content-Type: text/html; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');
    
    if (wp_mail($to, $subject, $email_message, $headers)) {
        wp_send_json_success('Message envoyé avec succès!');
    } else {
        wp_send_json_error('Erreur lors de l\'envoi du message.');
    }
}
add_action('wp_ajax_aurora_contact_form', 'aurora_tech_contact_form_handler');
add_action('wp_ajax_nopriv_aurora_contact_form', 'aurora_tech_contact_form_handler');

/**
 * Add custom body classes
 */
function aurora_tech_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'aurora-home';
    }
    
    return $classes;
}
add_filter('body_class', 'aurora_tech_body_classes');

/**
 * Custom excerpt length
 */
function aurora_tech_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'aurora_tech_excerpt_length');

/**
 * Custom excerpt more
 */
function aurora_tech_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'aurora_tech_excerpt_more');

/**
 * Security enhancements
 */
function aurora_tech_security() {
    // Remove WordPress version
    remove_action('wp_head', 'wp_generator');
    
    // Remove WLW manifest link
    remove_action('wp_head', 'wlwmanifest_link');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove shortlink
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'aurora_tech_security');

/**
 * Performance optimizations
 */
function aurora_tech_performance() {
    // Remove query strings from static resources
    if (!is_admin()) {
        add_filter('script_loader_src', 'aurora_tech_remove_query_strings', 15, 1);
        add_filter('style_loader_src', 'aurora_tech_remove_query_strings', 15, 1);
    }
}
add_action('init', 'aurora_tech_performance');

function aurora_tech_remove_query_strings($src) {
    $parts = explode('?ver', $src);
    return $parts[0];
}

/**
 * Add theme options page
 */
function aurora_tech_add_admin_page() {
    add_theme_page(
        'Options Aurora Tech',
        'Options Thème',
        'manage_options',
        'aurora-tech-options',
        'aurora_tech_admin_page'
    );
}
add_action('admin_menu', 'aurora_tech_add_admin_page');

function aurora_tech_admin_page() {
    ?>
    <div class="wrap">
        <h1>Options du Thème Aurora Tech</h1>
        <p>Utilisez le <a href="<?php echo admin_url('customize.php'); ?>">Customizer WordPress</a> pour personnaliser votre thème.</p>
        
        <h2>Informations sur le thème</h2>
        <table class="form-table">
            <tr>
                <th>Version</th>
                <td>1.0.0</td>
            </tr>
            <tr>
                <th>Auteur</th>
                <td>Kouassi Cédric Junior</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>Thème WordPress pour Aurora Tech - L'intelligence au cœur de chaque création</td>
            </tr>
        </table>
        
        <h2>Support</h2>
        <p>Pour toute question concernant ce thème, contactez-nous à : auroratech2222@gmail.com</p>
    </div>
    <?php
}