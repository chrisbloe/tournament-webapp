<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        
        <link rel="stylesheet" href="//code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
<!--        <link rel="stylesheet" href="css/vendor/jquery-ui.css">-->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.min.css">
        <link rel="stylesheet" href="css/tournamentEngine.css" />
        <title>Tournament Engine</title>
    </head>
    <body>
        <div class="container">
            <div class="masthead">
                <h3 class="muted">Tournament Engine</h3>
                <div class="navbar">
                    <div class="navbar-inner">
                        <div class="container">
                            <ul class="nav">
                                <li class="active"><a href="#">Home</a></li>
                                <li><a href="#tournaments">Tournaments</a></li>
                                <li><a href="#teams">Teams</a></li>
                                <li><a href="#individuals">Individuals</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row-fluid">
                    <div class="span3">
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
                        <div id="knockout-tournament"></div>
                    </div>
                </div>
            </div>
            <footer>
                <p>A CustardCoding production <script>document.write(new Date().getFullYear());</script></p>
            </footer>
        </div>
        
        <script src="//code.jquery.com/jquery-latest.min.js"></script>
<!--        <script type="text/javascript" src="js/vendor/jquery.js"></script>-->
        <script src="//code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
        <script src="//code.jquery.com/ui/1.10.1/jquery-ui.min.js"></script>
<!--        <script type="text/javascript" src="js/vendor/jquery-ui.js"></script>-->
        <script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/js/bootstrap.min.js"></script>
        
        <script type="text/javascript" src="js/vendor/paper.js"></script>
        <script type="text/javascript" src="//raw.github.com/chrisbloe/tournament-engine/master/tournament-engine/src/main/webapp/js/knockout.js"></script>
        <script type="text/javascript" src="js/tournament.js"></script>
    </body>
</html>