<?php
/**
 * Pixlman Connector
 *
 * @package pixlman
 */
require_once dirname(dirname(dirname(__DIR__))) . '/config.core.php';
require_once MODX_CORE_PATH.'config/'.MODX_CONFIG_KEY.'.inc.php';
require_once MODX_CONNECTORS_PATH.'index.php';

$corePath = $modx->getOption('pixlman.core_path',null,$modx->getOption('core_path').'components/pixlman/');
require_once $corePath.'model/pixlman/pixlman.class.php';
$modx->pixlman = new Pixlman($modx);
$modx->lexicon->load('pixlman:default');


/* handle request */
$path = $modx->getOption('processorsPath',$modx->pixlman->config,$corePath.'processors/');
$modx->request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));
