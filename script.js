$(".one").hide();
$(".exit").hide();
$(".exit").click (function () {
          $(".one").hide();
          $(".one").empty();
          $(".exit").hide();
})
$(document).ready(function () {
          $.getJSON("https://ddragon.leagueoflegends.com/api/versions.json", function (data) {
                    $(".patch").text(data[0]);
                    init(data[0]);
          }).fail(function () {
                    console.log("Error");
          })
          console.log(patch.val);

})
function init(patch) {
          $(document).ready(function () {
                    $.getJSON(`http://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/champion.json`, function (data) {
                              // console.log(data.data);
                              for (var prop in data.data) {
                                        if (data.data.hasOwnProperty (prop)) {
                                                  // console.log (data.data[prop].name);
                                                  $("section").append (` 
                                                            <img class = "icon" id = "${data.data[prop].id}" src ="http://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${data.data[prop].id}.png" alt = "">
                                                 `);
                                                  // $(`#${data.data[prop].id}`).click (function () {
                                                  //           info (data.data[prop].id, patch);
                                                  // })
                                                  info (data.data[prop].id, patch);
                                        }
                              }
                    }).fail(function () {
                              console.log("Error");
                    })
          })
}
function info (id, patch) {    
          $(document).ready(function () {
                    $(`#${id}`).click (function () {
                              $(".exit").show();
                              $.getJSON (`http://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/champion/${id}.json`, function (data) {
                                        console.log (data);
                                        $(".one").css ("background-image", `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg")`);
                                        $(".one").append (`<h1> ${data.data[id].name} </h1>`);
                                        $(".one").append (`<h2> ${data.data[id].title} </h2>`);
                                        $(".one").append (`<div class = "lore"> ${data.data[id].lore} </div>`);
                                        $(".one").append (`<div class = "spells"> 
                                                  <div> <img class = "sp" src = "http://ddragon.leagueoflegends.com/cdn/${patch}/img/passive/${data.data[id].passive.image.full}">
                                                            <span> ${data.data[id].passive.name}</span>
                                                            <p>  ${data.data[id].passive.description} <p>
                                                  </div>
                                        </div>`);
                                        data.data[id].spells.map (spell => {
                                                  $(".spells").append (`
                                                            <div> 
                                                            <img class = "sp"src = "http://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${spell.id}.png">
                                                            <span> ${spell.name} </span>
                                                            <p> ${spell.description} </p>
                                                            </div>
                                                  `)
                                        })
                                        $(".one").show();
                              }).fail (function () {
                                        console.log ("Error when get cham info");
                              })
                    })
          })
}