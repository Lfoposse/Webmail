angular.module('WebmailApp')


.controller('webmailCtrl', function($scope){

    $scope.folders = [
  {
    "value": "RECEPTION",
    "label": "Mailbox",
    "mails": [
      {
        "id": 0,
        "from": "Montoya Mcintosh",
        "to": "Maribel Clarke",
        "subject": "mollit",
        "date": "2017-04-18 11:06:15",
        "content": "Consectetur minim in dolor nostrud cillum et cupidatat. Quis elit nulla eiusmod est commodo nostrud. In Lorem esse cillum ea mollit ad aute et consequat quis eiusmod.\r\n"
      },
      {
        "id": 1,
        "from": "Dunn Kent",
        "to": "Munoz Watkins",
        "subject": "fugiat",
        "date": "2017-04-14 05:40:27",
        "content": "Aute do irure dolore aliqua tempor incididunt Lorem proident eu amet pariatur tempor id. Ad sint aute nulla cupidatat laboris enim dolor fugiat elit officia elit mollit commodo. Duis in veniam commodo Lorem exercitation ipsum anim dolor nostrud laboris. Proident esse do id amet sunt in cillum nostrud minim aute fugiat.\r\n"
      },
      {
        "id": 2,
        "from": "Mona Lynn",
        "to": "Allison Conrad",
        "subject": "laboris",
        "date": "2017-04-20 02:38:46",
        "content": "Elit quis Lorem veniam mollit adipisicing et sunt enim sunt consequat id aliqua tempor. Reprehenderit esse pariatur minim laboris tempor ullamco cillum aute. Pariatur et fugiat officia enim aliquip aliqua duis tempor enim. Tempor consectetur dolore labore irure enim sint fugiat aliqua irure in sunt minim adipisicing. Laboris qui veniam incididunt est est eiusmod ut officia excepteur nostrud nulla amet exercitation adipisicing. Elit non culpa nostrud ad. Lorem deserunt nisi do commodo exercitation pariatur sunt.\r\n"
      },
      {
        "id": 3,
        "from": "Georgina Weaver",
        "to": "Carey Mccall",
        "subject": "aute",
        "date": "2017-04-15 07:20:48",
        "content": "Officia consectetur deserunt nulla laboris voluptate enim consequat cupidatat enim. Id aute eiusmod laborum non sunt elit ipsum eiusmod culpa aliquip eu commodo consequat anim. Mollit sit nulla mollit sint voluptate sint velit laboris reprehenderit qui nulla nulla eiusmod. Quis elit exercitation pariatur enim fugiat excepteur qui amet anim culpa enim aliqua eiusmod enim. Aliqua quis amet consectetur reprehenderit labore duis elit veniam esse ut velit. Ex magna incididunt proident fugiat aute occaecat qui occaecat occaecat adipisicing nostrud sint exercitation dolore.\r\n"
      }
    ]
  },
  {
    "value": "DRAFT",
    "label": "Draft",
    "mails": [
      {
        "id": 0,
        "from": "Christie Whitney",
        "to": "Marsh Fernandez",
        "subject": "proident",
        "date": "2017-04-14 09:33:18",
        "content": "Qui ad dolore ea duis aliqua quis sit ea culpa adipisicing. Sit dolor dolor sunt reprehenderit cupidatat id exercitation pariatur ut enim eiusmod sint. Tempor est proident mollit Lorem velit exercitation amet amet anim ex. Qui aute ea tempor veniam ullamco excepteur. Occaecat esse nulla consectetur deserunt mollit fugiat. Esse elit dolore aliqua quis.\r\n"
      },
      {
        "id": 1,
        "from": "Abigail Rosales",
        "to": "Theresa Pitts",
        "subject": "consectetur",
        "date": "2017-04-20 03:21:32",
        "content": "Ullamco sit magna consectetur quis duis. Dolore non laborum culpa laboris irure sit labore in eu id veniam. Dolore anim et esse occaecat ipsum non. Nulla irure duis ex proident veniam magna.\r\n"
      },
      {
        "id": 2,
        "from": "Deanna Kennedy",
        "to": "Pearlie Wilkinson",
        "subject": "velit",
        "date": "2017-04-07 12:15:37",
        "content": "Deserunt adipisicing cupidatat cupidatat et aliqua elit velit velit incididunt esse. Enim proident amet voluptate in aliqua aute excepteur nisi fugiat nisi est. Officia sit eiusmod tempor minim dolore. Excepteur mollit cupidatat elit magna minim commodo eu. Nulla elit labore consectetur sit ea.\r\n"
      },
      {
        "id": 3,
        "from": "Summer Cruz",
        "to": "Silva Wilson",
        "subject": "eiusmod",
        "date": "2017-04-12 10:20:59",
        "content": "Do cupidatat eiusmod elit culpa id ex dolore sunt elit cupidatat et Lorem tempor eiusmod. Culpa elit in magna anim minim non sint commodo proident esse elit consectetur eiusmod. Culpa tempor veniam laborum cupidatat anim dolore Lorem. Nulla ullamco amet reprehenderit irure proident sint magna voluptate et enim non.\r\n"
      }
    ]
  },
  {
    "value": "SPAM",
    "label": "Spam",
    "mails": [
      {
        "id": 0,
        "from": "York Howe",
        "to": "Watson Richard",
        "subject": "nulla",
        "date": "2017-04-16 10:17:51",
        "content": "Reprehenderit ipsum incididunt ipsum pariatur reprehenderit. Fugiat consequat culpa qui minim sunt veniam nostrud tempor non laboris nostrud. Reprehenderit officia quis veniam ex labore aliquip tempor commodo deserunt esse. Nisi tempor nisi esse deserunt ea in sit magna. Exercitation eiusmod ut commodo exercitation laboris amet anim.\r\n"
      },
      {
        "id": 1,
        "from": "Angel Gould",
        "to": "Decker Koch",
        "subject": "incididunt",
        "date": "2017-04-25 09:03:37",
        "content": "Enim aliquip ut magna dolor ea ut eiusmod aliqua dolor Lorem cupidatat reprehenderit duis quis. Esse proident do ut adipisicing nostrud laboris fugiat. Quis nulla dolor tempor do ad id officia. Reprehenderit enim eu qui cillum quis deserunt tempor deserunt nostrud cillum duis sit.\r\n"
      }
    ]
  },
  {
    "value": "SENT",
    "label": "Sent",
    "mails": [
      {
        "id": 0,
        "from": "Rice Stark",
        "to": "Herring Odonnell",
        "subject": "ad",
        "date": "2017-04-13 04:16:50",
        "content": "Mollit Lorem cillum pariatur proident officia sunt minim minim pariatur aliqua id. Esse id excepteur aliquip sit occaecat culpa esse ex labore. Adipisicing consequat minim eiusmod anim sunt sunt et ex dolore do labore magna do. Sit pariatur ut qui cupidatat duis consequat id ullamco do tempor magna tempor.\r\n"
      },
      {
        "id": 1,
        "from": "Mosley Shields",
        "to": "Celeste Irwin",
        "subject": "dolore",
        "date": "2017-04-16 08:04:06",
        "content": "Est ea adipisicing laboris deserunt aliquip. Qui sit et enim cupidatat ad aute ex. Aute ex fugiat officia deserunt culpa exercitation sit pariatur nulla. Ex Lorem occaecat minim sit occaecat laborum dolor consequat commodo ea occaecat occaecat labore id. Voluptate veniam laborum excepteur sint in cupidatat esse dolore. Dolor incididunt non commodo commodo ullamco eiusmod officia nulla sunt deserunt esse. Commodo labore in aliquip labore adipisicing ut reprehenderit minim fugiat occaecat eu non dolor.\r\n"
      },
      {
        "id": 2,
        "from": "Natalia Landry",
        "to": "Etta Herring",
        "subject": "labore",
        "date": "2017-04-12 05:03:57",
        "content": "Exercitation amet tempor ipsum ut. Nostrud reprehenderit aliquip esse labore ex commodo velit cillum in excepteur nulla ea ullamco ea. Sunt in sint id ullamco incididunt tempor. Enim in nostrud ullamco labore sunt velit. Aute sit adipisicing nostrud consequat commodo. Ut exercitation non deserunt consectetur veniam sit cupidatat labore laboris velit nulla. Sint sit amet eu voluptate dolor reprehenderit eiusmod non eu aute amet aliqua occaecat.\r\n"
      },
      {
        "id": 3,
        "from": "Malinda Ramirez",
        "to": "Donovan Trevino",
        "subject": "deserunt",
        "date": "2017-04-06 03:32:02",
        "content": "Nulla labore cupidatat deserunt proident eu non dolor velit id mollit mollit. Irure aliquip id anim duis sit proident qui cillum sit id cupidatat. Sit incididunt quis quis ex esse ullamco. Cupidatat ut esse proident excepteur. Fugiat qui do duis duis consectetur eiusmod incididunt. Culpa pariatur ut amet do adipisicing dolor eiusmod laborum commodo magna. Qui excepteur ea in aute labore nulla magna magna proident eu aute.\r\n"
      },
      {
        "id": 4,
        "from": "Natalia Landry",
        "to": "Etta Herring",
        "subject": "labore",
        "date": "2017-04-12 05:03:57",
        "content": "Nostrud reprehenderit aliquip esse labore ex commodo velit cillum in excepteur nulla ea ullamco ea. Sunt in sint id ullamco incididunt tempor. Enim in nostrud ullamco labore sunt velit. Aute sit adipisicing nostrud consequat commodo. Ut exercitation non deserunt consectetur veniam sit cupidatat labore laboris velit nulla. Sint sit amet eu voluptate dolor reprehenderit eiusmod non eu aute amet aliqua occaecat.\r\n"
      },
      {
        "id": 5,
        "from": "Malinda Ramirez",
        "to": "Donovan Trevino",
        "subject": "deserunt",
        "date": "2017-04-06 03:32:02",
        "content": "deserunt proident eu non dolor velit id mollit mollit. Irure aliquip   nlla labore cupidatat deserunt proident eu non dolor velit id mollit mollit. Irure aliquip id anim duis sit proident qui cillum sit id cupidatat. Sit incididunt quis quis ex esse ullamco. Cupidatat ut esse proident excepteur. Fugiat qui do duis duis consectetur eiusmod incididunt. Culpa pariatur ut amet do adipisicing dolor eiusmod laborum commodo magna. Qui excepteur ea in aute labore nulla magna magna proident eu aute.\r\n"
      }
    ]
  }
];

$scope.curentFolder = null;
$scope.selectFolder = function(folder){
   $scope.curentFolder = folder;
   $scope.curentMail = null;
}

$scope.curentMail = null;
$scope.selectMail = function(mail){
   $scope.curentMail = mail;
}


})

.controller('httpCtrl', function($scope, $http) {
    $scope.data = null;
    $scope.nbMails = 5;
    $http({
  method: 'GET',
  url: 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    alert(response);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});