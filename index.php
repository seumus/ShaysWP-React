
<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage ShaysWP-React
 * @since ShaysWP-React 1.0
 */
 ?>
 <!DOCTYPE html>

 <html <?php language_attributes(); ?> class="no-js">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <title>ShaysWP-React</title>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <div id="page" class="hfeed site">
            <div id="content">
                <div class="loader-gif">
                    <img src="<?php echo home_url() ?>/wp-content/themes/ShaysWP-React/dist/img/loading.gif" alt="Loader">
                </div>
            </div>
            <?php wp_footer(); ?>
        </div>			
    </body>
</html>