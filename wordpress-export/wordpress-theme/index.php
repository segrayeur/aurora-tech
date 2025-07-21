<?php
/**
 * The main template file
 * 
 * @package Aurora_Tech
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        
        <?php if (is_front_page()) : ?>
            <?php get_template_part('template-parts/hero'); ?>
            <?php get_template_part('template-parts/products'); ?>
            <?php get_template_part('template-parts/about'); ?>
            <?php get_template_part('template-parts/services'); ?>
            <?php get_template_part('template-parts/testimonial'); ?>
            <?php get_template_part('template-parts/contact'); ?>
        <?php else : ?>
            
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <header class="entry-header">
                            <h1 class="entry-title"><?php the_title(); ?></h1>
                        </header>
                        
                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
                
                <?php the_posts_navigation(); ?>
            <?php else : ?>
                <p><?php esc_html_e('Aucun contenu trouvé.', 'aurora-tech'); ?></p>
            <?php endif; ?>
            
        <?php endif; ?>
        
    </main>
</div>

<?php get_footer(); ?>