/*
 * Copyright (c) 2012 Scottish Friendly Assurance. All Rights Reserved.
 */
package com.custardcoding.tournament.tournament.webapp;

import java.io.Serializable;
import java.util.Collection;
import java.util.UUID;

/**
 *
 * @author Kris Bloe
 */
public class Tournament implements Serializable {
    private String id;
    private Collection<Team> teams;

    // Required by Jackson
    public Tournament() {
        this.id = UUID.randomUUID().toString();
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Collection<Team> getTeams() {
        return teams;
    }

    public void setTeams(Collection<Team> teams) {
        this.teams = teams;
    }
}
