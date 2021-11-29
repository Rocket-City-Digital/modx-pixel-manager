<?php
/**
 * @package pixlman
 * @subpackage build
 */

$chunks = array();

$chunks[1]= $modx->newObject('modChunk');
$chunks[1]->fromArray(array(
    'id' => 1,
    'name' => 'pixl-man-tpl',
    'description' => 'Individual Pixel Loop',
    'snippet' => file_get_contents($sources['elements'].'chunks/pixl-man-tpl.chunk.tpl'),
    'properties' => NULL
),'',true,true);

return $chunks;
