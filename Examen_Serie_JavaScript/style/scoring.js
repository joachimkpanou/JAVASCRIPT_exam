// Après avoir chargé le DOM, exécutez le traitement dans function ().
$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
      var sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    $("#average_indicate").text(sum/5);
  };
  function get_achievement(){
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    if ( averageIndicate >= 80){
      return "A";
    } else if ( averageIndicate >= 60) {
      return "B";
    } else if ( averageIndicate >= 40) {
      return "C";
    }else {
      return "D";
    }
  };
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;
    let judge = "Passe";
  for(var i=0; i<number; i++){
    if(subject_points[i]<60){
      judge= "Echec";
      break;
    }
  }
  return judge;
  };

  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
$('#declaration').append('<label id="alert-indicate" class="alert alert-info">Ton niveau est : ' +achievement+' et ton resultat est : '+pass_or_failure+'</label>');
  }

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate(); });
  $('#btn-evaluation').click(function() { $("#evaluation").text(get_achievement());});
  $('#btn-judge').click(function() { $("#judge").text(get_pass_or_failure());});
 // $('#btn-declaration').click(judgement());
  $('#btn-declaration').click(function() { $("#declaration").text(judgement());});
});