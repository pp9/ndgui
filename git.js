var NodeGit = require("nodegit");
var cloneURL = "https://github.com/pp9/todo.git";
var localPath = require("path").join(__dirname, "tmp");
var cloneOptions = {};
cloneOptions.remoteCallbacks = {
  certificateCheck: function() { return 1; }
};


// NodeGit.Clone(cloneURL, localPath, cloneOptions);
module.exports = {
  gitHandle: function(data) {
    NodeGit.Clone(data, localPath, cloneOptions);
    return data;
  }
}