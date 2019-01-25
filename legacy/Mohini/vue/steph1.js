
let app = new Vue({
  el: '#app',
  data: {
    players: [
      { name: 'steph curry', votes: 0 },
      { name: 'klay thompson', votes: 0 },
    ]
  },
 methods: {
    voteFor: function(p) {
      p.votes += 1
    }
  }
})