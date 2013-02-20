/*
 * Copyright (c) 2012 Scottish Friendly Assurance. All Rights Reserved.
 */
package com.custardcoding.tournament.tournament.webapp;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Kris Bloe
 */
public class Engine {
    private Map<String, Tournament> tournaments;

    public Engine() {
        tournaments = new HashMap<String, Tournament>();
        
        Team team = new Team();
        team.setName("Name 1");
        
        Tournament tournament = new Tournament();
        tournament.setTeams(Arrays.asList(team));
        
        tournaments.put(tournament.getId(), tournament);
    }

    public Collection<Tournament> getTournaments() {
        return tournaments.values();
    }

    public void addTournament(Tournament book) {
        tournaments.put(book.getId(), book);
    }

    public void removeTournament(String id) {
        tournaments.remove(id);
    }

    public Tournament getTournament(String id) {
        return tournaments.get(id);
    }
}
