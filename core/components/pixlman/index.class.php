<?php
/**
 * @package pixlman
 * @subpackage controllers
 */
require_once dirname(__FILE__) . '/model/pixlman/pixlman.class.php';
abstract class PixlmanManagerController extends modExtraManagerController {
    /** @var Pixlman $pixlman */
    public $pixlman;
    public function initialize() {
        $this->pixlman = new Pixlman($this->modx);

        $this->addCss($this->pixlman->config['cssUrl'].'mgr.css');
        $this->addJavascript($this->pixlman->config['jsUrl'].'mgr/pixlman.js');
        $this->addHtml('<script type="text/javascript">
        Ext.onReady(function() {
            Pixlman.config = '.$this->modx->toJSON($this->pixlman->config).';
        });
        </script>');
        return parent::initialize();
    }
    public function getLanguageTopics() {
        return array('pixlman:default');
    }
    public function checkPermissions() { return true;}
}
/**
 * @package pixlman
 * @subpackage controllers
 */
class IndexManagerController extends PixlmanManagerController {
    public static function getDefaultController() { return 'home'; }
}
