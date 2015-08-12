var NodeGit = require("nodegit");
var cloneURL = "https://github.com/pp9/todo.git";
var localPath = require("path").join(__dirname, "tmp");
var cloneOptions = {};
cloneOptions.remoteCallbacks = {
  certificateCheck: function() { return 1; }
};


// NodeGit.Clone(cloneURL, localPath, cloneOptions);
var path = "/Users/evgeny/dev/todo/tmp/";
module.exports = {
  clone: function(data) {
    NodeGit.Clone(data, localPath, cloneOptions);
    return data;
  },
  open: function() {
    // var pathToRepo = require("path").resolve(path);
    NodeGit.Repository.open("./tmp").then(function (repo) {
      // console.log(repo)
       console.log(repo); 
    })
    .done(function(err) {
      // console.log(err)
    })
  }
}