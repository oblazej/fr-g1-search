const axios = require('axios');
const jsdom = require("jsdom");
const Dragon = require('../model/Dragon');

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
            res.status(400).json({ "message": "This dragon is a deity or doesn't exist!" });
            console.error(error);
        });
}

const loadDragonImage = async (req, res) => {
    await axios
        .get(`https://www1.flightrising.com/dragon/${req.params.id}`)
        .then(response => {
            let doc = new jsdom.JSDOM(response.data);
            let dragonImage = [...doc.window.document.querySelector("#dragon-profile-dragon-frame").childNodes][1].src;
            res.json({ img: dragonImage });
        })
        .catch(error => {
            res.status(400).json({ "message": "This dragon is a deity or doesn't exist!" });
            console.error(error);
        });
}


const addDragon = async (req, res) => {
    const { id, owner, price, sex, primaryColor, secondaryColor, tertiaryColor, element } = req.body;

    try {
        const result = await Dragon.create({
            "id": parseInt(id),
            "owner": owner,
            "price": price,
            "sex": sex,
            "primaryColor": parseInt(primaryColor),
            "secondaryColor": parseInt(secondaryColor),
            "tertiaryColor": parseInt(tertiaryColor),
            "element": parseInt(element)
        });

        console.log(result);
        res.status(201).json({ "success": `Dragon was added to the database!` })

    } catch (err) {
        res.status(500).json({ "message": err.message });
    }

};

const getAllDragons = async (req, res) => {
    const dragons = await Dragon.find().sort({_id: -1});
    if(!dragons) return res.status(204).json({"message": "No dragons found."});
    console.log(dragons);
    res.json(dragons);
}

const getDragon = async (req, res) => {
    const dragon = await Dragon.find({id: parseInt(req.params.id)});
    if(!dragon) return res.status(204).json({"message": "No dragons found."});
    console.log(dragon);
    res.json(dragon);
}

module.exports = { loadDragon, addDragon, getAllDragons, getDragon, loadDragonImage };