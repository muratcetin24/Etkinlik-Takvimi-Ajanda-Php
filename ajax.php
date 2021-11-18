if ($_GET["sayfa"]=="islemler") {

 // Etkinlik Takvimi Geliyor (Ajanda)
    if ($_GET["islem"]=="etkinlikgetir") {


        // List of events
     $json = array();  

 // Query that retrieves events

     $db->sorgula("SELECT * FROM etkinlikler ORDER BY id");
     $ajanda = $db->tamCek(); 


     if (kayitsay('etkinlikler')!=0) {
       $i=0;
       foreach ($ajanda as $dt)
       { 
        $json[$i]["id"]=$dt["id"];
        $json[$i]["title"]=$dt["title"];
        $json[$i]["start"]=$dt["start"];
        $json[$i]["end"]=$dt["end"];
        $json[$i]["allDay"]=$dt["allDay"];
        $i++;

      } 
    }



    echo json_encode($json);


  }

  // Etkinlik Takvimi Aktarıldı (Ajanda)     


 // Etkinlik Takvimi Kaydedi Başladı (Ajanda)
  if ($_GET["islem"]=="etkinlikkaydet") {

    $title=$_POST['title'];
    $start=$_POST['start'];
    $end=$_POST['end'];


    $start =   date("Y-m-d H:i:s",strtotime($_POST['start']));
    $end =   date("Y-m-d H:i:s",strtotime($_POST['end']));



    $alanlar = array('title','start','end');

    $degerler = array($title, $start, $end); 

    $eklenenID=$db->kayitekle("etkinlikler",$alanlar,$degerler);


  }

  if ($_GET["islem"]=="etkinlikguncelle") {



    $id=$_POST['id'];
    $title=$_POST['title'];
    $start=$_POST['start'];
    $end=$_POST['end'];


    $start =   date("Y-m-d H:i:s",strtotime($_POST['start']));
    $end =   date("Y-m-d H:i:s",strtotime($_POST['end']));




    $alanlar = array('title','start','end');

    $degerler = array($title, $start, $end); 

    $eklenenID=$db->kayitGuncelle("etkinlikler",$alanlar,$degerler,'id',$id); 
    mesajgoster("success","Güncelleme İşlemi!","Etkinliğiniz Başarı İle Güncellenmiştir.<br> Lütfen Bekleyiniz",null);
  }
     // Etkinlik Takvimi Kaydedi Bitti (Ajanda)  


           // Etkinlik Takvimi Silme Başladı (Ajanda)  



  if ($_GET["islem"]=="etkinliksil") {

    if (@$_POST['id']<>null){

      $db->tekKayitSil('etkinlikler','id',$_POST['id']);

      logtut($_SESSION["UYEID"], " Etkinlikler Sayfasında ". $_POST['id'] ." Nolu Etkinlik Sildi .");


      mesajgoster("success","Silme Uyarısı!","Etkinlik Tanımınız Başarı İle Silindi<br> Lütfen Bekleyiniz","index.php");
    }


         }// Etkinlik Takvimi Silme Bitti (Ajanda)  




}