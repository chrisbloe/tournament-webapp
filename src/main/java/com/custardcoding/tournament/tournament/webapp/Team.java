package com.custardcoding.tournament.tournament.webapp;

import java.io.Serializable;
import java.util.UUID;

/**
 *
 * @author Kris Bloe
 */
public class Team implements Serializable {
    private String id;
    private String name;
    
    public Team() {
        this.id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
