import React from 'react';

import './Posts.css';
import testData from '../../testData';

console.log("test data:", testData);

export const FullPost = (props) => {

    const postId = props.match.params.postId;
    console.log("postId:", postId);

    return (
        <div className="flex responsive">
            <h1>Blog Post</h1>
            <h2>Part I: Installing Postgresql</h2>

            <div className="roadmap-container">
                <h4>Roadmap</h4>
                <ul>
                    <li>sources (links)</li>
                    <li>section 1 (link)</li>
                    <li>section 2 (link)</li>
                    <li>section 3 (link)</li>
                    <li>TUTORIAL (link)</li>
                </ul>
            </div>

            <div className="p-1-container">
                <h3>Introduction</h3>
                <article>
                There are many ways to install PostgreSQL on a Mac (postgresql.org/download/macosx/). However, Homebrew (https://formulae.brew.sh/formula/postgresql) is one of the easiest ways to install Postgres on a Mac because Homebrew (https://wiki.postgresql.org/wiki/Homebrew) handles dependencies and initializing the database cluster. 
                </article>
            </div>

            <div className="p-2-container">
            <h3>Installation</h3>
            <article>
            Prior to installation, check if Homebrew and PostgreSQL are installed. Sometimes Mac will come with an old version of Postgres, so you can run the following in your terminal to ensure there is no other version installed on your machine: postgres --version. As of February 2021, PostgreSQL 13 is the newest version. With Homebrew installed, you can migrate existing data from a previous version by running brew postgresql-upgrade-database.
            </article>
            <article>
            After successful installation with Homebrew, your machine should have two main PostgreSQL components: a database and a server. There should be a database and user called "postgres," as well as a "template" database that can be used for creating other databases. Additionally, there is a database server program, also called "postgres," which must be started in order to access the postgres database.
            </article>
            </div>

            <div className="p-3-container">
                <h3>Quick Detour</h3>
                <article>
                Web developers have international considerations, so it is a good idea to configure PostgreSQL's timezone for Coordinated Universal Time (UTC) by editing the postgresql.conf file. Inside that file, set the timezone line to UTC. Find the # - Locale and Formatting - section, then look for the "timezone" line. In the example below, timezone is currently set to 'America/Los_Angeles'.
                </article>

                <figure className="screenshot-container">
                    <img alt="screenshot of terminal showing timezone section" />
                    <figcaption></figcaption>
                </figure>
            </div>

            <div className="p-4-container">
                <h3>Starting the Server</h3>
                <article>
                Before you can begin using Postgres, you must start the postgres server (https://www.postgresql.org/docs/9.5/server-start.html). It is best practice to either start the server running in the background (so that it will not take over your terminal) or at startup, when the computer boots, using autostart scripts that are operating-system-specific. (For further discussion, see PostgresSQL documentation, 17.3, https://www.postgresql.org/docs/9.5/server-start.html). While you can start the server with Homebrew, I would suggest using the utility pg_ctl, which will allow you to access the Postgres database even on a machine that does not have Homebrew installed. (And because it's way cooler to use the command line.) For further reading on starting the server, check out this article (https://chartio.com/resources/tutorials/how-to-start-postgresql-server-on-mac-os-x/). 
                </article>
                <figure className="screenshot-container">
                    <img alt="screenshot..." />
                    <figcaption></figcaption>
                </figure>
                <article>
                You can start the postgres server program by 1. using the -D option and specifying the location where the data is stored, or 2. setting environment variables and using the pg_ctl wrapper. To start the server with postgres, you can run the following command in your terminal, replacing "path" with your data path: postgres -D "path". The -D option specifies the location of the data directory, where the PostgreSQL files are stored. (Note: If you don't know your path, you can run the following command in your terminal to obtain it: echo $PGDATA.) 
                </article>
            

                <figure className="screenshot-container">
                    <img alt="screenshot..." />
                    <figcaption></figcaption>
                </figure>
                <article>
                Using the pg_ctl wrapper is a faster way to start and stop the server, so that you don't need to specify the location each time. To use pg_ctl, first set the PGDATA environment variable: export PGDATA=your-path, specifying the appropriate path instead of "your-path". Make sure to restart your terminal for the changes to take effect. Then you can run pg_ctl start to start the server, and pg_ctl stop to stop the server. 
                </article>
            </div>

            <div className="conclusion-container">
            <h3>Conclusion</h3>
            <article>
            You should now know how to install PostgreSQL with Homebrew. If successful, you will have a database cluster initialized with a postgres server you can start and stop as desired. With the postgres server running, you can connect to a postgres database. In the next part of this series, I'll be discussing how to connect to the Postgres database.
            </article>
            </div>

            <footer>
            <div>
                <h3>Breadcrumbs for Series</h3>
                
            </div>
            </footer>
        </div>
    )
}

