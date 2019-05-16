<?php
    header('Content-Type: application/json; charset=UTF-8;');
    header('Access-Control-Allow-Origin: *');

    require_once 'Idoitnong.php';

    $idoitnong = new Idoitnong();

    $action       = $_GET['action'];
    $userId       = $_GET['user_id'];
    $sensorTypeId = $_GET['sensor_type_id'];
    $sensorValue  = $_GET['sensor_value'];

    if ($action == "add") {
      if(!($idoitnong->addSensorData($userId, $sensorTypeId, $sensorValue))) {
        die(json_encode(array('ok' => false, 'msg' => 'Failed to add data.')));
      }
      
      echo json_encode(array('ok' => true));
    } else if ($action == "view") {
      if(!($rows = $idoitnong->viewLastSensorsData($userId))) {
        die(json_encode(array('ok' => false, 'msg' => 'The data is not available.')));
      }

      echo json_encode(array('ok' => true, 'rows' => $rows));
    }
?>