package com.custardcoding.tournament.tournament.webapp;

import java.util.Collection;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Kris Bloe
 */
@Controller
@RequestMapping(value = "/api/tournament", produces = "application/json")
public class TournamentController {
    private Engine engine = new Engine();
    
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
	public Collection<Tournament> getTournaments() {
        return engine.getTournaments();
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
	public Tournament getTournament(@PathVariable String id) {
        return engine.getTournament(id);
    }
    
    @RequestMapping(consumes = "application/json", method = RequestMethod.POST)
    @ResponseBody
	public Tournament addTournament(@RequestBody Tournament tournament) {
        engine.addTournament(tournament);
        return tournament;
    }
    
    @RequestMapping(value = "/{id}", consumes = "application/json", method = RequestMethod.PUT)
    @ResponseBody
	public Tournament updateTournament(@RequestBody Tournament tournament) {
        engine.addTournament(tournament);
        return tournament;
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
	public void deleteTournament(@PathVariable String id) {
        engine.removeTournament(id);
    }
}
