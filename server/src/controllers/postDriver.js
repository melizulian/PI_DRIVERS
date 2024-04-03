const { Driver, Team } = require('../db.js');
const stringsToPks = require('../utils/stringsToPks.js');

const postDriver = async (req, res) => {
   try {
    const { driver_name, lastname, nationality, image, dob, description, teams } = req.body; 

    if(!driver_name || !lastname || !nationality || !image || !dob || !description || !teams) {
        throw new Error ('Missing information.')
    };

    const newDriver = await Driver.create({
        driver_name,
        lastname,
        nationality,
        image,
        dob,
        description
    });

    const arrayPkTeams = await stringsToPks(teams);

    arrayPkTeams.forEach(team => newDriver.addTeam(team)); 
    
    return newDriver;
   } catch (error) {
        throw error;
   }
}
module.exports = postDriver;