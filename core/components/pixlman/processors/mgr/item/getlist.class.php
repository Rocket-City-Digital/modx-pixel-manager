<?php
/**
 * Get a list of Pixlman
 *
 * @package pixlman
 * @subpackage processors
 */
class PixlmanGetListProcessor extends modObjectGetListProcessor {
    public $classKey = 'Item';
    public $languageTopics = array('pixlman:default');
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
    public $objectType = 'pixlman.item';

    public function prepareQueryBeforeCount(xPDOQuery $c) {
        $query = $this->getProperty('query');
        if (!empty($query)) {
            $c->where(array(
                'title:LIKE' => '%'.$query.'%'
            ));
        }
        return $c;
    }
}
return 'PixlmanGetListProcessor';
