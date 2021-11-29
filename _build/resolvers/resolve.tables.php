<?php
/**
 * Resolve creating custom db tables during install.
 *
 * @package pixlman
 * @subpackage build
 */
if ($object->xpdo) {
    switch ($options[xPDOTransport::PACKAGE_ACTION]) {
        case xPDOTransport::ACTION_INSTALL:
            $modx =& $object->xpdo;
            $modelPath = $modx->getOption('pixlman.core_path',null,$modx->getOption('core_path').'components/pixlman/').'model/';
            $modx->addPackage('pixlman',$modelPath);

            $manager = $modx->getManager();

            $manager->createObjectContainer('Item');

            break;
        case xPDOTransport::ACTION_UPGRADE:
            break;
    }
}
return true;
