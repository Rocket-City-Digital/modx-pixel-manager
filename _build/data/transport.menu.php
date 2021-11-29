<?php
/**
 * Add modMenu into package
 *
 * @package pixlman
 * @subpackage build
 */

$menu = $modx->newObject('modMenu');
$menu->fromArray(array(
    'text' => 'Pixels',
    'parent' => 'components',
    'description' => 'Pixel Manager',
    'icon' => '',
    'menuindex' => 10,
    'namespace' => 'pixlman',
    'action' => 'index',
    'params' => '',
    'handler' => '',
),'',true,true);

return $menu;
