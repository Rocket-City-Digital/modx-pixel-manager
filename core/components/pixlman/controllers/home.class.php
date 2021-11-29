<?php
/**
 * @package pixlman
 * @subpackage controllers
 */
class PixlmanHomeManagerController extends PixlmanManagerController {
    public function process(array $scriptProperties = array()) {

    }
    public function getPageTitle() { return $this->modx->lexicon('pixlman'); }
    public function loadCustomCssJs() {
        $this->addJavascript($this->pixlman->config['jsUrl'].'mgr/widgets/pixlman.grid.js');
        $this->addJavascript($this->pixlman->config['jsUrl'].'mgr/widgets/home.panel.js');
        $this->addLastJavascript($this->pixlman->config['jsUrl'].'mgr/sections/index.js');
    }
    public function getTemplateFile() { return $this->pixlman->config['templatesPath'].'home.tpl'; }
}
