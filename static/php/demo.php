<?php
	header('Content-Type:text/html;charset=utf8');
	require('MYSQLPDO.class.php');
	$dbConfig = array('user'=>'root','password'=>'971115577','dbname'=>"gdpi");

	$db = MYSQLPDO::getInstance($dbConfig);

	$data = $db->fetchAll('select * from admin');
	print_r($data);
	echo md5('wonder.123');
	// for($i=0;$i<7;$i++){
	// 	$db->insert("insert into article(title,content,author) values('我不是标题','我不是内容','wonder')");
	// }
	// $db->delete('delete from article where id=2');
	// foreach($data as $rowKey=>$row){
	// 	foreach($row as $k=>$v){
	// 		$data[$rowKey][$k] = urlencode($v);
	// 	}
	// }
	//
	// // echo "\"".urldecode(json_encode($data))."\"";
	// echo urldecode(json_encode($data));
?>
