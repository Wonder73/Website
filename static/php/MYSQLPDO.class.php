<?php
  class MYSQLPDO{
    //数据库默认连接信息
    private $dbConfig = array(
       'db' => 'mysql',
       'host' => 'localhost',
       'port' => '3306',
       'user' => 'root',
       'pass' => '971115577',
       'charset' => 'utf8',
       'dbname' => 'gdpi'
    );

    //单例模式 本类对象引用
    private static $instance;

    //PDO实例
    private $db;

    //初始化数据
    private function __construct($params){
      $this->dbConfig = array_merge($this->dbConfig,$params);

      $this->connect();
    }

    //获得单例对象
    public static function getInstance($params = array()){
      if(!self::$instance instanceof self){
        self::$instance = new self($params);
      }
      return self::$instance;
    }

    //私有克隆
    private function __clone(){}

      //连接数据库
    private function connect(){
      try{
        $dsn = "{$this->dbConfig['db']}:host={$this->dbConfig['host']};prot={$this->dbConfig['port']};dbname={$this->dbConfig['dbname']};charset={$this->dbConfig['charset']}";
        $this->db = new PDO($dsn,$this->dbConfig['user'],$this->dbConfig['pass']);
        $this->db->query("set names {$this->dbConfig['charset']}");
      }catch(PDOException $e){
        die("数据库连接失败：{$e->getMessage()}");
      }
    }

    //执行sql
    public function query($sql){
      $rst = $this->db->query($sql);
      if($rst === false){
        $error = $this->db->errorInfo();
        die("数据库操作失败：ERROR{$error[1]}({$error[0]}):{$error[2]}");
      }
      return $rst;
    }

    //执行sql
    public function exec($sql){
      $rst = $this->db->exec($sql);
      if($rst === false){
        $error = $this->db->errorInfo();
        die("数据库操作失败：ERROR{$error[1]}({$error[0]}):{$error[2]}");
      }
      return $rst;
    }

    //取得一行结果
    public function fetchRow($sql){
      return $this->query($sql)->fetch(PDO::FETCH_ASSOC);
    }

    //取得所有结果
    public function fetchAll($sql){
      return $this->query($sql)->fetchAll(PDO::FETCH_ASSOC);
    }

    //插入
    public function insert($sql){
      return $this->exec($sql);
    }

    //更新
    public function update($sql){
      return $this->exec($sql);
    }

    //删除
    public function delete($sql){
      return $this->exec($sql);
    }
  }
?>
