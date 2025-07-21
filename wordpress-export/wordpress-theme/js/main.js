/**
 * Aurora Tech - WordPress Theme JavaScript
 */

(function($) {
    'use strict';

    // Document ready
    $(document).ready(function() {
        initMobileMenu();
        initSmoothScrolling();
        initHeaderScroll();
        initContactForm();
        initAnimations();
        initParallax();
        initCardHovers();
    });

    /**
     * Mobile Menu Toggle
     */
    function initMobileMenu() {
        $('.mobile-menu-toggle').on('click', function() {
            $(this).toggleClass('active');
            $('.nav-menu-container').toggleClass('active');
            $('body').toggleClass('mobile-menu-open');
        });

        // Close mobile menu when clicking on a link
        $('.nav-menu a').on('click', function() {
            $('.mobile-menu-toggle').removeClass('active');
            $('.nav-menu-container').removeClass('active');
            $('body').removeClass('mobile-menu-open');
        });
    }

    /**
     * Smooth Scrolling
     */
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            var target = $(this.getAttribute('href'));
            
            if (target.length) {
                var headerHeight = $('.site-header').outerHeight();
                var targetPosition = target.offset().top - headerHeight;
                
                $('html, body').animate({
                    scrollTop: targetPosition
                }, 800, 'easeInOutCubic');
            }
        });
    }

    /**
     * Header Scroll Effect
     */
    function initHeaderScroll() {
        var header = $('.site-header');
        var scrolled = false;

        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            
            if (scroll > 100 && !scrolled) {
                header.addClass('scrolled');
                scrolled = true;
            } else if (scroll <= 100 && scrolled) {
                header.removeClass('scrolled');
                scrolled = false;
            }
        });
    }

    /**
     * Contact Form AJAX
     */
    function initContactForm() {
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            
            var form = $(this);
            var submitBtn = form.find('button[type="submit"]');
            var originalText = submitBtn.text();
            
            // Disable submit button and show loading
            submitBtn.prop('disabled', true).text('Envoi en cours...');
            
            // Get form data
            var formData = {
                action: 'aurora_contact_form',
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val(),
                company: form.find('input[name="company"]').val(),
                phone: form.find('input[name="phone"]').val(),
                service: form.find('select[name="service"]').val(),
                message: form.find('textarea[name="message"]').val(),
                nonce: aurora_ajax.nonce
            };
            
            // Send AJAX request
            $.post(aurora_ajax.ajaxurl, formData, function(response) {
                if (response.success) {
                    // Success message
                    showMessage('success', response.data);
                    form[0].reset();
                } else {
                    // Error message
                    showMessage('error', response.data);
                }
            }).fail(function() {
                showMessage('error', 'Une erreur est survenue. Veuillez réessayer.');
            }).always(function() {
                // Re-enable submit button
                submitBtn.prop('disabled', false).text(originalText);
            });
        });
    }

    /**
     * Show Message Function
     */
    function showMessage(type, message) {
        var messageClass = type === 'success' ? 'success' : 'error';
        var messageHtml = '<div class="form-message ' + messageClass + '">' + message + '</div>';
        
        // Remove existing messages
        $('.form-message').remove();
        
        // Add new message
        $('#contact-form').prepend(messageHtml);
        
        // Auto-remove after 5 seconds
        setTimeout(function() {
            $('.form-message').fadeOut(function() {
                $(this).remove();
            });
        }, 5000);
    }

    /**
     * Initialize Animations
     */
    function initAnimations() {
        // Intersection Observer for scroll animations
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements
            $('.card, .section-header, .hero-content').each(function() {
                observer.observe(this);
            });
        }
    }

    /**
     * Parallax Effect
     */
    function initParallax() {
        var heroSection = $('.hero-section');
        
        if (heroSection.length) {
            $(window).on('scroll', function() {
                var scrolled = $(window).scrollTop();
                var rate = scrolled * -0.5;
                
                heroSection.css('transform', 'translateY(' + rate + 'px)');
            });
        }
    }

    /**
     * Card Hover Effects
     */
    function initCardHovers() {
        $('.product-card, .service-card, .value-card').hover(
            function() {
                $(this).addClass('hover-effect');
            },
            function() {
                $(this).removeClass('hover-effect');
            }
        );
    }

    /**
     * Easing function for smooth scrolling
     */
    $.easing.easeInOutCubic = function(x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    };

    /**
     * Window resize handler
     */
    $(window).on('resize', function() {
        // Close mobile menu on resize
        if ($(window).width() > 768) {
            $('.mobile-menu-toggle').removeClass('active');
            $('.nav-menu-container').removeClass('active');
            $('body').removeClass('mobile-menu-open');
        }
    });

})(jQuery);