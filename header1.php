<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <!--[if lt IE 9]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
    <![endif]-->
    
	<meta name="description" content="<?php bloginfo('description'); ?>">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    

   <!-- WP_Head -->
    <?php wp_head(); ?>
   <!-- /WP_Head -->
</head>
    
<body <?php body_class(esc_attr(VITO_THEME_SLUG.' ver'.VITO_THEME_VERSION)); ?>>


<div id="container" class="container">
    <div class="row">

        <section id="main" class="col-md-8">


            <header id="header">
                    <div class="row">

                        <div class="logo_container col-md-4 col-sm-4">
                            <?php
                            if ( is_front_page() && is_home() ) :
                            ?>
                                <h1><a href="<?php echo esc_url( home_url() ); ?>/" class="ql_logo" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                            <?php else : ?>
                                <a class="ql_logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
                            <?php endif; ?>

                             
                            <button id="ql-main-nav-btn" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#ql-navigation">
                                <i class="fa fa-navicon"></i>
                            </button>

                        </div><!-- /logo_container -->

                        <div class="nav_wrap col-md-8 col-sm-8">
                            <div class="collapse navbar-collapse" id="ql-navigation">
                                <nav id="jqueryslidemenu" class="jqueryslidemenu navbar " role="navigation">
                                    <?php            
                                    if ( has_nav_menu( 'menu-1' ) ){ 
                                        wp_nav_menu( array(                     
                                        'theme_location'  => 'menu-1',
                                        'container'       => '',
                                        'items_wrap'      => '<ul id="nav" class="nav">%3$s</ul>',
                                    )); 
                                    }else{
                                        echo "<ul id='nav' class='nav'>";
                                        wp_list_pages( array(
                                            'title_li'     => '')
                                        );
                                        echo "</ul>";
                                    }; 
                                    ?>
                                </nav>
                            </div>
                            
                        </div><!-- /nav_wrap -->
    
                    <div class="clearfix"></div>
                    </div><!-- row-->
            </header>

            <div class="clearfix"></div>


