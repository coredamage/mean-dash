/*
  Model classes can be exported and imported directly (not using AngularJS' dependency injection).
*/

class UserModel {
  constructor ($q, $rootScope) {
    'ngInject'

    this.$q = $q
    this.$rootScope = $rootScope
    this.currentUser = null
    this.users = [
      {'id': 0, 'name': 'Seth'},
      {'id': 1, 'name': 'John'},
      {'id': 2, 'name': 'Walley'}
    ]
  }

  getUsers () {
    return this.$q.when(this.users)
  }

  setCurrentUser (user) {
    this.currentUser = user
    this.$rootScope.$broadcast('onCurrentUserUpdated')
  }

  getCurrentUser () {
    return this.currentUser
  }

  getName () {
    return 'World'
  }
}

export default UserModel
