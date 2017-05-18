import { createHistory, useBasename } from "history";

const baseName = () => {
  // Handle basename in browserHistory - for GitHub Page
  let baseName = "/";

  if(window.location.href !== "undefined" && window.location.href.indexOf("https://dominicfallows.github.io/todo-app-react-redux-aws/") > -1) {
    baseName = "/todo-app-react-redux-aws"
  }

  return baseName;
}

export default useBasename(createHistory)({
  basename: baseName()
});