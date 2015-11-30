//This is the StoryData object, it is the object that contains all elements necessary to
// plot emotions and run spelling/grammar checks.
var StoryData = function(){
  this.q1 = $('#Q1').html();
  this.q2 = $('#Q2').html();
  this.q3 = $('#Q3').html();
  this.q4 = $('#Q4').html();
  this.q5 = $('#Q5').html();
  this.q6 = $('#Q6').html();
  this.q7 = $('#Q7').html();
  this.q8 = $('#Q8').html();
  this.q9 = $('#Q9').html();
  this.q10 = $('#Q10').html();
  this.q11 = $('#Q11').html();
  this.q12 = $('#Q12').html();
  this.overArchingEmot = {'4': 'Appreciation/Freedom/Love',
                          '3': 'Passion/Enthusiasm',
                          '2': 'Belief/Hope/Optimism',
                          '1': 'Contentment/Serenity',
                          '0': 'Boredom/Pessimism',
                         '-1': 'Frustration/Disappointment',
                         '-2': 'Doubt/Worry',
                         '-3': 'Blame/Discouragement',
                         '-4': 'Hatred/Anger',
                         '-5': 'Insecurity/Unworthiness',
                         '-6': 'Fear/Grief/Despair'};
  this.dataPlots = [];
  this.emotValue = []
  this.arrayOfAvgs = [];
  // Subjective input, this bank of emotions should be expanded and made a consensus
  this.emotBank = { grief: -6, invisible: -5, ignored: -5, helpless: -6, unhappy: -1,
                   alone: -2, peaceful: 1, refreshed: 2, content: 1, warm: 2, chill: -1,
                   glad: 2, accomplished: 3, satisfied: 1, calm: 1, relaxed: 1, defeated: -3,
                   numb: 0, hungover: 0, nauseous: -2, yucky: -1, ashamed: -3, embarrassed: -2,
                   disappointed: -1, sadness: -5, conflicted: 0, bummed: -1, rage: -4,
                   frustrated: -1, irritated: -1, mad: -3, acceptance: 1, pride: 3, stuck: 0,
                   inspired: 4, empowered: 4, creative: 2, furious: -4, angry: -4, offended: -1,
                   qualified: 2, secure: 1, kind: 2, professional: 2, trust: 4, grateful: 4,
                   healthy: 3, optimism: 2, optimistic: 2, joy: 4, relieved: 1, fantastic: 4,
                   inlove: 4, beautiful: 4, welcome: 2, positive: 2, spoiled: 2, awful: -3,
                   miserable: -5, admiration: 4, honored: 4, motivated: 3, blissful: 4,
                   productive: 2, betrayed: -1, hopeless: -6, useless: -5, blue: -3,
                   complete: 1, confident: 2, appreciated: 1, better: 2, delighted: 4,
                   ecstatic: 4, adventurous: 3, giddy: 4, uneasy: -2, ready: 2, guilty: -2,
                   trapped: -3, unappreciated: -1, neglected: -5, dumb: 0, bitter: -3,
                   disgusted: -4, stupid: -5, gross: -1, disgust: -2, lousy: 0, nostalgic: 2,
                   unloved: -5, fear: -6, spooky: -2, safe: 1, overwhelmed: -1, submission: -1,
                   concerned: -2, afraid: -6, scared: -6, thankful: 4, proud: 4, aggravated: -1,
                   bullying: -4, pissed: -3, horrible: -3, meh: 0, alive: 3, butterflies: 2,
                   anxious: 0, hopeful: 2, vigilance: 0, insecure: -5, worried: -2, suspicious: -3,
                   depressed: -6
                  };
  this.count = 0;
  this.storyString = '';

  // this.setData();

  this.templates = { water: { regex: "/^&/g, \',\'" ,
                              sentences: ["A ripple breaks still water.  It is the first echo of action that, however small, disrupts the equilibrium of a whole body of water.  ",
                               "It only takes one motion against the norm.  " + this.q2 + " and they aspire to affect change.  ",
                               "Where others sit on the shore, " + this.q1 + " dives in.  ",
                               "Their own channel would not be crossed easily.  " + this.q3 + ".  ",
                               "Like the steady, rhythmic push and pull keeps them afloat, they were steadfast.  ",
                               "Determined to soar above the ascending depths, " + this.q5 + ".  ",
                               "A swimmer might pause, to lift their head above the water and survey the distance before them. All becomes still. ",
                               "And then a second wind. " + this.q8 + ".  ",
                               this.q10 + ".  ",
                               "Touched by the magnified ripples, an ecosystem awakes. The swimmer turns around for a second lap.  With " + this.q8 + ", " + this.q1 + " will keep moving forward."
                             ]},

                      shootout: { regex: "/^&/g, \',\'",
                                  sentences: ["Tumbleweeds roll across a ghost town. All’s quiet, and tension electrifies the air.  ",
                                   this.q1 + " is " + this.q2 + ", and they were called to action.  ",
                                   "When " + this.q1 + ", " + this.q3 + ".  ",
                                   "People rely on " + this.q2 + ", but when trouble comes, would they have the support to defend their own?  ",
                                   this.q4 +".  Windows are shuttered and the bars close when cowboys face off. ",
                                   "All eyes are on hands hovering above holsters. Who will be the fastest draw?  ",
                                   "With a trigger and a flash of smoke, the gunslingers take their shots. Even in the wild west, allies emerge.  " + this.q7 + ". ",
                                   "With the support of " + this.q8 + ", " + this.q1 + " " + this.q10 + ". Their outlaws were on the run.  ",
                                   this.q11 + '.  ',
                                   "The day is saved, and " + this.q1 + " holsters their gun. Now they’re looking to the future.  "
                                 ]}
                    };
  this.template = this.templates[$('#template-selection').val()]['sentences'];
};

StoryData.prototype.setData = function(){
  this.q1 = $('#Q1').html();
  this.q2 = $('#Q2').html();
  this.q3 = $('#Q3').html();
  this.q4 = $('#Q4').html();
  this.q5 = $('#Q5').html();
  this.q6 = $('#Q6').html();
  this.q7 = $('#Q7').html();
  this.q8 = $('#Q8').html();
  this.q9 = $('#Q9').html();
  this.q10 = $('#Q10').html();
  this.q11 = $('#Q11').html();
  this.q12 = $('#Q12').html();
};

String.prototype.regExGuantlet = function(){
  var newString;
  newString = this.replace(/¡/g, '');
  newString = newString.replace(/("")/g, '"');
  newString = newString.replace(/\?\./g, '?');
  newString = newString.replace("¦", '.');
  newString = newString.replace("¡", '.');
  newString = newString.replace(/\.\./g, '.');
  newString = newString.replace("°", "");
  return newString
};

StoryData.prototype.makeStory = function(){
  console.log(this.template);
  var sentences = this.template;
  var analyzeText;
  for(var i = 0; i < sentences.length; i++){
    var analyzeText = this.template[i].trim().concat(' ').regExGuantlet();//.regExGuantlet(this.template['regex']);
    console.log(analyzeText);
    this.storyString += analyzeText;
  };
  this.callGingerice(this.storyString);
  this.getMapPlot();
};


// Make an Ajax call to Mashape(API that returns two arrays of emotions)
StoryData.prototype.getEmotions = function(analyzeText, index) {
  if (analyzeText){
  // UX Spinner while ajax calls are being processed.
    var storydata = this;
    var yek = window.yek;
    var opts = { lines: 11 , length: 23, width: 14, radius: 42, scale: .5, corners: 0.5, color: '#000', opacity: 0.1, rotate: 56, direction: 1 , speed: 1 , trail: 60 , fps: 20 , zIndex: 2e9, className: 'spinner', top: '51%', left: '50%', shadow: false, hwaccel: false , position: 'relative'}
    var target = document.getElementById('placeholder') // start the spinner
    var spinner = new Spinner(opts).spin(target);
    var i = index;
    console.log('Getting Emotions from Mashape');
    $.ajax({
      type: "POST",
      url: "https://shl-mp.p.mashape.com/webresources/jammin/emotionV2",
      headers: {
        "X-Mashape-Key": yek,
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "lang": "en",
        "text": analyzeText
      },
      success: function(data, status, jqXHR){
        var emotions = data.groups[0].emotions;
        if (data.groups[1]){emotions = emotions.concat(data.groups[1].emotions)};
        storydata.mapEmotions(emotions, i);
        if (storydata.dataPlots.length === storydata.template.length){
          storydata.overallEmot();
          storydata.graphIt();
          spinner.stop();
        } else {
          console.log('Data not ready to graph yet');
        };
        storydata.count++;
        console.log(storydata.count);
      },
      error: function(jqXHR, status, error){
        console.log(jqXHR);
        console.log(status + ': Error status code');
        console.log(error);
        spinner.stop();
        $('#placeholder').html('<p>Error with call to Mashape</p><p>Error: ' + jqXHR.responseText+ '</p><p>You\'re not authorized are you?</p>');
      },
      dataType: 'json',
    });
  }
};

StoryData.prototype.mapEmotions = function(emotions, index){
    var emotions = emotions;
    var sum = 0;
    var count = 0;
    for(var i = 0; i < emotions.length; i++){
      if (this.emotBank[emotions[i]]){
        sum += this.emotBank[emotions[i]];
        count += 1
      }
    };
    this.arrayOfAvgs.push(parseFloat(sum/count));
    this.dataPlots[index] = [index + 1, parseFloat(sum / count)];
  };

  // mapEmotions takes the collection of emotions per sentence grouping in template array,
  //  sums up their value by mapping to the emotionBank, counts total entries and divides
  //  to find the mean. The mean is the Y in the [X, Y] plot for that sentence.

StoryData.prototype.graphIt = function(){
  dataForGraph = [{
                    data: this.dataPlots,
                    label: "Emotion of the Story",
                    color: "#F0F",
                    // bars: {show:true},
                    lines: {show:true},
                    points: {show:true}
                   }];
  options = {
             legend: {position:"nw"}
             };
  chart = $.plot($("#placeholder"), dataForGraph, options);
};

// calculate the average emotion for entire story and displays in tester box
StoryData.prototype.overallEmot = function(){
    var sum = this.arrayOfAvgs.reduce(function(prev, cur) {
      return prev + cur;
    });
    var gist = sum / this.arrayOfAvgs.length
    var roundedGist = Math.round(gist);
    var gistEmot = this.overArchingEmot[roundedGist];

    //Display in tester box
    $('div#gist').html('<h3>The emotion score of this Story:</h3><p>' + gist + '</p><h4> Emotion: </h4><p>' + gistEmot + '</p>').hide().fadeIn(1000);
};

// loop through sentences to getEmotions for entire story
StoryData.prototype.getMapPlot = function(){
  var storydata = this;
  this.template.forEach(function(sentence, index){
    storydata.getEmotions(sentence, index);
  });
};

// additional text grammar/spell check #doesn't catch display characters
StoryData.prototype.callGingerice = function(text){
  $.ajax({
    type: "GET",
    url: '/grammar',
    data: { "story": text },
    success: function(data, textStatus, jqXHR){
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
      $('#story-preview').html(data['result']);
    },
    error: function(jqXHR, status, error){
      console.log(jqXHR);
      console.log(status + ': Error status code');
      console.log(error);
    },
    dataType: 'json',
  });
};

Array.prototype.searchStringInArray = function(str) {
  // var arr = [];
  for (var j=0; j<this.length; j++) {
    if (this[j].match(str)){
      // arr.push(j);
      return j
    };
  };
  // if (arr.length > 1){
  //   return arr
  // } else {
  return false;
}

$(document).ready(function(){
  $('#story-preview').hide();
  $('#context-box').hide();

  $('textarea').addProofreader({ edit_text_content: 'Edit Text', proofread_content: 'Proofread' });

  // Kick it all off, lets make a storyString:  Press SUBMIT button.
  $('.button-submit').on("click", function(){
    $('#context-box').hide();
    $('#story-preview').show();
    var storyData = new StoryData;
    storyData.makeStory();


    // Allow for Reviewer to HEAR through responsive Voice.  This is the simplest pluggin,
    //   its a $50/month service, but there are opensource plugins that are free, this was
    //   just as simple implementation.
    $('#play').on('click', function(){
      console.log('play sound');
      responsiveVoice.speak($('#story-preview').html());;
    });

  })


  //CONTENTBOX additional feature
  $('.context').on('click', function(){
      $('#context-box').show();
      var storyData1 = new StoryData;
      var templateId = this.id.slice(1);
      var id = '#' + this.id.slice(1).toUpperCase();
      var str = $(id).html();
      console.log(str);
      var indexOfArray = storyData1.template.searchStringInArray(str)
      // console.log(indexOfArray);
      var newTrain = '';
      if (indexOfArray !== false){
        // console.log(indexOfArray.length+" :length");
        // for(var i = 0; i < indexOfArray.length; i++){
          var oldTrain = storyData1.template[indexOfArray];
          var insertSpot = oldTrain.toString().match(str);
          insertSpot = insertSpot['index'];
          var caboose = oldTrain.slice(insertSpot + str.length, -1);
          var frontSlice = oldTrain.slice(0, insertSpot);
          var engine = '<h3>Context for question ' + this.id.slice(2) +':</h3>'
          newTrain += '<p>' + frontSlice + '<span style="color:red">' + str + '</span>' + caboose + '</p></hr>';
        $('#context-box').html(engine + newTrain);
      } else {
        $('#context-box').html("This answer isn't used in this template");
      };
    });
});
