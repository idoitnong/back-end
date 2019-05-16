<?php
    require_once($_SERVER['DOCUMENT_ROOT'].'/res/dbcon.php');

    class Idoitnong
    {
        public function addSensorData($userId, $sensorTypeId, $sensorValue)
        {
            $query = sprintf("INSERT INTO `idin_sensor_tbl`(`user_id`, `sensor_type_id`, `sensor_value`, `register_date`) VALUES (%s, %s, %s, now())",
                         mysql_real_escape_string($userId),
                         mysql_real_escape_string($sensorTypeId),
                         mysql_real_escape_string($sensorValue));

            $result = mysql_query($query);

            return $result;
        }

        public function viewLastSensorsData($userId)
        {
            $query = sprintf("SELECT * FROM (SELECT `sensor_type_id`, `sensor_value`, `register_date` FROM idin_sensor_tbl WHERE `user_id`=%s AND `register_date` > DATE_ADD(now(), INTERVAL -3600 SECOND) ORDER BY `register_date`  DESC) as a GROUP BY a.sensor_type_id",
                         mysql_real_escape_string($userId));
            $result = mysql_query($query);

            if(!$result) {
                return false;
            }

            $rows = array();

            while ($row = mysql_fetch_object($result)) {
              $rows['s'.$row->sensor_type_id] = $row;
            }

            return $rows;
        }
    }
?>