<?php
require 'CALCService.class.php';

$celsius = $_GET['celsius'];

$calcIndex = 0.0;

if(is_numeric($celsius) ) {
    $calcIndex = CALCService::getTemp($celsius);
}
sleep (1);
echo $calcIndex;
?>