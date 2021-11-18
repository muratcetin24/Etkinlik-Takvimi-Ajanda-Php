  $(document).ready(function() {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        
        
        var calendar = $('#calendar').fullCalendar({

            monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
            monthNamesShort: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
            dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
            dayNamesShort: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
            buttonText: {
                today:    'Bugün',
                month:    'Ay',
                week:     'Hafta',
                day:      'Gün',
                list:     'Liste',
                listMonth: 'Aylık Liste',
                listYear: 'Yıllık Liste',
                listWeek: 'Haftalık Liste',
                listDay: 'Günlük Liste'
            }, header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },

             navLinks: true, // can click day/week names to navigate views
             editable: true,
             events:"ajax.php?sayfa=islemler&islem=etkinlikgetir",
             selectable: true,
             selectHelper: true,

             select: function(start, end, allDay) {

                var title = prompt('Etkinlik Adını Giriniz:');
                if (title) {
                 start = $.fullCalendar.formatDate(start, "YYYY-MM-DD HH:mm:ss");
                 end = $.fullCalendar.formatDate(end, "YYYY-MM-DD HH:mm:ss");
                 $.ajax({
                     url: 'ajax.php?sayfa=islemler&islem=etkinlikkaydet',
                     data: 'title='+ title+'&start='+ start +'&end='+ end ,
                     type: "POST",
                     success: function(json) {

                         toastr.info('Etkinlik Başarıyla Kaydedildi.');

                     }
                 });

                 calendar.fullCalendar('renderEvent',
                 {
                     title: title,
                     start: start,
                     end: end,
                     allDay: allDay
                 },
             true // make the event "stick"
             );
             }
             calendar.fullCalendar('unselect');






         },
         editable: true,

         eventRender: function(event, element) {

           var contenta = '<b>'+event.title+'</b>' + 
           '<p><b>Başlangıç:</b> '+$.fullCalendar.formatDate(event.start, "DD-MM-YYYY")+'<br />' + 
           ($.fullCalendar.formatDate(event.end, "DD-MM-YYYY") && '<p><b>Bitiş :</b> '+$.fullCalendar.formatDate(event.end, "DD-MM-YYYY")+'</p>' || '');


           $(element).tooltip({html: true,title: contenta});             
       },

       
       eventClick: function(calEvent, jsEvent, view) {
        var $this = this;
        $("#editId").val(calEvent.id)
        $("#editEname").val(calEvent.title)
        $("#editStarts").datetimepicker("date", calEvent.start._d)
        $("#editEnds").datetimepicker("date", calEvent.end._d)
        $("#editEvent").modal({
            backdrop: 'static'
        });

        $("#editEvent").find('.delete-event').show().end().find('.delete-event').unbind('click').click(function() {
            $("#calendar").fullCalendar('removeEvents', function(ev) {
                return (ev._id == calEvent._id);
            });
            $("#editEvent").modal('hide');
        });

        $("#editEvent").find('.edit-event').show().end().find('.edit-event').unbind('click').click(function() {
         
            
           calEvent.id = $("#editId").val();
            calEvent.title = $("#editEname").val();
            calEvent.start = new Date($("#editStarts").data("datetimepicker").date())
            calEvent.end = new Date($("#editEnds").data("datetimepicker").date())
            $("#calendar").fullCalendar('updateEvent', calEvent);
            $("#editEvent").modal('hide');
            return false;
            

        });

        $("#editEvent").find('form').on('submit', function() {
            calEvent.id = $("#editId").val();
            calEvent.title = $("#editEname").val();
            calEvent.start = new Date($("#editStarts").data("datetimepicker").date())
            calEvent.end = new Date($("#editEnds").data("datetimepicker").date())
            $("#calendar").fullCalendar('updateEvent', calEvent);
            $("#editEvent").modal('hide');
            return false;
        });

        
    },

    

    eventDrop: function(event, delta) {
       start = $.fullCalendar.formatDate(event.start, "YYYY-MM-DD HH:mm:ss");
       end = $.fullCalendar.formatDate(event.end, "YYYY-MM-DD HH:mm:ss");
       $.ajax({
           url: 'ajax.php?sayfa=islemler&islem=etkinlikguncelle',
           data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
           type: "POST",
           success: function(json) {
               toastr.success('Etkinlik Başarıyla Düzenlendi.');
           }
       });
   },



   
   eventResize: function(event) {
       start = $.fullCalendar.formatDate(event.start, "YYYY-MM-DD HH:mm:ss");
       end = $.fullCalendar.formatDate(event.end, "YYYY-MM-DD HH:mm:ss");
       $.ajax({
           url: 'ajax.php?sayfa=islemler&islem=etkinlikguncelle',
           data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
           type: "POST",
           success: function(json) {
               toastr.info('Etkinlik Başarıyla Güncellendi.');
           }
       });

   }

});

});