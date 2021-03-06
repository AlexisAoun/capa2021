var dataObjectclub = clubData;
var listClubString = $('#listClub').html();

dataObjectclub.forEach(buildNewClub);

function buildNewClub(item, index) {
  var listItem = $('<li>' + listClubString + '</li>');
  var listItemName = $('.nameContainer', listItem);
  listItemName.html('<a id="' + item.clubName + '"><h1>' + item.clubName + '</h1>');
  var listItemImage = $('.imageContainer', listItem);
  listItemImage.html('<img class="club_image" src="' + item.clubImage  + '">');
  var listItemdescription = $('.descriptionContainer', listItem);
  listItemdescription.html('<p>' + item.clubDescription + '<br/><a href="#sommaire" style="text-decoration-line: underline;">Revenir au sommaire</a></p>');
  $('#listClub'+item.parrent).append(listItem);
}
/*listItemImage.hmtl.setAttribute("src", item.clubImage);*/

var dataObjectasso = associationData;
var listAssoString = $('#listAsso').html();

dataObjectasso.forEach(buildNewAsso);

function buildNewAsso(item, index) {
  var listItem = $(listAssoString);
  var listItemName = $('.nameContainer', listItem);
  listItemName.html('<a id="' + item.BDX + '"><h1>' + item.assoName + '</h1></a>');
  var listItemImage = $('.imageContainer', listItem);
  listItemImage.html('<img class="image" src="' + item.assoImage  + '">');
  var listItemdescription = $('.descriptionContainer', listItem);
  listItemdescription.html('<p>' + item.assoDescription + '<br/><a href="#sommaire" style="text-decoration-line: underline;">Revenir au sommaire</a></p>');
  $('#asso'+item.BDX).append(listItem);
}
