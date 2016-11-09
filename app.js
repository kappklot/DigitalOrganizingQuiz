//  show front page to user
//  show 1st question to user, update components to see the next page
//  store user input value for 1st question
//  repeat line 2+3 for every question
//  calculate user input for each question, add together
//  display appropriate result

// add data structure -- rather than a numerical index, have one word description for each answer title. 
// move array to object
//set up array of questions

var resultOptions = {
	communications: {
		title: 'You should work on… organizing/communications strategy. ',
 		desc: '<p>You have a gift for political education, relationship building, and connecting with others around shared ideology.  By learning the hows and whys of communications strategy, you can take the innate skills you already use to connect with others and start to build a broader strategy.</p>' +
			'<p>To start, check out The Center for Story Based Strategy’s movement storytelling tools.</p> <img src=""/>'
	},

	social: {
		title: 'You should work on following and connecting w/ others on social media.',
		desc: '<p>You don’t take this work lightly: your detail oriented and powerful planning skills make intangible problems into tangible organizing strategy.  By learning more about social media and the ways that political education happens online (beyond metrics!), you can take your strategy skills to the next level and create even more solid wins. </p>' +
			'<p>To start, check out (shameless self promotion) my training on tracking social media metrics, then ease into the discomfort by following these folks on Twitter.</p>'
	},

	security: {
		title: 'You should work on sharing knowledge around security principles.',
		desc: 'There’s nothing more prescient in 2016 than some healthy paranoia.  You’re right to be cautious: work on turning your reasonable concerns into conscious best practices that you share with your comrades.' +
			'<p>Check out The Ruckus Society’s guide to security culture, tools like Tor, Signal, and HTTPS Everywhere, and considering putting together a training or encrypted doc for your people.</p>' 
	},

	design: {
		title: 'Ds You should work on your design and artistry skills.',
		desc: '<p>The world can’t change unless there are people not just smashing the system, but envisioning better ways to exist.' + 'You take big, meaningful concepts like liberation, abolition, and think about both the big picture and the details of what it means to live in a better world.  Consider learning more about sharing your vision with others through art, writing, and other creative tools.</p>' +
			'<p>Check out artists groups like For the People’s Artist Collective, Design Action Collective, and the Trans Life and Liberation Art Project for inspiration and motivation.</p>'
	},
}

var Questions = [



]
console.log(resultOptions);


//display quiz
// $("question")hide.()
// $("begin")onclick.()reveal.("question1");


//for every answer, give a score.  tier score based on value.  
//share results on Twitter or Facebook.
//Meetup API -- join, here are some meetups in your area that are similar
//https://github.com/meetup/must.js
// *find api that is directly accessible from the browser*
//Action Network API or Slack API