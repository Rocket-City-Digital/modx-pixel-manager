<?php
require_once (strtr(realpath(dirname(dirname(__FILE__))), '\\', '/') . '/item.class.php');
class Item_mysql extends Item {
    public function __construct(& $xpdo) {
        parent :: __construct($xpdo);
    }
}
?>
