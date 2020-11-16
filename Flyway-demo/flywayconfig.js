import {flyway} from 'node-flywaydb'

export const flywayArgs = {
    url: 'jdbc:mysql://localhost:3306/usersmanagement',
    user: 'root',
    password: '',
    schemas: 'public',
    locations: 'filesystem:/sql',
    sqlMigrationSuffixes: '.sql',    

}