<?php
/**
 * Template part for displaying products section
 *
 * @package Aurora_Tech
 */

$products = array(
    array(
        'name' => 'WEÏLI',
        'description' => 'La plateforme de vente en ligne gratuite',
        'icon' => 'bar-chart',
        'color' => 'blue-gradient'
    ),
    array(
        'name' => 'FileCed',
        'description' => 'Stockage cloud optimisé par IA',
        'icon' => 'folder',
        'color' => 'green-gradient'
    ),
    array(
        'name' => 'Aurora Share',
        'description' => 'Le partage à la vitesse de l\'intelligence',
        'icon' => 'share',
        'color' => 'orange-gradient'
    ),
    array(
        'name' => 'Byan',
        'description' => 'Booste et création digitale',
        'icon' => 'bot',
        'color' => 'purple-gradient'
    )
);

// Get custom products from WordPress if they exist
$custom_products = get_posts(array(
    'post_type' => 'aurora_products',
    'posts_per_page' => 4,
    'post_status' => 'publish'
));

if (!empty($custom_products)) {
    $products = array();
    foreach ($custom_products as $product) {
        $products[] = array(
            'name' => $product->post_title,
            'description' => $product->post_excerpt ?: wp_trim_words($product->post_content, 15),
            'icon' => get_post_meta($product->ID, 'product_icon', true) ?: 'star',
            'color' => get_post_meta($product->ID, 'product_color', true) ?: 'blue-gradient'
        );
    }
}
?>

<section id="produits" class="section-padding products-section">
    <div class="container-custom">
        <div class="text-center section-header">
            <h2 class="section-title gradient-text">
                <?php esc_html_e('Nos Produits Phares', 'aurora-tech'); ?>
            </h2>
            <p class="section-subtitle">
                <?php esc_html_e('Découvrez nos solutions intelligentes conçues pour booster votre digitalisation', 'aurora-tech'); ?>
            </p>
        </div>

        <div class="products-grid">
            <?php foreach ($products as $product) : ?>
                <div class="card product-card">
                    <div class="product-icon <?php echo esc_attr($product['color']); ?>">
                        <?php echo aurora_tech_get_icon($product['icon']); ?>
                    </div>
                    <h3 class="product-title"><?php echo esc_html($product['name']); ?></h3>
                    <p class="product-description"><?php echo esc_html($product['description']); ?></p>
                    <a href="#contact" class="btn btn-outline">
                        <?php esc_html_e('Découvrir', 'aurora-tech'); ?>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="products-cta">
            <div class="cta-box">
                <h3 class="cta-title gradient-text">
                    "<?php esc_html_e('Chaque produit naît de notre ADN : l\'intelligence au cœur de chaque création.', 'aurora-tech'); ?>"
                </h3>
                <p class="cta-description">
                    <?php esc_html_e('Aurora Tech est une entreprise ivoirienne spécialisée dans le développement de solutions digitales intelligentes. Fondée par Kouassi Cédric Junior, nous combinons expertise technique et innovation pour répondre aux défis de la digitalisation en Afrique.', 'aurora-tech'); ?>
                </p>
                <a href="#services" class="btn btn-hero">
                    <?php esc_html_e('Voir Tous Nos Produits', 'aurora-tech'); ?>
                </a>
            </div>
        </div>
    </div>
</section>

<?php
/**
 * Helper function to get SVG icons
 */
function aurora_tech_get_icon($icon_name) {
    $icons = array(
        'bar-chart' => '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v18h18V3H3zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm5 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm5 8h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>',
        'folder' => '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.11 0-2 .89-2 2v3h2V6h6V4zm6 0v2h6v3h2V6c0-1.11-.89-2-2-2h-6zm-6 15v-3H4v3c0 1.11.89 2 2 2h6v-2zm6 2c1.11 0 2-.89 2-2v-3h-2v3h-6v2h6z"/></svg>',
        'share' => '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>',
        'bot' => '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M21 10.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-.28-.22-.5-.5-.5s-.5.22-.5.5c0 3.31 2.69 6 6 6s6-2.69 6-6z"/></svg>',
        'star' => '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
    );
    
    return isset($icons[$icon_name]) ? $icons[$icon_name] : $icons['star'];
}
?>