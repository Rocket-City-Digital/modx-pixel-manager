<?php
/**
 * @package pixlman
 */
$rev = $modx->getService('pixlman','Pixlman',$modx->getOption('pixlman.core_path',null,$modx->getOption('core_path').'components/pixlman/').'model/pixlman/',$scriptProperties);
if (!($rev instanceof Pixlman)) return '';

$location = $modx->getOption('location', $scriptProperties,'Meta');

/* build query */
$c = $modx->newQuery('Item');
if($location){
  $c->where(array('status'=>1,'location'=>$location));
} else {
  $c->where(array('status'=>1));
}

$pixlman = $modx->getCollection('Item',$c);

/* iterate */
$output = '';
foreach ($pixlman as $item) {
    $itemArray = $item->toArray();
    $output .= $modx->getChunk('pixl-man-tpl',$itemArray);
}

return $output;
