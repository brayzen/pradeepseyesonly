$(document).ready(function(){

  $('.box textarea').addProofreader({ edit_text_content: 'Edit Text', proofread_content: 'Proofread' });
  var dataPlots = [0.3333333333333333, 1, -2.769230769230769, -2.1818181818181817, 2.3333333333333335, -0.6428571428571429, 2.4, -0.6666666666666666, 1.9, -0.6923076923076923];

  $('#button').on("click", function(){
    var q1 = $('#Q1').val().trim().replace(".", "");
    var q2 = $('#Q2').val().trim().replace(".", "");
    var q3 = $('#Q3').val();
    var q4 = $('#Q4').val();
    var q5 = $('#Q5').val();
    var q6 = $('#Q6').val();
    var q7 = $('#Q7').val();
    var q8 = $('#Q8').val();
    var q9 = $('#Q9').val();
    var q10 = $('#Q10').val();
    var q11 = $('#Q11').val();
    var q12 = $('#Q12').val();

    var story = '';
    console.log(dataPlots);
    console.log(dataPlots.length);
    var templates = { water:    ["A ripple breaks still water.  It is the first echo of action that, however small, disrupts the equilibrium of a whole body of water.  ",
                                 "It only takes one motion against the norm.  " + q2 + " and they aspire to affect change.  ",
                                 "Where others sit on the shore, " + q1 + " dives in.  ",
                                 "Their own channel would not be crossed easily.  " + q3 + ".  ",
                                 "Like the steady, rhythmic push and pull keeps them afloat, they were steadfast.  ",
                                 "Determined to soar above the ascending depths, " + q5 + ".  ",
                                 "A swimmer might pause, to lift their head above the water and survey the distance before them. All becomes still. ",
                                 "And then a second wind. " + q8 + ".  ",
                                 q10 + ".  ",
                                 "Touched by the magnified ripples, an ecosystem awakes. The swimmer turns around for a second lap.  With " + q8 + ", " + q1 + " will keep moving forward."
                                ],

                      shootout: ["Tumbleweeds roll across a ghost town. All’s quiet, and tension electrifies the air.  ",
                                 q1 + " is " + q2 + ", and they were called to action.  ",
                                 "When " + q1 + ", " + q3 + ".  ",
                                 "People rely on " + q1 + ", but when trouble comes, would they have the support to defend their own?  ",
                                 q4 +" Windows are shuttered and the bars close when cowboys face off. ",
                                 "All eyes are on hands hovering above holsters. Who will be the fastest draw?  ",
                                 "With a trigger and a flash of smoke, the gunslingers take their shots. Even in the wild west, allies emerge.  " + q7 + ". ",
                                 "With the support of " + q8 + ", " + q1 + "’s " + q10 + ". Their outlaws were on the run.  ",
                                 q11 + '.  ',
                                 "The day is saved, and " + q1 + " holsters their gun. Now they’re looking to the future.  "
                      ]};
    var template = templates[$('#template-selection').val()];
    // function createStory(){
    for(var i = 0; i < template.length; i++){
    // for(var i = 0; i < 2; i++){
      var analyzeText = template[i].replace('..', '. ').replace('.,', ',').toString();
      getEmotions(analyzeText);
      story += analyzeText;
    };

    //Subjective input, this bank of emotions should be expanded
    var emotionScale = {appreciation:    4,
                        freedom:         4,
                        love:            4,
                        passion:         3,
                        enthusiasm:      3,
                        enthusiasm:      3,
                        belief:          2,
                        hope:            2,
                        optimism:        2,
                        contentment:     1,
                        serenity:        1,
                        happy:           1,
                        boredom:         0,
                        pessimism:       0,
                        frustration:    -1,
                        disappointment: -1,
                        doubt:          -2,
                        worry:          -2,
                        blame:          -3,
                        hatred:         -4,
                        anger:          -4,
                        insecurity:     -5,
                        unworthiness:   -5,
                        fear:           -6,
                        grief:          -6,
                        despair:        -6,
                        joy:             4,
                        optimistic:      2,
                        welcome:         1,
                        calm:           .5,
                        peaceful:        1,
                        grief:          -6,
                        betrayed:       -4,
                        hopeless:       -6,
                        awful:          -5,
                        useless:        -5,
                        blue:           -1,
                        blissful:        4,
                        accomplished:    1,
                        fantastic:       3,
                        complete:        1,
                        confident:       2,
                        healthy:         1,
                        stuck:          -1,
                        appreciated:     1,
                        invisible:      -5,
                        ignored:        -5,
                        helpless:       -6,
                        unhappy:        -1,
                        alone:          -5,
                        peaceful:        1,
                        refreshed:       2,
                        content:         1,
                        warm:            1,
                        chill:          -1,
                        ashamed:        -5,
                        embarrassed:    -2,
                        disappointed:   -1,
                        sadness:        -5,
                        conflicted:     -1,
                        bummed:         -1,
                        rage:           -4,
                        frustrated:     -1,
                        irritated:      -1,
                        mad:            -3,
                        glad:            2,
                        satisfied:       1,
                        calm:            1,
                        relaxed:         1,
                        defeated:       -3,
                        yucky:          -3,
                        qualified:       2,
                        secure:          1,
                        kind:            2,
                        empowered:       3,
                        trust:           4,
                        grateful:        4,
                        healthy:         2,
                        inspired:        3,
                        relieved:        1,
                        fantastic:       3,
                        beautiful:       4,
                        welcome:         2,
                        positive:        2,
                        miserable:      -6,
                        acceptance:      1,
                        pride:           3,
                        alive:           3,
                        inlove:          4,
                        admiration:      2,
                        honored:         4,
                        motivated:       3,
                        blissful:        4,
                        privileged:      2,
                        delighted:       4,
                        better:          2}

    // Make an Ajax call to Mashape
    function getEmotions(analyzeText) {
      console.log('Getting Emotions from Mashape');
      $.ajax({
        type: "POST",
        url: "https://shl-mp.p.mashape.com/webresources/jammin/emotionV2",
        headers: {
          "X-Mashape-Key": "2bBaxOke4Bmsh5wP1ZkiGwnGX67Np1UGniOjsnOOKlPaQCAmmP",
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "lang": "en",
          "text": analyzeText
        },
        success: function(data, status, jqXHR){
          console.log('Success!');
          var emotions = data.groups[0].emotions;
          emotions = emotions.concat(data.groups[1].emotions)
          // console.log(emotions);
          mapEmotions(emotions);
          // console.log(dataPlots);
        },
        error: function(jqXHR, status, error){
          console.log(jqXHR);
          console.log(status + ': Error status code');
          console.log(error);
        },
        dataType: 'json',
      });
    }

    //takes the collection of emotions, sums up their value, counts total entries
    //and divides to find the mean.  This mean is the Y point for that sentence
    function mapEmotions(emotions){
      var emotions = emotions;
      var sum = 0;
      var count = 0;
      for(var i = 0; i < emotions.length; i++){
        if (emotionScale[emotions[i]]){
          sum += emotionScale[emotions[i]];
          count += 1
        }
      }
      console.log(sum + ' : sum');
      console.log(count + ' : count');
      console.log(parseFloat(sum / count) + ': mean');
      dataPlots.push(parseFloat(sum / count));
      console.log(dataPlots);
      return parseFloat(sum / count);
    }
    // console.log(dataPlots);
    $('#output').html(story);
  });

  // console.log(dataPlots.length + ' vs. ' + template.length)
  $('#graph').on("click", function(){
      data1 = [];
      for(var i = 0; i < dataPlots.length; i++){
        data1.push([i + 1, dataPlots[i]]);
      };
      dataForGraph = [{
              data: data1,
              label: "linear",
              lines: {show:true},
              points: {show:true}
              }];
      options = {
        legend: {position:"nw"}
      };
      chart = $.plot($("#placeholder"), dataForGraph, options);
  })



})
