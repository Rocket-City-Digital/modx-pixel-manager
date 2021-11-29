<?php
/**
 * @package pixlman
 * @subpackage processors
 */
class PixlmanCreateProcessor extends modObjectCreateProcessor {
    public $classKey = 'Item';
    public $languageTopics = array('pixlman:default');
    public $objectType = 'pixlman.item';

    public function beforeSave() {
        $name = $this->getProperty('title');
        if (empty($name)) {
            $this->addFieldError('title',$this->modx->lexicon('pixlman.item_err_ns_name'));
        }
        //else if ($this->doesAlreadyExist(array('name' => $name))) {
          //  $this->addFieldError('name',$this->modx->lexicon('pixlman.review_err_ae'));
        //}
        return parent::beforeSave();
    }
}
return 'PixlmanCreateProcessor';
