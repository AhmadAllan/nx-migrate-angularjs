import profileTemplate from './profile.html';
import profileArticlesTemplate from './profile-articles.html';

function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    abstract: true,
    url: '/@:username',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    profileTemplate,
    resolve: {
      profile: function(Profile, $state, $stateParams) {
        return Profile.get($stateParams.username).then(
          (profile) => profile,
          (err) => $state.go('app.home')
        )
      }
    }

  })

  .state('app.profile.main', {
    url:'',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    profileArticlesTemplate,
    title: 'Profile'
  })
  .state('app.profile.favorites', {
    url:'/favorites',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    profileArticlesTemplate,
    title: 'Favorites'
  });

};

export default ProfileConfig;
