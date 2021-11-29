<?php
require_once dirname(dirname(__FILE__)) . '/model/pixlman/pixlman.class.php';
class PixlmanIndexManagerController extends modExtraManagerController {
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
    public function process(array $scriptProperties = array()) {}
    public function getPageTitle() { return $this->modx->lexicon('pixlman'); }
    public function loadCustomCssJs() {
        $this->addJavascript($this->pixlman->config['jsUrl'].'mgr/widgets/pixlman.grid.js');
        $this->addJavascript($this->pixlman->config['jsUrl'].'mgr/widgets/home.panel.js');
        $this->addLastJavascript($this->pixlman->config['jsUrl'].'mgr/sections/index.js');
    }
    public function getTemplateFile() {
        return $this->pixlman->config['templatesPath'].'home.tpl';
    }
}
