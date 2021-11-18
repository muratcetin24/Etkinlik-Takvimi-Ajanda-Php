<script src="js/jquery-3.4.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 <script src="plugins/fullcalendar/dist/fullcalendar.min.js"></script>
      <script src="js/calendar.js"></script>

<div class="modal" id="editEvent" tabindex="-1" role="dialog" aria-labelledby="editEventLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <form class="editEventForm" id="editEventForm" action=""> 
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editEventLabel">Etkinlik Adı</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" id="editId" name="id" >

                        <label for="editEname">Etkinlik Adı</label>
                        <input type="text" class="form-control" id="editEname" name="title" placeholder="Please enter event title">
                    </div>
                    <div class="form-group">
                        <label for="editStarts">Başlama Tarihi</label>
                        <input type="text" class="form-control datetimepicker-input" data-date-format="DD.MM.YYYY HH:mm:ss"  id="editStarts" name="start" data-toggle="datetimepicker" data-target="#editStarts">
                    </div>

                    <div class="form-group">
                        <label for="editStarts">Başlama Tarihi</label>
                        <input type="text" class="form-control datetimepicker-input" data-date-format="DD.MM.YYYY HH:mm:ss" id="editEnds" name="end" data-toggle="datetimepicker" data-target="#editEnds">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                    <button class="btn btn-danger delete-event" type="button" onclick="return  ajaxislemfonk('islemler','etkinliksil','#editEventForm');">Sil</button>
                    <button class="btn btn-success edit-event" type="button" onclick="return  ajaxislemfonk('islemler','etkinlikguncelle','#editEventForm');">Kaydet</button>
                </div>
            </div>
        </form>
    </div>
</div> 

 
<div class="col-md-12">

    <div id="islemsonuc">islemsonucu</div>
    <div id="calendar"></div>

</div>