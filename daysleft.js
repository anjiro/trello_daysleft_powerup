var getBadges = function(t)
{
  return t.card('due').get('due').then(
		function(cardDue)
		{
			if(!cardDue)
				return [];
			var dueDate = new Date(Date.parse(cardDue));
			var daysLeft = Math.floor((dueDate - Date.now())/(3600*24*1000)) + 1;
			return [{text: daysLeft, color: 'red'}];
		}
	)
};

TrelloPowerUp.initialize(
	{
		'card-badges': function(t, options){
			return getBadges(t);},
	}
);
