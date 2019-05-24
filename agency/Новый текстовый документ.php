
add_action( 'init', 'register_post_project' );

function register_post_project(){
	register_post_type('project', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'Проекты', // основное название для типа записи
			'singular_name'      => 'Проект', // название для одной записи этого типа
			'add_new'            => 'Добавить проект ', // для добавления новой записи
			'add_new_item'       => 'Добавление проекта', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование проекта', // для редактирования типа записи
			'new_item'           => 'Новый проект', // текст новой записи
			'view_item'          => 'Смотреть проект', // для просмотра записи этого типа.
			'search_items'       => 'Искать проект', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Проекты', // название меню
		),
		'description'         => 'Проекты',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 5,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title','editor','excerpt','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array( 'investory', 'infrastructure' ),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
}

















<div class="project">
						<?php 
						// параметры по умолчанию
							$posts = get_posts( array(
								'numberposts' => 4,
								'post_type'   => 'project',
								'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
								) );

								foreach( $posts as $post ){
									setup_postdata($post);
								    ?> 
								    <div class="project__item">
										<img src="<?php echo get_template_directory_uri() ?>/assets/img/investment.jpg" alt="investment" class="project__item_image">
										<a href="<?php get_the_permalink() ?>" class="project__item_title"><?php the_title() ?></a>
										<div class="project__item_text"><?php the_excerpt() ?></div>
									</div>


								    <?php  
}

wp_reset_postdata(); // сброс ?>
						</div>












add_action( 'init', 'register_post_event' );
function register_post_event(){
	register_post_type('event', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'События (справа)', // основное название для типа записи
			'singular_name'      => 'Событие', // название для одной записи этого типа
			'add_new'            => 'Добавить событие', // для добавления новой записи
			'add_new_item'       => 'Добавление события', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование события', // для редактирования типа записи
			'new_item'           => 'Новое событие', // текст новой записи
			'view_item'          => 'Смотреть событие', // для просмотра записи этого типа.
			'search_items'       => 'Искать событие', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'События', // название меню
		),
		'description'         => 'Событие(справа)',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 6,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title','editor','excerpt','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array(),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
}

add_action( 'init', 'register_post_investory' );
function register_post_investory(){
	register_post_type('investory', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'Инвестицонные проекты', // основное название для типа записи
			'singular_name'      => 'Инвестиционный проект', // название для одной записи этого типа
			'add_new'            => 'Добавить инвестиционный проект ', // для добавления новой записи
			'add_new_item'       => 'Добавление инвестиционного проекта', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование инвестиционного проекта', // для редактирования типа записи
			'new_item'           => 'Новый инвестиционный проект', // текст новой записи
			'view_item'          => 'Смотреть инвестиционный проект', // для просмотра записи этого типа.
			'search_items'       => 'Искать инвестиционный проект', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Инвестиционный проект', // название меню
		),
		'description'         => 'Инвестиционный проект',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 5,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title','editor','excerpt','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array(),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
}
add_action( 'init', 'register_post_social' );
function register_post_social(){
	register_post_type('social', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'Социальные проекты', // основное название для типа записи
			'singular_name'      => 'Социальный проект', // название для одной записи этого типа
			'add_new'            => 'Добавить социальный проект ', // для добавления новой записи
			'add_new_item'       => 'Добавление социального проекта', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование социального проекта', // для редактирования типа записи
			'new_item'           => 'Новый социальный проект', // текст новой записи
			'view_item'          => 'Смотреть социальный проект', // для просмотра записи этого типа.
			'search_items'       => 'Искать социальный проект', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Социальный проект', // название меню
		),
		'description'         => 'Социальный проект',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 5,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title','editor','excerpt','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array(),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
}
add_action( 'init', 'register_post_public' );
function register_post_public(){
	register_post_type('public', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'Общественные проекты', // основное название для типа записи
			'singular_name'      => 'Общественный проект', // название для одной записи этого типа
			'add_new'            => 'Добавить общественный проект ', // для добавления новой записи
			'add_new_item'       => 'Добавление общественный проекта', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование общественного проекта', // для редактирования типа записи
			'new_item'           => 'Новый общественный проект', // текст новой записи
			'view_item'          => 'Смотреть общественный проект', // для просмотра записи этого типа.
			'search_items'       => 'Искать общественный проект', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Общественный проект', // название меню
		),
		'description'         => 'Общественный проект',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 5,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title','editor','excerpt','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array(),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
}

add_action( 'init', 'register_post_infrastructure' );
function register_post_infrastructure(){
	register_post_type('infrastructure', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'Инфраструктурные проекты', // основное название для типа записи
			'singular_name'      => 'Инфраструктурный проект', // название для одной записи этого типа
			'add_new'            => 'Добавить инфраструктурный проект ', // для добавления новой записи
			'add_new_item'       => 'Добавление инфраструктурного проекта', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование инфраструктурного проекта', // для редактирования типа записи
			'new_item'           => 'Новый инфраструктурный проект', // текст новой записи
			'view_item'          => 'Смотреть инфраструктурный проект', // для просмотра записи этого типа.
			'search_items'       => 'Искать инфраструктурный проект', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Инфраструктурный проект', // название меню
		),
		'description'         => 'Инфраструктурный проект',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 5,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title','editor','excerpt','thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array(),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
}
$(document).ready(function(){
  $('.foundation__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="wp-content/themes/shepetiv/assets/img/arrow_right.svg" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="wp-content/themes/shepetiv/assets/img/arrow_right.svg" class="right__img" alt=""></button>'
  });
});
$(document).ready(function(){
  $('.partner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
     prevArrow: '<button type="button" class="left btn-juliet"><img src="wp-content/themes/shepetiv/assets/img/arrow_right.svg" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="wp-content/themes/shepetiv/assets/img/arrow_right.svg"  class="right__img" alt=""></button>'
  });
});
if(window.matchMedia('(min-width: 768px)').matches){
  $('.partner_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="wp-content/themes/shepetiv/assets/img/arrow_right.svg" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="wp-content/themes/shepetiv/assets/img/arrow_right.svg"  class="right__img" alt=""></button>'
  });
}