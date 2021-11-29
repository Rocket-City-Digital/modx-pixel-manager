<?php
/**
 * @package review
 * @subpackage processors
 */
class PixlmanUpdateProcessor extends modObjectUpdateProcessor {
    public $classKey = 'Item';
    public $languageTopics = array('pixlman:default');
    public $objectType = 'pixlman.item';
}
return 'PixlmanUpdateProcessor';
