<?php
  header('Content-Type:text/html;charset=utf8');
  require('MYSQLPDO.class.php');
  $dbConfig = array('user'=>'root','password'=>'971115577','dbname'=>'gdpi');
  $db = MYSQLPDO::getInstance($dbConfig);

  // $operation = 'showAll';
  $operation = $_GET['opeartion'];    //操作类型

  if($operation === 'login'){
    $username = $_GET['username'];
    $password = md5($_GET['password']);
    $data = $db->fetchRow("select * from admin where username='{$username}'");
    if($data['password']===$password){
      echo 1;
    }else{
      echo 0;
    }
  }else if($operation === 'update'){
    $username = $_GET['username'];
    $password = md5($_GET['password']);
    $oldPwd = md5($_GET['oldPwd']);
    $data = $db->fetchRow("select * from admin where username='{$username}'");
    if($data['password']===$oldPwd){
      echo $db->update("update admin set password='{$password}' where username='{$username}'");
    }else{
      echo 0;
    }
  }
 ?>
