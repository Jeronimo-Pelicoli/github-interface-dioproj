import { useContext } from "react";
import { GithubContext } from "../provider/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred, getUserFollowing, getUserFollowers } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStarred, getUserFollowing, getUserFollowers };
};

export default useGithub;