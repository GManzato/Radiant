import { Meteor } from 'meteor/meteor';

import Teams from '/lib/collections/teams.js'

Meteor.publishComposite('teams', {
    find: function() {
        return Teams.find( { 'users.user' : this.userId } );
    },
    children: [
        {
            find: function(team) {
                const ids = team.users.map(function(user){
                    return user.user
                });
                return Meteor.users.find(
                    {_id : {$in : ids}},
                    { fields: {
                        _id : 1,
                        username : 1
                        }
                })
            }
        }
    ]
});

// Meteor.publish('teamsPublic', function(){
//  return Teams.find({userId: {$exists: false}},{
//      fields: Teams.publicFields
//  })
// });
