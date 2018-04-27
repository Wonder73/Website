<?php
  header('Content-Type:text/html;charset=utf8');
  require('MYSQLPDO.class.php');
  $dbConfig = array('user'=>'root','password'=>'971115577','dbname'=>'gdpi');
  $db = MYSQLPDO::getInstance($dbConfig);

  // $operation = 'showAll';
  $operation = $_GET['opeartion'];    //操作类型
  $data = [];

  if($operation === 'showAll'){       //显示全部数据
    $data = $db->fetchAll('select id,title,date from article order by date desc');
  }else if($operation === 'search'){       //搜索
    $search = $_GET['search'];
    $data = $db->fetchAll('select id,title,date from article where title like "%'.$search.'%" order by date desc');
  }else if($operation === 'new'){       //最新的五条记录
    $data = $db->fetchAll('select id,title,date from article order by date desc limit 5');
  }else if($operation === 'delete'){    //删除
    $id = $_GET['id'];
    $data = $db->delete("delete from article where id={$id}");
    echo $data;
    die;
  }else if($operation === 'insert'){    //插入数据
    $title = $_GET['title'];
    $author = $_GET['author'];
    $content = $_GET['content'];
    $datetime = $_GET['datetime'];
    $data = $db->insert("insert into article(title,author,content,date) values('".$title."','".$author."','".$content."','".$datetime."')");
    echo $data;
    die;
  }else if($operation === 'showRow'){   //显示数据
    $id = $_GET['id'];
    $data = $db->fetchAll('select * from article where id='.$id);
  }else if($operation === 'update'){
    $title = $_GET['title'];
    $author = $_GET['author'];
    $content = $_GET['content'];
    $datetime = $_GET['datetime'];
    $id = $_GET['id'];
    $data = $db->update("update article set title='".$title."',author='".$author."',content='".$content."',date='".$datetime."' where id=".$id);
    echo $data;
    die;
  }

  foreach($data as $rowKey=>$row){
    foreach($row as $k=>$v){
      $data[$rowKey][$k] = urlencode(str_replace('*','\'',str_replace('\n','',$v)));
    }
  }

  // echo "\"".urldecode(json_encode($data))."\"";
  echo urldecode(json_encode($data));
 ?>
