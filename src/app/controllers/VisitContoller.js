angular.module('capapp')

.controller("visitContoller", function ($log, $scope) {

	$log.debug("init visit Contoller");
	$scope.visitImages = [
	{name: "1.png",desc:"Beautiful Ancient Temple of ancients built with stones, clay and a very rare granite.",web:"http://www.hyderabadtourism.in/"}, 
	{name:"2.png", desc:"Birla Mandir is a Hindu temple, built on a 280 feet (85 m) high hillock called Naubath Pahad on a 13 acres (53,000 m2) plot. The construction took 10 years and was opened in 1976 by Swami Ranganathananda of Ramakrishna Mission. The temple was constructed by Birla Foundation, which has also constructed several similar temples across India, all of which are known as Birla Mandir.",web:"http://www.hyderabadtourism.in/"},
	{name:"3.png", desc:"Golkonda, also known as Golconda, Gol konda, or Golla konda, is a citadel and fort in Southern India and was the capital of the medieval sultanate of the Qutb Shahi dynasty, is situated 11 kilometres west of Hyderabad",web:"http://www.hyderabadtourism.in/"},
	{name:"4.png", desc:"Falaknuma is a palace in Hyderabad, Telangana, India. It belonged to the Paigah family, and it was later owned by the Nizam of Hyderabad.",web:"http://www.hyderabadtourism.in/"},
	{name:"5.png", desc:"The Ramoji Film City in India is located in Hyderabad. At 1500 acres, it is the largest integrated film city in the world.",web:"http://www.hyderabadtourism.in/"}
	];

   });
