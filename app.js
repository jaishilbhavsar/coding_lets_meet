var express = require('express');
var mysql = require('mysql');
var db = require('./dbconnection');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var u = require('./routes/user_login');
var communities = require('./routes/communities_tbl_routes');
var posts = require('./routes/posts_tbl_routes');
var likes = require('./routes/like_tbl_routes');
var comments = require('./routes/comment_tbl_routes');
var community_member = require('./routes/comm_member_tbl_routes');
var polls = require('./routes/posts_tbl_routes');
var categories = require('./routes/category_tbl_routes');
var user = require('./routes/user_tbl_routes');
var stories = require('./routes/story_tbl_routes');
var comingEvents = require('./routes/upcomingEvents_routes');
var upcEvnByUser = require('./routes/event_upc_reg_route');
var pastEvnByUser = require('./routes/event_past_reg_route');
var events = require('./routes/event_tbl_routes');
var feedbacks = require('./routes/feedback_tbl_routes');
var feedbackByEvent = require('./routes/feedbackByEvent_routes');
var followers = require('./routes/follower_tbl_routes');
var following = require('./routes/following_routes');
var rsvps = require('./routes/rsvp_tbl_routes');
var event_community = require('./routes/event_community_routes');
var demomail = require('./routes/demomail');
var comm_post = require('./routes/community_post_routes');
var post_user = require('./routes/post_user_routes');
var rsvpabc = require('./routes/checkRSVP_routes');
var rsvpCount = require('./routes/countRSVP_routes');
var com_members = require('./routes/community_comm_member_routes');
var membercount = require('./routes/countMembers');
var checkCommMember = require('./routes/checkMember_routes');
var eventRegistered = require('./routes/event_rsvp_route');
var eventNotReg = require('./routes/eventNotReg_routes');
var follow_user = require('./routes/follow_user_routes');
var follow = require('./routes/follow_routes');
var com_post = require('./routes/comment_post_routes');
var change = require('./routes/changepass_routes');
var allmembers = require('./routes/all_com_membr_routes');
var memberlist = require('./routes/memberAddList_routes');
var topcommunity = require('./routes/topCommunities_routes');
var likeByPosts = require('./routes/like_post_user_routes');
var ratings = require('./routes/ratings_tbl_routes');
var deletePost = require('./routes/delete_post_route');
var ratecount = require('./routes/ratecount_routes');
var rating_count = require('./routes/rating_count_routes');
var avg_count = require('./routes/avgRateCount_routes');
var all_story = require('./routes/allstory_routes');
var updateUserOnly = require('./routes/updateUserOnly_route');
var updatePostOnly = require('./routes/updatePostOnly_route');
var updateEventOnly = require('./routes/updateEventOnly_route');
var updateCommunityOnly = require('./routes/updateCommunityOnly_route');
var unApprovedEvent = require('./routes/eventUnapproved_routes');
var deleteAllEvents = require('./routes/deleAllEvents_route');
var commbyuser = require('./routes/community_byuser_routes');
var mycomm = require('./routes/mycommunity_routes');
var myevents = require('./routes/myevent_routes');
var iffollowing = require('./routes/iffollowing_routes');
var infoll = require('./routes/insert_follower_routes');
var delfoll = require('./routes/delete_follower_routes');
var comm_past_Event = require('./routes/community_past_event_route');
var comm_upcoming_event = require('./routes/community_upcoming_events_routes');
var mypastevent = require('./routes/mypastevents_routes');
var myupevents = require('./routes/myupcomingevents_routes');
var ecount = require('./routes/all_count_routes');
var ccount = require('./routes/community_count_routes');
var ucount = require('./routes/user_count_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
/* app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.header("Access-Control-Allow-Origin", 'https://letsmeetbackend.herokuapp.com/');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
}); */
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/topcommunity', topcommunity);
app.use('/rsvpabc', rsvpabc);
app.use('/allmember', allmembers);
app.use('/membercount', membercount);
app.use('/comm_mem_id', com_members);
app.use('/community', communities);
app.use('/post', posts);
app.use('/like', likes);
app.use('/followwhom', follow);
app.use('/comment', comments);
app.use('/comm_member', community_member);
app.use('/poll', polls);
app.use('/category', categories);
app.use('/user', user);
app.use('/login', u);
app.use('/story', stories);
app.use('/event', events);
app.use('/feedback', feedbacks);
app.use('/changePass', change);
app.use('/feedbackByEvent', feedbackByEvent);
app.use('/follower', followers);
app.use('/following', following);
app.use('/rsvp', rsvps);
app.use('/eventCommunity', event_community);
app.use('/demomail', demomail);
app.use('/comm_post', comm_post);
app.use('/post_user', post_user);
app.use('/rsvpCount', rsvpCount);
app.use('/comingEvent', comingEvents);
app.use('/event_reg', eventRegistered);
app.use('/eventNotReg', eventNotReg);
app.use('/follow_user', follow_user);
app.use('/checkMember', checkCommMember);
app.use('/memberList', memberlist);
app.use('/com_post', com_post);
app.use('/likebypost', likeByPosts);
app.use('/rating', ratings);
app.use('/deletePost', deletePost);
app.use('/ratecount', ratecount);
app.use('/ratingcount', rating_count);
app.use('/avgcount', avg_count);
app.use('/allstory', all_story);
app.use('/unApprovedEvent', unApprovedEvent);
app.use('/updateUserOnly', updateUserOnly);
app.use('/updatePostOnly', updatePostOnly);
app.use('/updateEventOnly', updateEventOnly);
app.use('/deleAllEvent', deleteAllEvents);
app.use('/updateCommunityOnly', updateCommunityOnly);
app.use('/upcEvnByUser', upcEvnByUser);
app.use('/pastEvnByUser', pastEvnByUser);
app.use('/commbyuser', commbyuser);
app.use('/mycommunity', mycomm);
app.use('/myevent', myevents);
app.use('/iffollowing', iffollowing);
app.use('/insertfollower', infoll);
app.use('/deletefollower', delfoll);
app.use('/comm_past_event', comm_past_Event);
app.use('/comm_upcoming_event', comm_upcoming_event);
app.use('/mypastevent', mypastevent);
app.use('/myupcomingevent', myupevents);
app.use('/ccount', ccount);
app.use('/ecount', ecount);
app.use('/ucount', ucount);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;