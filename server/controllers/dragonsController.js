const axios = require('axios');
const jsdom = require("jsdom");

const loadDragon = async (req, res) => {
    await axios
        .get(`https://www1.flightrising.com/dragon/${req.params.id}`)
        .then(response => {
            let doc = new jsdom.JSDOM(response.data);
            let dragonBio = [...doc.window.document.querySelectorAll(".dragon-profile-stat-icon-value")]
                .map((item) => item.textContent.replace(/(\r\n|\n|\r)/gm, "")
                .trim()
                .split(" ")[0]);
            if (dragonBio.length === 0) return res.status(400).json({ "message": "This dragon was exalted or doesn't exist!" });
            let dragonLineage = doc.window.document.querySelector(".dragon-profile-lineage-parents");
            if ([...dragonLineage.childNodes][1].textContent !== "none") return res.status(400).json({ "message": "This dragon is not first gen!" });
            let dragonImage = [...doc.window.document.querySelector("#dragon-profile-dragon-frame").childNodes][1].src;
            let dragonSex = doc.window.document.querySelector("#dragon-profile-icon-sex-tooltip").childNodes[1].textContent;
            
            res.json({ bio: dragonBio, img: dragonImage, sex: dragonSex });
        })
        .catch(error => {
            console.error(error);
        });
}

module.exports = { loadDragon };