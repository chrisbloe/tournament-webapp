<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        
        <link rel="stylesheet" href="//code.jquery.com/ui/1.10.1/themes/ui-lightness/jquery-ui.min.css" />
<!--        <link rel="stylesheet" href="css/vendor/jquery-ui.css">-->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.min.css">
        <link rel="stylesheet" href="css/tournamentEngine.css" />
        <title>Tournament Engine</title>
    </head>
    <body>
        <div class="container">
            <header>
                <div class="masthead">
                    <h3 class="muted">Tournament Engine</h3>
                    <div class="navbar">
                        <div class="navbar-inner">
                            <div class="container">
                                <ul id="menu" class="nav">
                                    <li class="active"><a href="#">Home</a></li>
                                    <li><a href="#tournaments">Tournaments</a></li>
                                    <li><a href="#teams">Teams</a></li>
                                    <li><a href="#individuals">Individuals</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="container">
                <div class="row-fluid">
                    <div id="createTournamentForm" class="span3">
                        <form>
                            <h2 class="form-horizontal-heading">Create tournament</h2>
                            <div class="control-group">
                                <label class="control-label" for="tournamentTitle">Title</label>
                                <div class="controls">
                                    <input type="text" id="tournamentTitle" placeholder="Title" />
                                </div>
                            </div>
                            <br />
                            <div class="control-group">
                                <label class="control-label" for="newTeam">New team</label>
                                <div class="controls">
                                    <input type="text" id="newTeam" placeholder="New team" />
                                </div>
                                <div class="controls">
                                    <button type="button" class="btn" id="addTeam">Add team</button>
                                </div>
                            </div>
                            <br />
                            <div class="control-group">
                                <label class="control-label" for="currentTeams">Teams</label>
                                <div class="controls">
                                    <select multiple="multiple" id="currentTeams" size="7"></select>
                                </div>
                                <div class="controls">
                                    <button type="button" class="btn" id="removeTeam">Remove selected team(s)</button>
                                </div>
                            </div>
                            <br />
                            <div class="control-group">
                                <div class="controls">
                                    <button type="button" class="btn btn-primary" id="createTournament">Create tournament</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="span9">
                        <div id="knockoutTournament"></div>
                        <form id="matchEditor" hidden="hidden">
                            <div class="span2 match-fixture-container">
                                <h4 class="form-horizontal-heading">Edit match</h4>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="fixture-date input-medium" placeholder="Date" maxlength="10" />
                                        <input type="time" class="fixture-time input-medium" placeholder="Time" />
                                    </div>
                                </div>
                            </div>
                            <div class="span2 offset1 match-result-container">
                                <div class="control-group">
                                    <div class="controls">
                                        <select class="winner input-medium" />
                                        <input type="text" class="home-score input-medium" placeholder="Home score" />
                                        <input type="text" class="away-score input-medium" placeholder="Away score" />
                                    </div>
                                </div>
                            </div>
                            <div class="span2 offset1">
                                <div class="control-group">
                                    <div class="controls">
                                        <button type="button" class="btn btn-primary end-editing-button">Sorted.</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <p>A CustardCoding production 2013</p>
            </footer>
        </div>
        
        <script type="text/javascript" src="//code.jquery.com/jquery-latest.min.js"></script>
        <script type="text/javascript">
            window.jQuery || document.write('<script type="text/javascript" src="js/vendor/jquery.js"><\/script>');
        </script>
        <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
        <script type="text/javascript" src="//code.jquery.com/ui/1.10.1/jquery-ui.min.js"></script>
<!--        <script type="text/javascript" src="js/vendor/jquery-ui.js"></script>-->
        <script type="text/javascript" src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="//underscorejs.org/underscore.js"></script>
        <script type="text/javascript" src="//backbonejs.org/backbone-min.js"></script>
        
        <script type="text/javascript" src="js/vendor/paper.js"></script>
        <script type="text/javascript" src="js/vendor/knockout.js"></script>
<!--        <script type="text/javascript" src="//raw.github.com/chrisbloe/tournament-engine/master/tournament-engine/src/main/webapp/js/knockout.js"></script>-->
        <script type="text/javascript" src="js/views/TournamentCreatorView.js"></script>
        <script type="text/javascript" src="js/views/KnockoutTournamentView.js"></script>
        <script type="text/javascript" src="js/views/EditMatchView.js"></script>
        <script type="text/javascript" src="js/tournament.js"></script>
    </body>
</html>