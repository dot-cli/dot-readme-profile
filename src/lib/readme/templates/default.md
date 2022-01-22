### Hi there<% if(profile.firstName) { %>, I'm {{ profile.firstName }}<% } %> 👋

<% if(profile.blog) { %>[![Website](https://img.shields.io/website?label=chicocharlesworth.com&style=for-the-badge&url={{ profile.blogAsEncodedURI }})]({{ profile.blog }})<% } %>
<% if(profile.twitter_username) { %>[![Twitter Follow](https://img.shields.io/twitter/follow/{{ profile.twitter_username }}?color=1DA1F2&logo=twitter&style=for-the-badge)](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fgithub.com%2F{{ profile.login }}&screen_name={{ profile.login }})<% } %>

<% if(profile.bioAsMarkdown) { %>## {{ profile.bioAsMarkdown }}<% } %>

<% if(profile.blog || profile.twitter_username) { %>### Connect with me:<% } %>

<% if(profile.blog) { %>[<img align="left" alt="{{ profile.blog }}" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]<% } %>
<% if(profile.twitter_username) { %>[<img align="left" alt="Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]<% } %>

<br />

<br />
<br />

<img align="left" alt="{{ profile.login }}'s GitHub stats" src="https://github-readme-stats.vercel.app/api?username={{ profile.login }}&show_icons=true&icon_color=fff&hide_border=true&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&hide_rank=true" />

<% if(profile.blog) { %>[website]: {{ profile.blog }}<% } %>
<% if(profile.twitter_username) { %>[twitter]: https://twitter.com/{{ profile.twitter_username }}<% } %>
