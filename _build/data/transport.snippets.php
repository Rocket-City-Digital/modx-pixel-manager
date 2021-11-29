<?php
/**
 * @package pixlman
 * @subpackage build
 */
function getSnippetContent($filename) {
    $o = file_get_contents($filename);
    $o = trim(str_replace(array('<?php','?>'),'',$o));
    return $o;
}
$snippets = array();

$snippets[1]= $modx->newObject('modSnippet');
$snippets[1]->fromArray(array(
    'id' => 1,
    'name' => 'PixlMan',
    'description' => 'Echo Pixels to your HTML',
    'snippet' => getSnippetContent($sources['elements'].'snippets/snippet.pixlman.php'),
),'',true,true);
unset($properties);

return $snippets;
